function split(wholeArray) {
  let firstHalf = [];
  let secondHalf = [];
  let index = 0;

  if (wholeArray.length < 2) {
    index = Math.floor(wholeArray.length / 2);
    firstHalf = (wholeArray.splice(0, index));
    secondHalf = (wholeArray.splice(index, wholeArray.length));
  }

  return [firstHalf, secondHalf];
}

