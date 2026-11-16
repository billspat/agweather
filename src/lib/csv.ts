/** Generic helpers for converting JSON-like row data to CSV and triggering a browser download. */

/** A single flat record whose values will become one CSV row. */
export type CsvRow = Record<string, unknown>;

/** Escape a single CSV field per RFC 4180 (quote if it contains a comma, quote, or newline). */
function escapeCsvField(value: unknown): string {
	if (value === null || value === undefined) return '';
	const str = String(value);
	if (/[",\n\r]/.test(str)) {
		return `"${str.replace(/"/g, '""')}"`;
	}
	return str;
}

/**
 * Convert an array of flat objects into a CSV string.
 * @param rows the data to convert
 * @param columns optional ordered list of keys/headers to include; defaults to the keys of the first row
 */
export function jsonToCsv<T extends object>(rows: T[], columns?: (keyof T)[]): string {
	if (rows.length === 0) return '';
	const keys = columns ?? (Object.keys(rows[0]) as (keyof T)[]);
	const header = keys.map((key) => escapeCsvField(key)).join(',');
	const lines = rows.map((row) => keys.map((key) => escapeCsvField(row[key])).join(','));
	return [header, ...lines].join('\r\n');
}

/** Trigger a browser download of the given CSV text as a file. Must be called from client-side code. */
export function downloadCsv(filename: string, csvContent: string): void {
	const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
	const url = URL.createObjectURL(blob);
	const link = document.createElement('a');
	link.href = url;
	link.download = filename;
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
	URL.revokeObjectURL(url);
}
