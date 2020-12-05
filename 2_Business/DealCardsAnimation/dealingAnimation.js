
const DEAL_ILLUSION_ID_DEALER = 'DealerIllusion';
const DEAL_ILLUSION_ID_PLAYER = 'PlayerIllusion';

class cardAnimations {
    // constructor(){
     
    // }

    
     /**
     * - const
     * - Returns value in (units = pixels) to modify styles (.left and .top) 
     * - Used to (plus or minus (.left or .top)) or, simply put, to (move) elements during the automation
     */
    pixelModifierVal(){
        return 2;
    }

     /**
     * - const
     * - The interval (in milliseconds) used with the animation’s setInterval method
     */    
    timerInterval(){
        return 5;
    }    

    appendIllusionImg(imgIllusion, imgStart, ILLUSION_ELEMENT_ID) {
        imgIllusion.style.position = 'absolute';
        imgIllusion.style.top = imgStart.getBoundingClientRect().top + 'px';  // get imgStart's absolute .top (relative to browser)
        imgIllusion.style.left = imgStart.getBoundingClientRect().left + 'px';// get imgStart's absolute .left (not imgStart container's top)
        imgIllusion.style.height = imgStart.offsetHeight + 'px';
    
        imgIllusion.setAttribute("src", '1_UI\\\PNG\\gray_back.png'); // gray_back.png    red_back.png    green_back.png
        imgIllusion.setAttribute("alt", "Dealing animation");
        imgIllusion.setAttribute("id", ILLUSION_ELEMENT_ID);
    
        document.getElementsByTagName("body")[0].appendChild(imgIllusion);
    }

    dealToDealer() {
            
    var imgIllusion = document.createElement("IMG");
    var imgStart = document.getElementById(cardIds.CardMidLeft);

    this.appendIllusionImg(imgIllusion, imgStart, DEAL_ILLUSION_ID_DEALER);
    

    // return;
// *********************************************************
    const COORD_DEST_TOP = document.getElementById(cardIds.CardTopLeft).getBoundingClientRect().top;
    const COORD_DEST_LEFT = document.getElementById(cardIds.CardTopLeft).getBoundingClientRect().left;
    const COORD_START_TOP = imgStart.getBoundingClientRect().top;

    var coordModifierTop = imgStart.getBoundingClientRect().top;
    var coordModifierLeft = imgStart.getBoundingClientRect().left;

    const POS_MODIFIER = this.pixelModifierVal();

    var id = setInterval(moveCard, this.timerInterval());
        function moveCard() {
            if (coordModifierTop <= COORD_DEST_TOP) {  // <=
            // imgIllusion.style.top = COORD_DEST_TOP  +'px'; // imgIllusion.style.left = COORD_DEST_LEFT +'px';
            document.getElementById(DEAL_ILLUSION_ID_DEALER).remove();
            document.getElementById(cardIds.CardTopLeft).style.visibility = "visible";
            // this.animationComplete++;
            clearInterval(id); 
            } else {

                coordModifierTop -= POS_MODIFIER; // move (up)
                if (coordModifierTop < (COORD_START_TOP - COORD_DEST_TOP) *.5) { // If we're (half way 'up')

                    var pxsAwayFromTopDest = coordModifierTop - COORD_DEST_TOP;    // coordModifierTop  is being decremented (when flow comes here)
                    var pxsAwayFromLeftDest = COORD_DEST_LEFT - coordModifierLeft; // coordModifierLeft is being incremented (when flow comes here)
                    
                    if (pxsAwayFromLeftDest > pxsAwayFromTopDest){
                        coordModifierLeft += (parseInt(pxsAwayFromLeftDest / pxsAwayFromTopDest) * 3);
                    }else{
                        coordModifierLeft += POS_MODIFIER;
                    }

                }else{
                    coordModifierLeft -= POS_MODIFIER;  // If we're not (half way 'up') yet - keep moving left
                }
                imgIllusion.style.top = coordModifierTop + 'px'; 
                imgIllusion.style.left = coordModifierLeft + 'px'; 
            }
        }
    }
    
    dealToPlayer(){
    // const ILLUSION_ELEMENT_ID = 'PlayerIllusion';

    var imgIllusion = document.createElement("IMG");
    var imgStart = document.getElementById(cardIds.CardMidLeft);
    
    this.appendIllusionImg(imgIllusion, imgStart, DEAL_ILLUSION_ID_PLAYER);
    

    // return;
// *********************************************************
    const COORD_DEST_TOP = document.getElementById(cardIds.CardBottomLeft).getBoundingClientRect().top;
    const COORD_DEST_LEFT = document.getElementById(cardIds.CardBottomLeft).getBoundingClientRect().left;
    const COORD_START_TOP = imgStart.getBoundingClientRect().top;
    
    var coordModifierTop = imgStart.getBoundingClientRect().top;
    var coordModifierLeft = imgStart.getBoundingClientRect().left;

    const POS_MODIFIER = this.pixelModifierVal();

    var id = setInterval(moveCard, this.timerInterval());
        function moveCard() {
            if (coordModifierTop >= COORD_DEST_TOP) {  // <=
            document.getElementById(DEAL_ILLUSION_ID_PLAYER).remove();
            document.getElementById(cardIds.CardBottomLeft).style.visibility = "visible";
            // this.animationComplete++;
            clearInterval(id); 
            } else {

                coordModifierTop += POS_MODIFIER; // move (down)
                coordModifierLeft += POS_MODIFIER;
                if (coordModifierTop > (COORD_DEST_TOP + COORD_START_TOP) * .5) { // If we're (half way 'down')

                        var pxsAwayFromTopDest = COORD_DEST_TOP - coordModifierTop;    // coordModifierTop  is being *** (when flow comes here)
                        var pxsAwayFromLeftDest = coordModifierLeft -COORD_DEST_LEFT; // coordModifierLeft is being *** (when flow comes here)
                    
                        if (pxsAwayFromLeftDest > pxsAwayFromTopDest){
                            coordModifierLeft -= (parseInt(pxsAwayFromLeftDest / pxsAwayFromTopDest) * 3);
                        }else{
                            coordModifierLeft -= POS_MODIFIER;
                    }
                        
                }else{
                    coordModifierLeft += POS_MODIFIER;  // If we're not (half way 'up') yet - keep moving left
                }
                imgIllusion.style.top = coordModifierTop + 'px'; 
                imgIllusion.style.left = coordModifierLeft + 'px'; 
            }
        }
    }
}



