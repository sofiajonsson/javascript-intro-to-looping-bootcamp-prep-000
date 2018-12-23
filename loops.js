
  function forLoop(array){
  for (let i = 0; i < 25; i++){
  console.log(`"I am ${i} strange loop${i === 0 ? '' : 's'}."`)
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
