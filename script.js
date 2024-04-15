let coin = document.getElementById("coin");
let flip_button = document.getElementById("flip_button");
let result = document.getElementById("result");
let number_of_heads = document.getElementById("number_of_heads");
let number_of_tails = document.getElementById("number_of_tails");
let coin_flip_sound = new Audio("./Assets/coin_flip_sound.mp3");
let heads_count = 0;
let tails_count = 0;

// Flip coin logic
flip_button.addEventListener("click", toss);

// Flip coin function
function toss() {
  result.innerText = "";
  coin_flip_sound.play();
  let i = Math.floor(Math.random() * 2);
  coin.style.animation = "none";
  if (i === 0) {
    setTimeout(function () {
      coin.style.animation = "spin-heads 3s forwards linear";
    }, 100);
    setTimeout(Heads, 3100);
  } else {
    setTimeout(function () {
      coin.style.animation = "spin-tails 3s forwards linear";
    }, 100);
    setTimeout(Tails, 3100);
  }
  disableButton();
}

function disableButton() {
  flip_button.disabled = true;
  setTimeout(function () {
    flip_button.disabled = false;
  }, 3100);
}

// Funtion when heads comes
function Heads() {
  result.innerText = "Heads";
  heads_count++;
  setTimeout(() => {
    number_of_heads.innerText = heads_count;
    // number_of_tails.innerText = tails_count;
  }, 200);
}

// Funtion when tails comes
function Tails() {
  result.innerText = "Tails";
  tails_count++;
  setTimeout(() => {
    // number_of_heads.innerText = heads_count;
    number_of_tails.innerText = tails_count;
  }, 200);
}
