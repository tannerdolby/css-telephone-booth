const lightOne = document.getElementById("lightOne");
const lightTwo = document.getElementById("lightTwo");
const booth = document.getElementsByClassName("container")[0];

booth.addEventListener("click", () => {
  lightOne.classList.toggle("light-box");
  lightTwo.classList.toggle("light-box-copy");
});