export function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const [pivot, ...rest] = arr;
  const left = [], right = [];
  rest.forEach(el => (el < pivot ? left : right).push(el));
  return [...quickSort(left), pivot, ...quickSort(right)];
}
