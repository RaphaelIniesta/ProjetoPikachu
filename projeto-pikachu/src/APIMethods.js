import pokemon from 'pokemontcgsdk'

pokemon.configure({apikey: '98b33a77-3bd4-4673-a0e0-c2aa9e97f2be'})

async function getCard(card) {

    pokemon.card.find('base1-4')
    .then(card =>{
        console.log(card)
        return card
    })
}

let card = getCard('Charizard')