function findIndex(array, inputValue) {
	if (!array || array.length <= 0) {
		return -1;
	}

	let start = 0;
	let end = array.length - 1;
	let result = -1;

	while (start <= end) {
		const pivot = Math.round((end - start) / 2) + start;
		if (array[pivot] === inputValue) {
			result = pivot;
			break;
		}

		if (array[pivot] > inputValue) {
			end = pivot - 1;
		} else {
			start = pivot + 1;
		}
	}
	return result;
}

export { findIndex };
