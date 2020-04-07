function split(wholeArray) {
  let index = 0;
  if (wholeArray.length < 2) {
    index = Math.floor(wholeArray.length / 2);
    const firstHalf = wholeArray.slice(0, index);
    const secondHalf = wholeArray.slice(index, wholeArray.length);
    return [firstHalf, secondHalf];
  } else {
    return wholeArray;
  }
}

function merge(array1, array2) {
  const result = [];

  while (array1.length && array2.length) {
    if (array1[0] <= array2[0]) {
      result.push(array1.shift());
    } else {
      result.push(array2.shift());
    }
  }

  while (array1.length) {
    result.push(array1.shift());
  }

  while (array2.length) {
    result.push(array2.shift());
  }

  return result;
  // return array1.concat(array2);
  /* your code here */
}

function mergeSort(array) {
  // split(array)
  //split(array) merge(mergeSort(first), mergeSort(second))

  if (array.length > 2) {
    const index = Math.floor(array.length / 2);
    const firstHalf = array.slice(0, index);
    const secondHalf = array.slice(index, array.length);
    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
  } else {
    return array;
  }
}
