export function bubbleSort(arr) {
  const array = [...arr];
  let n = array.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 1; i < n; i++) {
      if (array[i - 1] > array[i]) {
        [array[i], array[i - 1]] = [array[i - 1], array[i]];
        swapped = true;
      }
    }
    n--;
  } while (swapped);
  return array;
}
