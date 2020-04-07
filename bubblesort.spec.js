describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('handles an array with one value', function(){
    expect( bubbleSort([1]) ).toEqual( [1] );
  });
  it('handles an array with multiple values', function(){
    expect( bubbleSort([5, 2, 7, 3]) ).toEqual( [2, 3, 5, 7] );
  });
});
