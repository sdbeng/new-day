class Card{
    constructor(){
        this.deck=[]
        const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds']
        const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King']

        //loop through arrays
        for(let suit in suits){
            for(let value in values){
                this.deck.push(`${values[value]} of ${suits[suit]}`)
            }
        }
    }
    //shuffle method
    shuffle(){
        const {deck} = this
        let c = deck.length, i
        //loop over while c is valid and decrement i
        while(c){
            i = Math.floor(Math.random() * c--)
            //swap array indices
            [deck[c], deck[i]] = [deck[i], deck[c]]
        }
        return this
    }
}

const card1 = new Card()
console.log(card1)
card1.shuffle()