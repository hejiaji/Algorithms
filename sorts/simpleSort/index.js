function simpleSort(arr, isAsc) {
  let intermediate;
  let clonedArray = arr.slice(0);
  const shouldSwap = (pre, next) =>
    isAsc ? pre > next : pre <= next;

  for (let i = 0; i < clonedArray.length - 1; i++) {
    for (let j = i + 1; j < clonedArray.length; j++) {
      if (shouldSwap(clonedArray[i], clonedArray[j])) {
        intermediate = clonedArray[i];
        clonedArray[i] = clonedArray[j];
        clonedArray[j] = intermediate;
      }
    }
  }
  return clonedArray;
}

export { simpleSort };
