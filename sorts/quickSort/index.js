function shouldGoLeft(value, pivot, isAsc) {
  return isAsc ? value < pivot : value > pivot;
}

function quickSort(arr, isAsc) {
  if (arr.length <= 1) { return arr; }
  const clonedArray = arr.slice(0);
  const pivotIndex = Math.floor(clonedArray.length / 2);
  const pivot = clonedArray.splice(pivotIndex, 1)[0];
  const left = [];
  const right = [];
  for (let i = 0; i < clonedArray.length; i++){
    if (shouldGoLeft(clonedArray[i], pivot, isAsc)) {
      left.push(clonedArray[i]);
    } else {
      right.push(clonedArray[i]);
    }
  }
  return quickSort(left, isAsc).concat([pivot], quickSort(right, isAsc));
}

export { quickSort };
