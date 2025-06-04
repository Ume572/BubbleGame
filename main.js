var timer = 6;
var score = 0;
var hitrun = 0;


function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent=score;
}
function getNewhit(){
    hitrun = Math.floor(Math.random()*10);
   document.querySelector("#hitval").textContent=hitrun;
}


function makeBubble() {
    var clutter = " ";

    for (var i = 1; i <= 85; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;

            document.querySelector("#timerval").textContent = timer;
        } else {
            document.querySelector("#pbtm").innerHTML=`<h1>GAME OVER HO GYA DEAR`;
            clearInternal(timerint);
        }
    }, 1000);
}

document.querySelector("#pbtm")
.addEventListener("click",function(dets){
     var clickednum = Number(dets.target.textContent);
     if(clickednum === hitrun){
        increaseScore();
        makeBubble();
        getNewhit();
     }
    
});
runTimer();

makeBubble();
getNewhit();


increaseScore();








