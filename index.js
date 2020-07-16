// Code your solutions in this file
function writeCards(name, event_name) {

    let result = [];

    for(let i = 0; i < name.length; i++) {
        result.push(`Thank you, ${name[i]}, for the wonderful ${event_name} gift!`)
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
