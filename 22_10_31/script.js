const cards = document.querySelectorAll('.memory-card');
let trial = 0;
let success = 0;
let pTrial = document.getElementById("trial");
let pSuccess = document.getElementById("success");

let flippedCard = false;
let firstCard, secondCard;

function flipCard() {
    this.classList.add('flip');
    if(flippedCard === false){
        flippedCard = true;
        firstCard = this;
        return;
    }
    if(this !== firstCard){
        secondCard = this;
        flippedCard = false;
        ifMatch();
    }
    
    
}
  
function ifMatch(){
    if(firstCard.dataset.college === secondCard.dataset.college){
        trial++;
        success++;
        pTrial.innerText = "시도횟수 : " + trial;
        pSuccess.innerText = "성공횟수 : " + success; 
        disableCards();
        return;
    }
    else{
        trial++;
        pTrial.innerText = "시도횟수 : " + trial;
        unflipCards();
    }
}

function disableCards(){
    firstCard.removeEventListener('click',flipCard);
    secondCard.removeEventListener('click',flipCard);
}

function unflipCards(){
    setTimeout(()=>{
        firstCard.classList.remove('flip')
        secondCard.classList.remove('flip');
        firstCard = null;
        secondCard = null;
        flippedCard = false;
    },1500)
    
}
cards.forEach(card => card.addEventListener('click', flipCard));

(function shuffle() {
    cards.forEach(card => {
    let ramdomPos = Math.floor(Math.random() * 12);
    card.style.order = ramdomPos;
    });
})();
    
