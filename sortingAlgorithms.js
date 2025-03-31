function bubbleSort(array) {
  for (let i = array.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}
function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) min = j;
    }
    if (i !== min) {
      let temp = array[i];
      array[i] = array[min];
      array[min] = temp;
    }
  }
  return array;
}
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let temp = array[i];
    for (var j = i - 1; array[j] > temp && j > -1; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = temp;
  }
  return array;
}
function merg(array1, array2) {
  let combine = [];
  let i = 0;
  let j = 0;

  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
      combine.push(array1[i]);
      i++;
    } else {
      combine.push(array2[j]);
      j++;
    }
  }
  while (i < array1.length) {
    combine.push(array1[i]);
    i++;
  }
  while (j < array2.length) {
    combine.push(array2[j]);
    j++;
  }
  return combine;
}
function mergSort(array1) {
  if (array.length === 0) return array;
  let mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid);

  return merg(mergSort(left), mergSort(right));
}

function swap(array, firstindex, secondindex) {
  let temp = array[firstindex];
  array[firstindex] = array[secondindex];
  array[secondindex] = temp;
}
function pivot(array, pivotindex = 0, endindex = array.length - 1) {
  let swapindex = pivotindex;
  for (let i = pivotindex + 1; i <= endindex; i++) {
    if (array[i] < array[pivotindex]) {
      swapindex++;
      swap(array, swapindex, i);
    }
    swap(array, pivotindex, swapindex);
    return swapindex;
  }
}
function quickSort(array, left = 0, right = array.length - 1) {
  if (left >= right) return;

  let pivotIndex = pivot(array, left, right);
  quickSort(array, left, pivotindex - 1);
  quickSort(array, pivotIndex + 1, right);
  return array;
}
