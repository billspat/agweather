import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { getMawnForecast, MawnFetchError } from '$lib/server/mawn';

export const GET: RequestHandler = async ({ params }) => {
	const stationParam = params.station;
	if (!stationParam) {
		throw error(400, 'Station parameter is required');
	}

	try {
		const forecast = await getMawnForecast(stationParam);
		return json(forecast, {
			headers: {
				// Forecasts update periodically; cache briefly in browser and edge
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
