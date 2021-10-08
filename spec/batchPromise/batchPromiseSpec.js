import { runInBatch } from '../../batchPromise/index';

describe('promise utils', () => {
	it('runs async functions in batches and returns all results', async () => {
		const asyncFn = value => Promise.resolve(value);
		const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
		const res = await runInBatch(asyncFn, values, 3);

		expect(res).toEqual(values);

		const res2 = await runInBatch(asyncFn, values, 10);

		expect(res2).toEqual(values);
	});
});

