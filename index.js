function writeCards(names, event_name) {

    let cards = []

    for (let i = 0; i < names.length; i++) {
        cards.push(`Thank you, ${names[i]}, for the wonderful ${event_name} gift!`);
    }

    return cards

}

function countDown(number) {

    let i = number

    while (i >= 0) {
        console.log(i)
        i--
    }
}