'use strict';
/****************************************variables************************************************ */
const cardsTable=[
    {name: 'cat', src:'images/cat.jpg'},
    {name: 'dog', src:'images/dog.jpg'},
    {name: 'horse', src:'images/horse.jpg'},
    {name: 'dolphin', src:'images/dolphin.jpg'}
]

//create an array where we stock the id of the selected image
let selectedCards=[];

// init the score
let score=0;

/*******************************************functions*********************************************** */

function fetchResult(elt, result){
    elt.textContent=result;
}

function changeAllSrc(elt, newSrc){
   elt.forEach((val)=>val.src=newSrc);
}

function removeClass(elt, className){
    elt.forEach((val)=> val.classList.remove(className)); 
}

function addClass(elt,className){
    elt.forEach((val)=>val.classList.add(className));
}



/*******************************************events************************************************** */
document.addEventListener('DOMContentLoaded', function(){
   
    for(let i=0; i<12; i++){
        // create grid
        let card= new Card('images/game.jpg', 'game');               
        card.createImage(document.getElementById('root'), cardsTable);

        //create an event for each card
        document.querySelectorAll('img')[i].addEventListener('click', function(){
            
            //Check the number of the selected cards; it must not exceed two.

            if(selectedCards.length<=2){
                // change the card 
                card.imageEvent(this,cardsTable);
                selectedCards.push(this.id);

                if(selectedCards.length===2){
                    if(selectedCards.every((val)=> val=== selectedCards[0])){
                        score++;
                        fetchResult(document.getElementById('result') , score ); 
                        fetchResult(document.getElementById('comment'), 'kudos, continue!') 
                        setTimeout(function(){
                            changeAllSrc(document.querySelectorAll('.selected'),'images/white.jpg');
                            addClass(document.querySelectorAll('.selected'),'disabled');
                            removeClass(document.querySelectorAll('img'),'selected');
                            selectedCards=[];
                        },1000);

                        if(document.querySelectorAll('.disabled').length===12){
                            fetchResult(document.getElementById('comment'), 'congratulations, you win!');
                            setTimeout(function(){
                                changeAllSrc(document.querySelectorAll('img'),'images/game.jpg');
                                removeClass(document.querySelectorAll('img'),'disabled');
                                score=0;
                                fetchResult(document.getElementById('result'),score);
                                fetchResult(document.getElementById('comment'), '');
                           },1000);

                        }   
                    }else{
                        fetchResult(document.getElementById('result'), score);
                        fetchResult(document.getElementById('comment'), 'hard luck')
                        setTimeout(function(){
                            changeAllSrc(document.querySelectorAll('.selected'),'images/game.jpg');
                            removeClass(document.querySelectorAll('img'),'selected');
                            fetchResult(document.getElementById('result'),score);
                            fetchResult(document.getElementById('comment'), '');
                            selectedCards=[];
                        },1000)
                }
            }
        }     
        });     
    }  
    
   
    
})







