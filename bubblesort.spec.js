// import testem

describe('Bubble Sort', function(){
  beforeAll(function () {
    spyOn(tootsiepop, 'lick').and.callThrough(); // replace existing `tootsiepop['lick']` method
  });
  it('getting to the center of tootsiepop involves exactly three licks', function () {
    tootsiepop.getToCenter();
    expect(tootsiepop.lick.calls.count()).toEqual(3);
  });
  
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
});
