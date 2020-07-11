// Code your solutions in this file
const gift = [ 'Lisa', 'Kaitlin', 'Jan' ]

function writeCards(gift){
    var arr = []
    for(var x = 0; x < gift.length; x++){
        arr.push(`Thank you, ${gift[x]}, for the wonderful surprise gift!`)
    }
    return arr
}

writeCards(gift)

function countDown(){
    for(var x = 10; x >= 0; x--){
        console.log(x)
    }
    
}

countDown()