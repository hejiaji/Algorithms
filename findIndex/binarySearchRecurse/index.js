function findIndexByBinary(array, initialIndex, lastIndex, inputValue) {
	const pivot = Math.round((lastIndex - initialIndex) / 2) + initialIndex;
	if (initialIndex > lastIndex) {
		return -1;
	}
	if (array[pivot] === inputValue) {
		return pivot;
	}
	if (inputValue < array[pivot]) {
		return findIndexByBinary(array, initialIndex, pivot  - 1, inputValue);
	}
	return findIndexByBinary(array, pivot + 1, lastIndex, inputValue);
}

function findIndex(array, inputValue) {
	if (!array || array.length <= 0) {
		return -1;
	}
	return findIndexByBinary(array, 0, array.length - 1, inputValue);
}

export { findIndex };
