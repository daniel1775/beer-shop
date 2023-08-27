export const objectFieldsActive = (object: { [key: string]: boolean }) => {
	let fieldsActive = 0;
	Object.keys(object).forEach((key) => {
		if (key in object && object[key]) {
			fieldsActive++;
		}
	});
	return fieldsActive;
};
