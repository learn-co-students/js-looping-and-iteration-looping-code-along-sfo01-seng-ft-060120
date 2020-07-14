

// const greeting = ([ 'Lisa', 'Kaitlin', 'Jan' ], 'surprise');

function writeCards(array, string){
  let surprise = []
  for(let i = 0; i < array.length; i++){
   surprise.push(`Thank you, ${array[i]}, for the wonderful ${string} gift!`);
  }
  return surprise;
}
writeCards();

function countDown(){
  let count = 10
  while (count >= 0){
    console.log(count --);
  }
  return count;
}

countDown();

