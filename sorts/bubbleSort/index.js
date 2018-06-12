import { shouldSwap } from '../utility/index';

function bubbleSort(arr, isAsc) {
  const clonedArray = arr.slice(0);
  let intermediate;

  for (let i = 0; i < clonedArray.length - 1; i++) {
    for (let j = i + 1; j < clonedArray.length; j++) {
      if (shouldSwap(clonedArray[i], clonedArray[j], isAsc)) {
        intermediate = clonedArray[i];
        clonedArray[i] = clonedArray[j];
        clonedArray[j] = intermediate;
      }
    }
  }

  return clonedArray;
}

export { bubbleSort };
