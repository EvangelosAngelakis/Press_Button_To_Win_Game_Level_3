const messages = [
     "The answer is hidden inside the text, 'somewhere'.",
     "Keep pressing and see the hidden hints to win.",
     "This will be tricky. Can you find your way to win?",
     "Almost there, but not quite there yet.",
     "Keep on 'pressing' numbers to win the game.",
     "This number is tough, your need to press hard!",
     "Better luck next time! Keep going.",
     "The button you press to win is either start or end.",
     "If you want to win, press the number and hold.",
     "Not this way either. You can do it for sure!",
     "How much the button needs to be held, i cannot tell.",
     "Hmm, still not the correct way to do it.",
     "Keep pressing, you'll get it eventually!",
     "The number looks like infinity standing up!",
     "Wrong again! Don't give up! Keep trying.",
     "You're getting closer, but this isn't it.",
     "You will need to hold or the win will not unfold.",
     "Nope, this is not the one. Keep going!",
     "Not quite. Keep pressing those buttons!",
     "Nope, that's not it. Don't lose hope!",
     "Incorrect again. Keep pressing buttons!",
     "Almost there, I promise. Cross my heart!",
     "Just a little bit more. You can do it!",
];

let currentIndex = 0;
let stopExecution = false;

function cycleMessage() {
    if (stopExecution) return;
         const dText = document.getElementById('dText');
         dText.innerText = messages[currentIndex];
         currentIndex = (currentIndex + 1) % messages.length;
         document.getElementById('dButton').style.backgroundColor = "bisque";
         document.getElementById('dText').style.color = "black";
}

document.addEventListener('DOMContentLoaded',function(){
    const button = document .getElementById('button8');
    let timer;
    
    function startTimer() {
        timer = setTimeout(function() {
            activateFunction();
        }, 2000);
    }
    
    function clearTimer() {
        clearTimeout(timer);
    }

    button.addEventListener('mousedown', startTimer);
    button.addEventListener('mouseup', clearTimer);
    button.addEventListener('mouseleave', clearTimer);

    button.addEventListener('touchstart', startTimer);
    button.addEventListener('touchend', clearTimer);
    button.addEventListener('touchcancel', clearTimer);
    
    function activateFunction() {
        stopExecution = true; 
        document.getElementById('dText').textContent = "CONGRATULATIONS. YOU WON!!!";
        document.getElementById('dButton').style.backgroundColor = "cyan";
      }
    });


function resetPage() {
    location.reload();
}

