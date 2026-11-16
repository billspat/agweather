import type { MawnForecastResponse } from '$lib/types/forecast';
import { normalizeStationCode, getMawnDataUrl, findStation } from '$lib/forecast-stations';

export class MawnFetchError extends Error {
	status: number;
	stationCode: string;

	constructor(message: string, status: number, stationCode: string) {
		super(message);
		this.name = 'MawnFetchError';
		this.status = status;
		this.stationCode = stationCode;
	}
}

/**
 * Server-side function to read 60-hour forecast JSON from the MAWN repository:
 * https://mawn.geo.msu.edu/rawdata/legacy/fcsts/nbmnbs/data/fous16<station>.json
 *
 * Runs exclusively on the server, avoiding browser CORS limitations.
 */
export async function getMawnForecast(stationInput: string): Promise<MawnForecastResponse> {
	const stationCode = normalizeStationCode(stationInput);
	if (!stationCode || !/^[a-z0-9_-]{2,10}$/.test(stationCode)) {
		throw new MawnFetchError(`Invalid station code: "${stationInput}"`, 400, stationInput);
	}

	const url = getMawnDataUrl(stationCode);

	let response: Response;
	try {
		response = await fetch(url, {
			headers: {
				'User-Agent': 'MSU-AgWeather-Office/1.0 (+https://geo.msu.edu; andresen@msu.edu)',
				Accept: 'application/json, text/plain, */*'
			},
			signal: AbortSignal.timeout(12000)
		});
	} catch (err: unknown) {
		const message = err instanceof Error ? err.message : 'Network request failed';
		console.error(`[MAWN fetch error] Failed to reach ${url}:`, message);
		throw new MawnFetchError(
			`Unable to reach MAWN forecast server at ${url}. ${message}`,
			502,
			stationCode
		);
	}

	if (response.status === 404) {
		const station = findStation(stationCode);
		const label = station ? `${station.name} (${station.code})` : stationCode;
		throw new MawnFetchError(
			`No forecast data file found for station ${label} on MAWN server.`,
			404,
			stationCode
		);
	}

	if (!response.ok) {
		throw new MawnFetchError(
			`MAWN forecast server returned HTTP status ${response.status} (${response.statusText}).`,
			response.status >= 500 ? 502 : response.status,
			stationCode
		);
	}

	try {
		const data = (await response.json()) as MawnForecastResponse;
		return data;
	} catch (parseErr) {
		console.error(`[MAWN JSON error] Failed to parse JSON from ${url}:`, parseErr);
		throw new MawnFetchError(
			`Failed to parse forecast data returned from MAWN as JSON.`,
			502,
			stationCode
		);
	}
}
