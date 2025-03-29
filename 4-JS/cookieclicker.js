let score = 0;
let autoClickerCost = 10;
let autoClickers = 0;

const scoreDisplay = document.getElementById("score");
const cookie = document.getElementById("cookie");
const upgradeButton = document.getElementById("upgrade");

cookie.addEventListener("click", () => {
    score++;
    scoreDisplay.textContent = score;
});

upgradeButton.addEventListener("click", () => {
    if (score >= autoClickerCost) {
        score -= autoClickerCost;
        autoClickers++;
        autoClickerCost = Math.floor(autoClickerCost * 1.5);
        upgradeButton.textContent = `Buy Auto-Clicker (Cost: ${autoClickerCost})`;
        scoreDisplay.textContent = score;
    }
});

// Auto-clicker effect
setInterval(() => {
    score += autoClickers;
    scoreDisplay.textContent = score;
}, 1000);
