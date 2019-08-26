import { findIndex } from '../../findIndex/bruteForce/index';

const array = [1, 3, 5, 6, 7, 11, 100];

describe('find index brute force', () => {
	it('return -1 when input is not in array or array is not valid', () => {
		expect(findIndex(array, 2)).toEqual(-1);
		expect(findIndex([], 1)).toEqual(-1);
		expect(findIndex(array, [-1])).toEqual(-1);
	});

	it('return correct index when input is in array or array is valid', () => {
		expect(findIndex(array, 1)).toEqual(0);
		expect(findIndex(array, 100)).toEqual(6);
		expect(findIndex(array, 5)).toEqual(2);
	});
});
