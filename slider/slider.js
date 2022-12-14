"use strict";

const nextBtn = document.querySelector(".button-next");
const previousBtn = document.querySelector(".button-previous");
const items = document.querySelectorAll(".item");

let artIndex = 0;
show();

function show(num) {
  if (num < 0) {
    artIndex = items.length - 1;
  } else if (num > items.length - 1) {
    artIndex = 0;
  }

  for (let i = 0; i < items.length; i++) {
    items[i].style.display = "none";
  }

  items[artIndex].style.display = "block";
}

// BUTTONS
nextBtn.addEventListener("click", function () {
  console.log("Old in:" + artIndex);
  show((artIndex += 1));
  console.log("New in:" + artIndex);
});

previousBtn.addEventListener("click", function () {
  show((artIndex -= 1));
  console.log(artIndex);
});
