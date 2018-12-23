  describe('forLoop(array)', () => {
    it('adds `"I am ${i} strange loop${i === 0 ? \'\' : \'s\'}."` to an array 25 times', () => {
      const [array, t] = makeArray()
      const strangeArray = forLoop(array)
      const testArray = strangeArray.slice(array.length)

      let first = "I am 1 strange loop."
      let rest = "I am 24 strange loops."
        
      expect(strangeArray[11]).to.equal(first)
      expect(strangeArray[34]).to.equal(rest)
      expect(strangeArray.length).to.equal(t + 25)
    })
  })
 
 
  function forLoop(array){
  for (let i = 0; i < 25; i++){
  array.slice(`"I am ${i} strange loop${i === 0 ? '' : 's'}."`)
  }
}
  
 function whileLoop(n){
  let countdown = n
  while (countdown > 0){
    console.log(--countdown)
  }
  return 'done';
}


function doWhileLoop(array) {
  let i = 0;
  function incrementVariable() {
    i = i + 1;
  }
  do {
    array.pop();
  } while (array.length > 0 && incrementVariable());
  return array;
}
