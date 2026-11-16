import type { PageServerLoad } from './$types';
import { getMawnForecast, MawnFetchError } from '$lib/server/mawn';
import { MAWN_STATIONS, findStation, normalizeStationCode } from '$lib/forecast-stations';
import type { MawnForecastResponse } from '$lib/types/forecast';

export const load: PageServerLoad = async ({ url }) => {
	const requestedCode = url.searchParams.get('station') || 'klan';
	const normalizedCode = normalizeStationCode(requestedCode);
	const matchedStation = findStation(normalizedCode) ?? {
		code: normalizedCode,
		name: requestedCode.toUpperCase(),
		region: 'Other'
	};

	let forecast: MawnForecastResponse | null = null;
	let fetchError: string | null = null;

	try {
		forecast = await getMawnForecast(normalizedCode);
	} catch (err: unknown) {
		if (err instanceof MawnFetchError) {
			fetchError = err.message;
		} else {
			fetchError = err instanceof Error ? err.message : 'Failed to retrieve forecast data';
		}
	}

	return {
		title: `60-Hour Forecast: ${matchedStation.name}`,
		pageTitle: 'Agricultural Weather Office',
		currentStation: matchedStation,
		stations: MAWN_STATIONS,
		forecast,
		fetchError
	};
};
