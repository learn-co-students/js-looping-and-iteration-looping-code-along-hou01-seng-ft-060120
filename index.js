// Code your solutions in this file
function writeCards(array, event) {
    let emptyArray = [];
    for (let i = 0; i < array.length; i++) {
        emptyArray.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
    }
    return emptyArray;
}

function countDown(myNum) {
    let countup = myNum;
    while (countup >= 0) {
        console.log(countup);
        countup--;
    }
}