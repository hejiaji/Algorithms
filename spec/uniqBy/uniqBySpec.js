import { uniqBy } from '../../uniqBy';

describe('uniqBy', () => {
	it('return distinct array using one property', () => {
		const test = [{ x: 1 }, { x: 2 }, { x: 1 }];
		expect(uniqBy(test, ['x'])).toEqual([{ x: 1 }, { x: 2 }]);
	});

	it('return distinct array using one property', () => {
		const test = [{ x: 1 }, { x: 2 }, { x: 1 }];
		expect(uniqBy(test, ['x'])).toEqual([{ x: 1 }, { x: 2 }]);
	});

	it('return distinct array using multiple property', () => {
		const test = [{ x: 1, y: 1 }, { x: 2, y: 1 }, { x: 1, y: 2 }, { x: 1, y: 1 }];
		expect(uniqBy(test, ['x', 'y'])).toEqual([{ x: 1, y: 1 }, { x: 2, y: 1 }, { x: 1, y: 2 }]);
	});
});
