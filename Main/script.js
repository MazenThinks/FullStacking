var n = Math.random();
n = n * 6;
n = Math.floor(n) + 1;

var m = Math.random();
m = m * 6;
m = Math.floor(m) + 1;

document.querySelector(".img1").setAttribute("src", "images/dice" + n + ".png");

document.querySelector(".img2").setAttribute("src", "images/dice" + m + ".png");

if (n > m) {
    document.querySelector("h1").innerHTML = "Player 1 Wins! 🚩";
    } 
else if (n === m) {
        document.querySelector("h1").innerHTML = "Draw!";
    }
else if (n < m) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
    }


document.querySelectorAll(".players")[0].style.fontSize = "50px";
document.querySelectorAll(".players")[1].style.fontSize = "50px";

const btn = document.querySelector(".btnroll");

function handleClick() {
  window.location.reload();
}

btn.addEventListener("click", handleClick);
