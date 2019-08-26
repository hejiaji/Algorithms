function findIndex(array, inputValue) {
	if (!array || array.length <= 0) {
		return -1;
	}
	for (let i = 0; i < array.length; i++) {
		if (array[i] === inputValue) {
			return i;
		}
	}
	return -1;
}

export { findIndex };
