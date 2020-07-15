function writeCards(names, event) {

    let result = [];

    for(let i = 0; i < names.length; i++) {
        result.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }

    return result;
}

function countDown(integer) {
    let counter = 0;
    while (counter <= 10) {
        console.log(counter);

        counter++;
    }
}