class Deck{
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
        //another method to shuffle
        let loc1, loc2, temp;
        for(let i=0; i<1000; i++){
            loc1=Math.floor(Math.random()*this.deck.length)
            loc2=Math.floor(Math.random()*this.deck.length)
            //swap indices
            temp = this.deck[loc1];
            this.deck[loc1] = this.deck[loc2];
            this.deck[2]=temp;
        }

        // //destructure this.deck
        // const {deck} = this
        // let c = deck.length, i
        // //loop over while c is valid and decrement i
        // while(c){
        //     i = Math.floor(Math.random() * c--)
        //     //swap array indices
        //     //i get TypeError: Cannot create property 'undefined', it probably this es7 syntax is not yet valid in node.js
        //     [deck[c], deck[i]] = [deck[i], deck[c]]
        // }
        // return this
    }
}

const card1 = new Deck()
console.log(card1)
card1.shuffle()
console.log(card1)