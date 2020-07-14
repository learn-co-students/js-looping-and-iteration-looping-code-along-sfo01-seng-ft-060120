// Code your solutions in this file
const nameArray = ["Lisa", "Kaitlin", "Jan"]
const msgArr = []
function writeCards(names, event) {
    for(let i = 0; i < names.length; i += 1){
        msgArr.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return msgArr
}

function countDown(i){
    while(i > 0){
        console.log(i)
        i -= 1
    }
    console.log(i)
}