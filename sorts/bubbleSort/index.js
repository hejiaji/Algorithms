import { shouldSwap } from '../utility/index';

function bubbleSort(arr, isAsc) {
  const clonedArray = arr.slice(0);
  let intermediate;

  for (let i = 0; i < clonedArray.length - 1; i++) {
    let isSwapped = false;
    for (let j = 0; j < clonedArray.length - i - 1; j++) {
      if (shouldSwap(clonedArray[j], clonedArray[j + 1], isAsc)) {
        intermediate = clonedArray[j];
        clonedArray[j] = clonedArray[j + 1];
        clonedArray[j + 1] = intermediate;
        isSwapped = true;
      }
    }
    if (!isSwapped) {
      break;
    }
  }

  return clonedArray;
}

export { bubbleSort };
