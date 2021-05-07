"use strict";
const SecretNumber = Math.trunc(Math.random()*20)+1;
let score=20;
document.querySelector('.check').addEventListener('click', function(){
    const guess=Number(document.querySelector('.guess').value);
    
	//no input
    if(!guess){
        document.querySelector('.message').textContent='⛔ No number!';
    } 
	//player wins
    else if(guess===SecretNumber){
        document.querySelector('.message').textContent='🎉 Correct Number!';
		document.querySelector('.number').textContent=SecretNumber;
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width='30rem';
    } 
	//guess is high
    else if(guess > SecretNumber){
        if(score>1){
            document.querySelector('.message').textContent='📈 Too High!';
            score--;
            document.querySelector('.score').textContent=score;
        }else{
            document.querySelector('.message').textContent='💥 You lost the game!';
            document.querySelector('.score').textContent=0;
        }
    } 
	//guess is low
    else if(guess < SecretNumber){
        if(score>1){
            document.querySelector('.message').textContent='📉 Too Low!';
            score--;
            document.querySelector('.score').textContent=score;
        }else{
            document.querySelector('.message').textContent='💥 You lost the game!';
            document.querySelector('.score').textContent=0;
        }
    }
})

document.querySelector('.again').addEventListener('click', function(){
    score=20;
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';
    document.querySelector('.message').textContent='Start guessing...';
    //document.querySelector('.highscore').textContent='';
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';
    SecretNumber = Math.trunc(Math.random()*20)+1;
    
})