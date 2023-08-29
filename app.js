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
