// Code your solutions in this file

function writeCards(arrayName, eventName) {

    let sentenceArray = []
  
    for(let i = 0; i < arrayName.length; i++) {
      sentenceArray.push(`Thank you, ${arrayName[i]}, for the wonderful ${eventName} gift!`);
    }
  
  return sentenceArray
    
  } 
  
  writeCards(arrayName, eventName)
  
  
  function countDown(positiveInt){
    while (positiveInt > -1) {
      console.log(positiveInt--);
    }
    
  
  }