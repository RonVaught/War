


class gameAnimations{
    constructor(shuffledDeck){
        this.gameDeck = shuffledDeck;
    }

     /**
     * - const
     * - The interval (in milliseconds) used with the animation’s setInterval method
     */    
    timerInterval(){
        return 1;
    }  

    flipNextDealerCard(){
        // var targetCard  = new Card(0, '', '');
        

        var targetCard = this.gameDeck.find(cardIdx => cardIdx.cardOwner === OWNER_DEALER && cardIdx.availForPlay === true);
        targetCard.availForPlay = false; // this also changes this.gameDeck[x].availForPlay to = false
        
        var cardFaceDwn = document.createElement("IMG");
        var cardFlipping = document.createElement("IMG");
        
        var moveDimensions = new moveCoordinates(cardIds.CardTopLeft, cardIds.CardMidLeft)

        this.appendIllusionImgs(cardFaceDwn, cardFlipping, targetCard, moveDimensions.startRct, '');

        
        var topModifier = moveDimensions.startRct.top;
        var leftModifier = moveDimensions.startRct.left;

        var id = setInterval(moveDealerCard, this.timerInterval());
        function moveDealerCard() {

            if (topModifier > moveDimensions.flipVisible){

                cardFaceDwn.style.visibility = 'hidden';
                cardFlipping.style.visibility = 'visible';
            }
            
            topModifier += 1;
            if ((topModifier - moveDimensions.startRct.top) % (moveDimensions.leftMod) < 1){
                leftModifier -= 1;
                cardFaceDwn.style.left = leftModifier + 'px';
                cardFlipping.style.left = leftModifier + 'px';
                
            }
            cardFaceDwn.style.top = topModifier + 'px';
            cardFlipping.style.top = topModifier + 'px';

            if (topModifier >= moveDimensions.stopPoint){
                clearInterval(id);
            }

        }
    }
    appendIllusionImgs(faceDwnCard, flipCard, cardObj, startCoords, ILLUSION_ELEMENT_ID) {

        var startCoords = document.getElementById(cardIds.CardTopLeft).getBoundingClientRect();

        faceDwnCard.style.position = 'absolute';
        faceDwnCard.style.top = startCoords.top + 'px';
        faceDwnCard.style.left = startCoords.left + 'px';
        faceDwnCard.style.height = startCoords.height + 'px';

        flipCard.style.position = faceDwnCard.style.position;
        flipCard.style.top = startCoords.top + 'px';
        flipCard.style.left = startCoords.left +'px';
        flipCard.style.height = startCoords.height + 'px';

        faceDwnCard.setAttribute("src", '1_UI\\PNG\\gray_back.png');
        faceDwnCard.setAttribute("alt", "Dealing animation");
        faceDwnCard.setAttribute("id", ILLUSION_ELEMENT_ID);
    
        flipCard.setAttribute("src", cardObj.fileName);
        flipCard.setAttribute("alt", cardObj.suit);
        flipCard.setAttribute("id", ILLUSION_ELEMENT_ID);

        // faceDwnCard.style.left = (startCoords.left - 15) + 'px';

        flipCard.style.visibility = 'hidden';
        document.getElementsByTagName("body")[0].appendChild(faceDwnCard);
        document.getElementsByTagName("body")[0].appendChild(flipCard);
    }    

}

class moveCoordinates {
    constructor(startElmntId, stopElmntId){
        this.startRct = document.getElementById(startElmntId).getBoundingClientRect();
        this.stopRct = document.getElementById(stopElmntId).getBoundingClientRect();
        
        if (this.startRct.top < this.stopRct.top) {
            this.stopPoint = this.stopRct.top;
            this.flipVisible = (this.stopPoint * .75);
        }

        this.unitsDown = this.stopRct.top - this.startRct.top;
        this.unitsLeft = this.startRct.left - this.stopRct.left;
        this.leftMod = parseFloat((this.unitsDown / this.unitsLeft).toFixed(2));

    }
}