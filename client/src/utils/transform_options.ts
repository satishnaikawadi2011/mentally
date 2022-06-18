export const transformListToOptions = (options: any[]) => {
	let transformOptions: any = {};
	options.forEach((opt) => {
		transformOptions[opt] = opt;
	});
	return transformOptions;
};
