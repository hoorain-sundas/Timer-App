var hr = document.getElementById("hr");
var min = document.getElementById("min");
var sec = document.getElementById("sec");
var hour = prompt("Enter hours");
var minute = prompt("Enter minutes");
var second = prompt("Enter seconds");
var interval;
hr.innerHTML = hour;
min.innerHTML = minute;
sec.innerHTML = second;

function timer(){
   if (second > 0){
    second--;
    sec.innerHTML = second;
    
   } else if (minute > 0){
    if (minute >= 1){
     second = 60;   
     second--;
      sec.innerHTML = second;
    }
    minute--;
    min.innerHTML = minute
   } else if (hour > 0){
    if (hour >= 1){
     minute = 60;   
     minute--;
      min.innerHTML = minute;
    }
    hour--;
    hr.innerHTML = hour;
   }

}
// function disabled(btnid){
document.getElementById
// }

function start(){
    interval = setInterval(timer,1000)
     document.getElementById("btn1").disabled = true;
     document.getElementById("btn2").disabled = false;
     document.getElementById("btn3").disabled = false;
}
function stop(){
    clearInterval(interval)
    document.getElementById("btn1").disabled = false;
    document.getElementById("btn2").disabled = true;
    document.getElementById("btn3").disabled = false;
}

function restart(){
    hour = 0;
    minute = 0;
    second = 0;
    hr = document.getElementById("hr");
    min = document.getElementById("min");
    sec = document.getElementById("sec");
    hr.innerHTML = hour;
    min.innerHTML = minute;
    sec.innerHTML = second;
    stop();
    hour = prompt("Enter hours");
    minute = prompt("Enter minutes");
    second = prompt("Enter seconds");
    hr.innerHTML = hour;
    min.innerHTML = minute;
    sec.innerHTML = second;
    document.getElementById("btn1").disabled = false;
    document.getElementById("btn2").disabled = true;
    document.getElementById("btn3").disabled = true;
}