let randNumber1=Math.floor(Math.random()*6+1);
let dice1Image=`images/dice${randNumber1}.png`;
document.querySelectorAll(`img`)[0].setAttribute(`src`,dice1Image);

let randNumber2=Math.floor(Math.random()*6)+1;
let dice2Image=`images/dice${randNumber2}.png`
document.querySelectorAll(`img`)[1].setAttribute(`src`,dice2Image);

if(randNumber1>randNumber2){
    document.querySelector(`.conclusion`).innerHTML=`🚩Player 1 wins`;
}

else if(randNumber2>randNumber1){
    document.querySelector(`.conclusion`).innerHTML=`🚩Player 2 wins`;
}

else{
    document.querySelector(`.conclusion`).innerHTML=`Draw`;
}