
const tootsiepop = {};

tootsiepop.lick = function () {
  return "licked";
};
tootsiepop.getToCenter = function () {
  this.lick();
  this.lick();
  this.lick();
  return "got to center";
};

function swap(num, num2) {
//   let number = array[j];
//   array[j] = array[j + 1];
//   array[j + 1] = number;
let number = num;
  num = num2;
  num2 = number;
}

function bubbleSort(array) {
  const length = array.length;
  const count = 0;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (array[j] < array[j + 1]) {
        swap(array[j], array[j + 1]); 
        count++;
      }
    }
  }
  console.log(count);
  return array;
}

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


