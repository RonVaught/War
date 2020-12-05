

var cardsOOB = [];
var shuffledCards = [];
cardsOOB = cardsOutOfBox();
shuffledCards = shuffleCards(cardsOOB);
var gameAnime = new gameAnimations(shuffledCards);



function formatPageForLoad() {

    document.getElementsByTagName('img')[0].id = cardIds.CardTopLeft;
    document.getElementsByTagName('img')[1].id = cardIds.CardTopRight;

    document.getElementsByTagName('img')[2].id = cardIds.CardMidLeft;
    document.getElementsByTagName('img')[3].id = cardIds.CardMidRight;

    document.getElementsByTagName('img')[4].id = cardIds.CardBottomLeft;
    document.getElementsByTagName('img')[5].id = cardIds.CardBottomRight;


    document.getElementById(cardIds.CardTopLeft).style.visibility = 'hidden'; // top left
    document.getElementById(cardIds.CardTopRight).style.visibility = 'hidden'; // top right

    document.getElementById(cardIds.CardMidRight).style.visibility = 'hidden'; // mid right

    document.getElementById(cardIds.CardBottomLeft).style.visibility = 'hidden'; // bottom left
    document.getElementById(cardIds.CardBottomRight).style.visibility = 'hidden'; // bottom right

} 

function dealCards(){

    document.getElementById("dealBtn").style.visibility = "hidden";

    var tmrIntervals = 0;
    var idTmr = setInterval(moveCardTmr, 200);
    var dealAnime = new cardAnimations();
    function moveCardTmr() {  
        tmrIntervals += 1;
        // console.log(tmrIntervals);
        if (tmrIntervals >= 20) {
            clearInterval(idTmr);
            document.getElementById(cardIds.CardMidLeft).style.visibility = "hidden";
        }else{
            dealAnime.dealToDealer();
            dealAnime.dealToPlayer();
        }
    }
    var dealingTmrId = setInterval(monitorDealAnimation, 500);
    function monitorDealAnimation() {
    
        if ((document.getElementById(DEAL_ILLUSION_ID_DEALER) == null) && 
            (document.getElementById(DEAL_ILLUSION_ID_PLAYER) == null)) {
            clearInterval(dealingTmrId);
            setTimeout(flipDealerCard, 500);
        }
        // console.log('Animation started - (running)');
    }    
}

function flipDealerCard() {
    gameAnime.flipNextDealerCard();
}

// window.addEventListener("resize", formatPageForResize);
window.addEventListener('load', formatPageForLoad);



