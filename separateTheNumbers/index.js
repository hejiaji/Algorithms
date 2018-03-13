function matchRules(numbers, pIndex, nindex) {
  const arrayLength = numbers.length;
  if (nindex === arrayLength) {
    return true;
  }
  const previousValue = parseInt(numbers.slice(pIndex, nindex));
  let expectedNextValue = previousValue + 1;
  let nextIndex = nindex + expectedNextValue.toString().length;
  let slicedNextValue = parseInt(numbers.slice(nindex, nextIndex));
  if (slicedNextValue === expectedNextValue) {
    return matchRules(numbers, nindex, nextIndex);
  }
  return false;
}

function separateNumbers(numbers) {
  if (numbers.length <= 1) {
    return { result: false };
  }
  const maxQueryIndex = Math.round(numbers.length / 2);
  for (let i = 1; i <= maxQueryIndex; i++) {
    if (matchRules(numbers, 0, i)) {
      return {
        result: true,
        firstElement: numbers.slice(0, i)
      };
    }
  }
  return {
    result: false,
  };
}

export { separateNumbers };