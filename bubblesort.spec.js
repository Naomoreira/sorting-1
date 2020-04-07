// <<<<<<< HEAD
// // import testem

// describe('Bubble Sort', function(){
//   beforeAll(function () {
//     spyOn(tootsiepop, 'lick').and.callThrough(); // replace existing `tootsiepop['lick']` method
//   });
//   it('getting to the center of tootsiepop involves exactly three licks', function () {
//     tootsiepop.getToCenter();
//     expect(tootsiepop.lick.calls.count()).toEqual(3);
//   });
  
//   it('handles an empty array', function(){
//     expect( bubbleSort([]) ).toEqual( [] );

describe('spyOnBlock', function () {
  beforeAll(function () {
    spyOn(window, 'bubbleSort').and.callThrough();
  });
  it('Number of swaps is equal to length of array', function () {
    window.bubbleSort();
    expect(window.bubbleSort.callBack.calls.count()).toEqual();
  });
});

describe('Bubble Sort', function () {
  it('handles an empty array', function () {
    expect(bubbleSort([])).toEqual([]);
  });
  it('handles an array with one value', function () {
    expect(bubbleSort([1])).toEqual([1]);
  });
  it('handles an array with multiple values', function () {
    expect(bubbleSort([5, 2, 7, 3])).toEqual([2, 3, 5, 7]);

  });
});
