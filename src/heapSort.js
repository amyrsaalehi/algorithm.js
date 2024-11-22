export function heapSort(arr) {
  const array = [...arr];
  buildMaxHeap(array);
  for (let i = array.length - 1; i > 0; i--) {
    [array[0], array[i]] = [array[i], array[0]];
    maxHeapify(array, 0, i);
  }
  return array;
}

function buildMaxHeap(array) {
  const n = array.length;
  const startIdx = Math.floor(n / 2 - 1);
  for (let i = startIdx; i >= 0; i--) {
    maxHeapify(array, i, n);
  }
}

function maxHeapify(array, i, n) {
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  let largest = i;
  if (left < n && array[left] > array[largest]) largest = left;
  if (right < n && array[right] > array[largest]) largest = right;
  if (largest !== i) {
    [array[i], array[largest]] = [array[largest], array[i]];
    maxHeapify(array, largest, n);
  }
}
