//setting variables
let score = 0;
let autoClickerCost = 10;
let autoClickers = 0;

//retriving data from html code
const scoreDisplay = document.getElementById("score");
const cookie = document.getElementById("cookie");
const upgradeButton = document.getElementById("upgrade");

// when you click cookie, increase the score 
cookie.addEventListener("click", function() {
    score++; 
    scoreDisplay.textContent = score;
});

//when clicking on upgrade button, if enough score, can buy autoClicker
upgradeButton.addEventListener("click", function (){
    if (score >= autoClickerCost) {
        score -= autoClickerCost;
        autoClickers++;
        autoClickerCost = Math.floor(autoClickerCost * 2.0);
        upgradeButton.textContent = "Buy Auto-Clicker(Cost : "+autoClickerCost+")"
        scoreDisplay.textContent = score;
    }
});

//add score from auto clickers for every second
setInterval(function (){
    score += autoClickers;
    scoreDisplay.textContent = score;

},1000);