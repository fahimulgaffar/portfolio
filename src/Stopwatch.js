export function handlestopwatchClick(event) {
    const modal = document.querySelector(".stopwatch-modal")
    modal.style.display = "block";
    stopwatchStart()
  }
  
export function handlestopwatchClose(event) {
    const modal = document.querySelector(".stopwatch-modal")
    modal.style.display = "none";
}

function stopwatchStart(){
  var seconds = 0; 
    var tens = 0;
    var startButton = document.getElementById("start")
    var stopButton = document.getElementById("stop")
    var resetButton = document.getElementById("reset")
    var appendTens = document.getElementById("tens")
    var appendSeconds = document.getElementById("seconds")
    var Interval ;
  
    function buttonStart() {
      
      clearInterval(Interval);
       Interval = setInterval(startTimer, 10);
    }
    
    function buttonStop() {
         clearInterval(Interval);
    }
    
  
    function buttonReset() {
       clearInterval(Interval);
      tens = "0";
        seconds = "0";
      appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
    }
    
     
    
    function startTimer () {
      tens++; 
      
      if(tens <= 9){
        appendTens.innerHTML = "0" + tens;
      }
      
      if (tens > 9){
        appendTens.innerHTML = tens;
        
      } 
      
      if (tens > 99) {
        console.log("seconds");
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
      }
      
      if (seconds > 9){
        appendSeconds.innerHTML = seconds;
      }
    
  
  }

  startButton.addEventListener("click",buttonStart)
  stopButton.addEventListener("click",buttonStop)
  resetButton.addEventListener("click",buttonReset)
}
    