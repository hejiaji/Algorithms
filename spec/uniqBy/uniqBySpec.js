import { unique } from '../../uniqBy';

describe('unique', () => {
	it('return sorted array when using asc order', () => {
		const test = [{ x: 1 }, { x: 2 }, { x: 1 }];
		expect(unique(test, 'x')).toEqual([{ x: 1 }, { x: 2 }]);
	});
});
