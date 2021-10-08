export function runInBatch(operation, ids, threshold = 3) {
	let ops;
	const result = [];
	let leftOver = ids.slice(0);
	while (leftOver.length > 0) {
		const currentBatch = leftOver.slice(0, threshold).map(operation);
		if (!ops) {
			ops = Promise.all(currentBatch);
		} else {
			ops = ops.then((x) => {
				result.push(...x);
				return Promise.all(currentBatch);
			});
		}

		leftOver = leftOver.slice(threshold);
	}
	return ops.then(res => [...result, ...res]);
}

export default null;
