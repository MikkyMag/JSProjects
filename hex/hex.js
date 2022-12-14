const hexText = document.querySelector(".hex");
const hexBtn = document.querySelector(".button-randomhex");

const hexValues = "0123456789ABCDEF";
const randNum = () => Math.trunc(Math.random() * 16);
let randomQQ = "#";

const overlay = document.querySelector(".overlay");
const popup = document.querySelector(".popup");
const hidden = document.querySelector(".hidden");
const closeBtn = document.querySelector(".close-button");

hexBtn.addEventListener("click", function () {
  // 1ST METHOD
  // const randHex = `#${hexValues[randNum()]}${hexValues[randNum()]}${
  //   hexValues[randNum()]
  // }${hexValues[randNum()]}${hexValues[randNum()]}${hexValues[randNum()]}`;
  // hexText.textContent = randHex;
  // document.querySelector("body").style.backgroundColor = randHex;

  // 2nd METHOD
  randomQQ = "";
  for (let i = 0; i < 6; i++) {
    randomQQ += hexValues[randNum()];
  }

  document.querySelector("body").style.backgroundColor = "#" + randomQQ;
  hexText.style.color = "#" + randomQQ;
  hexText.textContent = "#" + randomQQ;
  closeBtn.style.color = "#" + randomQQ;
});

// OPEN - CLOSE POP-UP
hexText.addEventListener("click", function () {
  document.querySelector(
    ".frame"
  ).src = `https://www.colorhexa.com/${randomQQ}`;

  popup.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

closeBtn.addEventListener("click", function () {
  popup.classList.add("hidden");
  overlay.classList.add("hidden");
});

overlay.addEventListener("click", function () {
  popup.classList.add("hidden");
  overlay.classList.add("hidden");
});
