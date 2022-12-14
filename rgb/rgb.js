"use strict";

const rgbText = document.querySelector(".rgb");
const rgbBtn = document.querySelector(".button-randomrgb");
let number = 0;

const randomNumber = () => Math.trunc(Math.random() * 266);

rgbBtn.addEventListener("click", function () {
  const randomrgb = `RGB(${randomNumber()},${randomNumber()},${randomNumber()})`;
  document.querySelector("body").style.backgroundColor = randomrgb;
  rgbText.style.color = randomrgb;
  rgbText.textContent = randomrgb;
});
