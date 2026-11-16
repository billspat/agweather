import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { getMawnForecast, MawnFetchError } from '$lib/server/mawn';
import { MAWN_STATIONS } from '$lib/forecast-stations';

export const GET: RequestHandler = async ({ url }) => {
	const stationParam = url.searchParams.get('station');

	// If no station specified, return the list of available stations and usage info
	if (!stationParam) {
		return json({
			description: 'MAWN 60-Hour NBM/NBS Forecast API Proxy',
			usage: '/api/forecasts?station=<code-or-callsign> or /api/forecasts/<station>',
			defaultStation: 'klan',
			stations: MAWN_STATIONS
		});
	}

	try {
		const forecast = await getMawnForecast(stationParam);
		return json(forecast, {
			headers: {
				'Cache-Control': 'public, max-age=300, s-maxage=600'
			}
		});
	} catch (err: unknown) {
		if (err instanceof MawnFetchError) {
			throw error(err.status, err.message);
		}
		const message = err instanceof Error ? err.message : 'Unknown server error';
		throw error(500, `Failed to load forecast for station ${stationParam}: ${message}`);
	}
};
