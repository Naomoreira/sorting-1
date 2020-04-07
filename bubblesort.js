let callBack = (array, i) => {
  for (let j = 0; j < array.length - i ; j++){
    if (array[j + 1] < array[j]) {
      let curr = array[j]
      array[j] = array[j + 1]
      array[j + 1] = curr
    }
  }
  return array
}
function bubbleSort (array) {
  for (let i = 0; i < array.length - 1; i++) {
    callBack(array, i)
  //   for (let j = 0; j < array.length - i; j++){
  //     if (array[j + 1] < array[j]) {
  //       let curr = array[j]
  //       array[j] = array[j + 1]
  //       array[j + 1] = curr
  //     }
  //   }
  // }
  // return array
}
  return array
}

