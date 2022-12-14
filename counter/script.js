"use strict";
const decreaseBtn = document.querySelector(".button-decrease");
const increaseBtn = document.querySelector(".button-increase");
const resetBtn = document.querySelector(".button-reset");
const numberText = document.querySelector(".number");

let number = 0;

decreaseBtn.addEventListener("click", function () {
  console.log("decrease btn");
  number--;
  numberText.textContent = number;
});

increaseBtn.addEventListener("click", function () {
  console.log("increase btn");
  number++;
  numberText.textContent = number;
});

resetBtn.addEventListener("click", function () {
  console.log("reset btn");
  number = 0;
  numberText.textContent = number;
});
