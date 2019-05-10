var turn = false;
var finished = false;

function checkThreeSymbols(symbol, a, b, c){
    if(jQuery('#board li:nth-child('+a+')').hasClass(symbol)
    && jQuery('#board li:nth-child('+b+')').hasClass(symbol)
    && jQuery('#board li:nth-child('+c+')').hasClass(symbol)) {
        return true;
    }
    else {
        return false;
    }
}

function markBoard(){

    if(!finished) {

        if(!jQuery(this).hasClass('mark')){
            jQuery(this).addClass('mark');
    
            if(turn === false){
                turn = true;
                jQuery(this).addClass('cross');
            } else {
                turn = false;
                jQuery(this).addClass('circle');
            }
        }
        
        if(
            checkThreeSymbols('circle',1,2,3) || 
            checkThreeSymbols('circle',4,5,6) ||
            checkThreeSymbols('circle',7,8,9) ||
            checkThreeSymbols('circle',1,4,7) ||
            checkThreeSymbols('circle',2,5,8) ||
            checkThreeSymbols('circle',3,6,9) ||
            checkThreeSymbols('circle',1,5,9) ||
            checkThreeSymbols('circle',3,5,7)
        )
        {
            finished = true;
            jQuery('#board').addClass('circle-wins');
            jQuery('#button').addClass('active')
        }

        if(
            checkThreeSymbols('cross',1,2,3) || 
            checkThreeSymbols('cross',4,5,6) ||
            checkThreeSymbols('cross',7,8,9) ||
            checkThreeSymbols('cross',1,4,7) ||
            checkThreeSymbols('cross',2,5,8) ||
            checkThreeSymbols('cross',3,6,9) ||
            checkThreeSymbols('cross',1,5,9) ||
            checkThreeSymbols('cross',3,5,7)
        )
        {
            finished = true;
            jQuery('#board').addClass('cross-wins');
            jQuery('#button').addClass('active')
        }
    }

}

function reset(){
    jQuery('#board li').removeClass('mark cross circle');
    jQuery('#board').removeClass('circle-wins cross-wins');
    jQuery('#button').removeClass('active');
    finished = false;
}

jQuery('#button').click(reset);
jQuery('#board li').click(markBoard);
