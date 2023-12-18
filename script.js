let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#flip-button");
let coin_flip_sound = new Audio("coin_flip_sound.mp3");

flipBtn.addEventListener("click", () => {
  document.querySelector("#result").innerHTML = "";
  coin_flip_sound.play()
  let i = Math.floor(Math.random() * 2);
  coin.style.animation = "none";
  if (i) {
    setTimeout(function () {
      coin.style.animation = "spin-heads 3s forwards";
    }, 100);
    setTimeout(Heads, 3000);
  } 
  else {
    setTimeout(function () {
      coin.style.animation = "spin-tails 3s forwards";
    }, 100);
    setTimeout(Tails, 3000);
  }
  setTimeout(updateStats, 3000);
  disableButton();
});

function disableButton(){
    flipBtn.disabled = true;
    setTimeout(function(){
        flipBtn.disabled = false;
    },3000);
}

function Heads() {
  document.querySelector("#result").innerHTML = "Heads";
}

function Tails() {
  document.querySelector("#result").innerHTML = "Tails";
}