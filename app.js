//lottie cover animation
var animation = bodymovin.loadAnimation({
  container: document.getElementById("animation container"),
  path: "./images/animations/Hero.lottie.json",
  render: "svg",
  loop: true,
  autoplay: true,
  name: "cover animation",
});
var animationPen = bodymovin.loadAnimation({
  container: document.getElementById("animation2 container2"),
  path: "./images/animations/pen.json",
  render: "svg",
  loop: true,
  autoplay: true,
  name: "pen animation",
});
var animationWhatIs = bodymovin.loadAnimation({
  container: document.getElementById("animation3 container3"),
  path: "./images/animations/WhatIs.lottie.json",
  render: "svg",
  loop: false,
  autoplay: true,
  name: "what animation",
});

//for services changing
const creationBtn = document.querySelector("#creation-btn");
const revisionBtn = document.querySelector("#revision-btn");
const creationCard = document.querySelector(".outline-creation");
const revisionCard = document.querySelector(".outline-revision");

creationBtn.addEventListener("click", () => {
  creationBtn.classList.add("service-active");
  revisionBtn.classList.remove("service-active");
  creationCard.style.display = "flex";
  revisionCard.style.display = "none";
  // creationCard.classList.add("fade1");
  // revisionCard.classList.add("fade1");

  creationCard.classList.remove("slide-left1");
  revisionCard.classList.remove("slide-left1");

  creationCard.classList.add("slide-right1");
  revisionCard.classList.add("slide-right1");
});

revisionBtn.addEventListener("click", () => {
  creationBtn.classList.remove("service-active");
  revisionBtn.classList.add("service-active");
  creationCard.style.display = "none";
  revisionCard.style.display = "flex";
  // creationCard.classList.add("fade1");
  // revisionCard.classList.add("fade1");

  creationCard.classList.remove("slide-right1");
  revisionCard.classList.remove("slide-right1");

  creationCard.classList.add("slide-left1");
  revisionCard.classList.add("slide-left1");
});
