const lP = document.getElementById('leftpaddle');
const rP = document.getElementById('rightpaddle');
const puck =document.getElementById('ball');
const board = document.getElementById('board');
const leftScore=document.getElementById('leftscore');
const rightScore=document.getElementById('rightscore');
let rightTop = 100;
let leftTop =200;
let ballTop = 50;
let ballLeft =350;
let ballSpeedX=2;
let ballSpeedY =2;
let lScore = 0;
let rScore =0;

//objects
function leftPaddle(y){ 
    //console.log(leftTop);
    lP.style.top = leftTop + y +'px';
    console.log(leftTop+y+'px');
    leftTop += y;
}
function rightPaddle(y){
    //console.log(rightTop);
    rP.style.top =rightTop + y + 'px';
    console.log(rightTop+y+'px');
    rightTop += y;
}
function ball(){
    ballTop += ballSpeedY;
    ballLeft += ballSpeedX;
    puck.style.top = ballTop +'px';
    puck.style.left = ballLeft + 'px';

if(ballTop<=-201 || ballTop>= 286){
    ballSpeedY = -ballSpeedY;
}
//ball bouncing off paddles
if (
    ballLeft <=35 && 
    Math.abs(leftTop-(ballTop+200))<=100
    ){
        ballSpeedX = -ballSpeedX
    }

if (
    ballLeft + 20 >= 680 && 
    ballTop + 100 >= rightTop && 
    ballTop <= rightTop  
    ) {
    ballSpeedX = -ballSpeedX;
    }

/*if(
    ballLeft<=35 &&
    ballTop +100 >= leftTop 
    ){
    ballSpeedX = -ballSpeedX;
}*/
console.log(ballLeft)
console.log(leftTop)

//Score for the game
if(ballLeft<=0){
    rScore++;
    rightScore.textContent=rScore;
    ballTop = 50;
    ballLeft = 350;
}
if(ballLeft>=690){
    lScore++;
    leftScore.textContent=lScore;
    ballTop = 50;
    ballLeft = 350;
}

//gameover
if(lScore===7){
    console.log('Left Player Wins')
    alert('Game Over, Left Player Wins')
    
}
if(rScore===7){
    console.log('Right Player Wins')
    alert('Game Over, Right Player Wins')
    
}
}

//key movements
document.addEventListener('keydown', move, false);
document.addEventListener('keydown', moveR, false);
document.addEventListener('keyup', keyUp, false);
var key=[];

function move(e){
    const maxY = 400;
    const minY = 0;
    let y = 0;

    key[e.keyCode]=true;

    if(key[83]){
        y+=20;
    }
    if(key[87]){
        y-=20;
    }
    const newTop =leftTop+y; //adding stopping points for paddles

    if(newTop>maxY){
        y=maxY-leftTop;
    }
    if(newTop<minY){
        y=minY-leftTop;
    }

    e.preventDefault();
    leftPaddle(y);
    //console.log(y)
}
function moveR(e){
    const maxY = 297;
    const minY = -102;
    let y = 0;

    key[e.keyCode]=true;

    if(key[40]){
        y+=20;
    }
    if(key[38]){
        y-=20;
    }
    const newTop =rightTop+y; //adding stopping points for paddles

    if(newTop>maxY){
        y=maxY-rightTop;
    }
    if(newTop<minY){
        y=minY-rightTop;
    }

    e.preventDefault();
    rightPaddle(y);
    //console.log(y)
}
function keyUp(e){
    key[e.keyCode]=false;
}

//restart button
document.getElementById('reset').addEventListener('mouseover',mouseOver);
function mouseOver(){
    document.getElementById('reset').style.cursor='pointer';  
}

setTimeout(function(){
    setInterval(ball, 10);
},3000)