export function isNumeric(str: string) {
	if (typeof str != 'string') return false; // we only process strings!
	return (
		!isNaN(str as any) && !isNaN(parseFloat(str)) // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
	); // ...and ensure strings of whitespace fail
}
