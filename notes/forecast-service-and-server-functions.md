# MAWN 60-Hour Forecast Service & Server-Side Functions

This document explains how the server-side forecast architecture is designed for the MSU Agricultural Weather Office website.

---

## 1. Problem & Context

The Michigan Automated Weather Network (MAWN) publishes formatted 60-hour point forecast guidance from the National Blend of Models (NBM/NBS) at:
```
https://mawn.geo.msu.edu/rawdata/legacy/fcsts/nbmnbs/data/
```
The files follow the naming convention:
```
fous16<station-code-lowercase>.json
```
For example:
- Lansing (Capital City Airport / MSU): `fous16klan.json`
- Grand Rapids: `fous16kgrr.json`
- Traverse City: `fous16ktvc.json`

### Why Server-Side is Required (CORS)
The MAWN web server (`mawn.geo.msu.edu`) does not include permissive `Access-Control-Allow-Origin` (CORS) headers for third-party browser origins. Direct client-side calls (`fetch(...)` from browser JavaScript) fail due to browser security restrictions.

By introducing SvelteKit server-side functions, the server requests the data directly from MAWN over HTTPS (where CORS does not apply) and delivers it cleanly to the frontend.

---

## 2. Architecture & File Overview

| File | Purpose |
|---|---|
| `svelte.config.js` | Configured with `@sveltejs/adapter-auto` to enable server endpoints and SSR. |
| `src/lib/types/forecast.ts` | TypeScript interfaces for MAWN units, forecast intervals, and station objects. |
| `src/lib/forecast-stations.ts` | Curated station registry grouped by Michigan region, with helper functions. |
| `src/lib/server/mawn.ts` | Server-only module that fetches and parses raw JSON from the MAWN repository. |
| `src/routes/api/forecasts/[station]/+server.ts` | REST API proxy endpoint (`GET /api/forecasts/klan`). |
| `src/routes/api/forecasts/+server.ts` | REST API query proxy (`GET /api/forecasts?station=klan`). |
| `src/routes/forecasts/+page.server.ts` | SvelteKit server load function for the `/forecasts` route. |
| `src/routes/forecasts/+page.svelte` | Interactive frontend with accessible station picker and forecast table. |

---

## 3. Station Code Normalization

The normalization function (`normalizeStationCode` in `$lib/forecast-stations.ts`) allows forgiving station inputs:

- `"klan"` &rarr; `"klan"` &rarr; fetches `fous16klan.json`
- `"KLAN"` &rarr; `"klan"` &rarr; fetches `fous16klan.json`
- `"LAN"` &rarr; `"klan"` &rarr; (auto-prepends 'k' for 3-letter ICAO callsigns)
- `"fous16klan"` &rarr; `"klan"` &rarr; fetches `fous16klan.json`
- `"fous16klan.json"` &rarr; `"klan"` &rarr; fetches `fous16klan.json`

---

## 4. API Endpoints

You can query the server proxy directly:

- `GET /api/forecasts/klan` &mdash; Returns the 60-hour forecast for Lansing as JSON.
- `GET /api/forecasts?station=kgrr` &mdash; Returns the forecast for Grand Rapids as JSON.
- `GET /api/forecasts` &mdash; Returns documentation and the list of supported Michigan stations.

Responses are cached for 5 minutes (`Cache-Control: public, max-age=300, s-maxage=600`) to avoid hammering the upstream MAWN server.

---

## 5. Accessibility (WCAG 2.2 AA) in the Forecast Table

The forecast table in `src/routes/forecasts/+page.svelte` adheres to MSU Web Standards:
1. **Screen-reader caption**: Uses `<caption class="sr-only">` to describe the data table purpose and time range.
2. **Column headers**: All headers declare `<th scope="col">` with explicit units (°F, mph, in, %).
3. **Row headers**: Time/date cells use `<th scope="row">` so screen readers announce the timestamp when reading values across a row.
4. **Contrast & Color Semantics**: Temperature and probability styling use accessible text colors with bold formatting rather than relying solely on color.
5. **Horizontal scrolling**: Wrapped inside `<div class="overflow-x-auto">` with keyboard-friendly focus behavior for small mobile screens.
