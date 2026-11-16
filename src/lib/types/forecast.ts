export interface MawnUnits {
	temperature: string;
	wind_speed: string;
	precipitation: string;
	probability: string;
	cloud_cover: string;
}

export interface MawnForecastEntry {
	valid_at: string;
	temperature: number | null;
	dew_point: number | null;
	relative_humidity: number | null;
	wind_speed: number | null;
	wind_direction: string | null;
	cloud_cover: number | null;
	cloud_description: string | null;
	precipitation_probability_6h: number | null;
	thunderstorm_probability_6h: number | null;
	precipitation_amount_6h: number | null;
	snow_amount_6h: number | null;
	precipitation_probability_12h: number | null;
	thunderstorm_probability_12h: number | null;
	precipitation_amount_12h: number | null;
	max_min_temperature_12h: number | null;
}

export interface MawnForecastResponse {
	station: string;
	initialized_at: string;
	units: MawnUnits;
	forecasts: MawnForecastEntry[];
}

export interface ForecastStation {
	code: string;
	name: string;
	region: string;
}
