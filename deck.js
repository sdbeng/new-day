class Card{
    constructor(suit, rank, value){
        this.suit = suit;
        this.rank = rank;
        this.value = value;
    }
}

class Deck{
    constructor(){
        this.cards = [];
    }
    createDeck(){
        const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds']
        const ranks = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King']
        const values = [1,2,3,4,5,6,7,8,9,10,11,12,13]
        for(let i = 0; i <suits.length; i++){
            for(let j = 0; j < ranks.length; j++){
                this.cards.push(new Card(suits[i], ranks[j], values[j]))
            }
        }
    }
    shuffle(){
        let loc1, loc2, temp;
        for(let i = 0; i <1000;i++){
            loc1=Math.floor(Math.random()*this.cards.length)
            loc2=Math.floor(Math.random()*this.cards.length)
            temp = this.cards[loc1];
            this.cards[loc1] = this.cards[loc2];
            this.cards[loc2] = temp;
        }
    }
}

const deck2 = new Deck()
console.log(deck2.createDeck())