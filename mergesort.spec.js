describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
   expect(split([])).toEqual([[], []])
  });
});

describe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect(merge([1, 2, 3], [ 4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6])
  });
});

describe('Merge Sort function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect(mergeSort([5, 3, 7, 10, 4, 1, 5])).toEqual([ 1, 3, 4, 5, 5, 7, 10 ])
  });
});
