var playing = false;
var score;
var tr;
var ca;

document.getElementById("sr").onclick = function(){
    if(playing==true){
        location.reload();
    }
    else{
        playing=true;
        score = 0; 
document.getElementById("scorevalue").innerHTML = score;
        tr = 60;
document.getElementById("trv").innerHTML = tr;
        
show("tr");
        
document.getElementById("sr").innerHTML = "Reset Game";
        startCountdown();
        generateQA();
    }
}
for(i=1; i<5; i++){
document.getElementById("b"+i).onclick = function(){
//check if we are playing
if(playing == true){//yes
if(this.innerHTML == ca){
//correct answer
//increase score by 1
score++;
document.getElementById("scorevalue").innerHTML = score;
//hide wrong box and show correct box
hide("wrong");
show("correct");
setTimeout(function(){
hide("correct");
}, 1000);
generateQA();
}else{
//wrong answer
hide("correct");
show("wrong");
setTimeout(function(){
hide("wrong");
}, 1000);
}
}
}
}
//to start the countdown
function startCountdown(){action = setInterval(function(){tr -= 1;document.getElementById("trv").innerHTML = tr;if(tr==0){
    stopcountdown();
    show("go");
    document.getElementById("go").innerHTML="<p>Game over!</p><p>your score is " + score + ".</p>";
    hide("tr");
    hide("correct");
hide("wrong");
playing = false;document.getElementById("sr").innerHTML = "Start Game";
}},1000);
}

//to stop the countdown
function stopcountdown(){
       clearInterval(action);
}

//to display 
function show(Id){
document.getElementById(Id).style.display = "block";
}

//to hide the elements
function hide(Id){
document.getElementById(Id).style.display = "none";
}

//to generate Q&A 
function generateQA(){
var x = 1 + Math.round(9*Math.random());
var y = 1 + Math.round(9*Math.random());
ca = x*y;
document.getElementById("que").innerHTML = x + "x" + y;
var cp = 1 + Math.round(3*Math.random());
document.getElementById("b"+cp).innerHTML = ca;
    var answer = [ca];
for(i=1;i<5;i++){
    if(i!= cp){
        var wa;
        do{
            wa = (1 + Math.round(9*Math.random()))*(1 + Math.round(9*Math.random()));
}while(answer.indexOf(wa)>-1)
document.getElementById("b"+i).innerHTML = wa;
answer.push(wa);
        }
    }
}