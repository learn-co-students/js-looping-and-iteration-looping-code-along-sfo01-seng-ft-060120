// Code your solutions in this file

arrayOfNames = [ 'Lisa', 'Kaitlin', 'Jan' ];

function writeCards(arrayOfNames, eventName) {
    let array1 = [];
    for (let i = 0; i < arrayOfNames.length; i++) {
        array1.push(`Thank you, ${arrayOfNames[i]}, for the wonderful ${eventName} gift!`);
    }
    return array1;
}

writeCards(arrayOfNames, eventName);


function countDown(posInt) {
    while (posInt > -1) {
        console.log(posInt);
        posInt--;
    }
}