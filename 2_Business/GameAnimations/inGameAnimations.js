


class gameAnimations{
    constructor(shuffledDeck){
        this.gameDeck = shuffledDeck;
    }

    flipNextDealerCard(){
        var targetCard  = new Card(0, '', '');
        targetCard = this.getNextDealerCard();

    }
    
    getNextDealerCard() {

        var cardIdx = this.gameDeck.findIndex(cardIdx => cardIdx.cardOwner === OWNER_DEALER && cardIdx.availForPlay === true);

        this.gameDeck[cardIdx].availForPlay = false;
        
        return this.gameDeck[cardIdx];

    }
}





