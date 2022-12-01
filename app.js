// other elements
const topBtn = document.querySelector(".scroll-btn");
const cards = document.querySelectorAll(".info-cards");

// nav bar jump links
const homeNav = document.getElementById("home-nav");
const aboutNav = document.getElementById("about-nav");
const featuresNav = document.getElementById("features-nav");
const addNav = document.getElementById("add-slack-nav");

// smooth scroll
function smoothScroll(target, duration) {
 var tg = document.querySelector(target);
 var targetPosition = tg.getBoundingClientRect().top;
 var startPosition = window.pageYOffset;
 var distance = targetPosition - startPosition;
 var startTime = null;

 function animation(currentTime) {
  if (startTime === null) startTime = currentTime;
  var timeElasped = currentTime - startTime;
  var run = ease(timeElasped, startPosition, distance, duration);
  window.scrollTo(0, run);
  if (timeElasped < duration) requestAnimationFrame(animation);
 }

 function ease(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
 }
 requestAnimationFrame(animation);
}

// jump links
aboutNav.addEventListener("click", () => {
 smoothScroll("#about", 1500);
});
featuresNav.addEventListener("click", () => {
 smoothScroll("#features", 1500);
});
addNav.addEventListener("click", () => {
 smoothScroll("#add-to-slack", 1500);
});

// display of the click to top btn
topBtn.addEventListener("click", () => {
 smoothScroll("#home-nav", 1000);
});

window.addEventListener("scroll", () => {
 if (window.pageYOffset >= 800) {
  topBtn.classList.toggle("hidden");
 } else if (window.pageYOffset <= 1190) {
  topBtn.classList.add("hidden");
 }
});

const observer = new IntersectionObserver(
 (entries) => {
  entries.forEach((entry) => {
   entry.target.classList.toggle("show-info", entry.isIntersecting);
  });
 },
 {
  threshold: 0.5,
 }
);

cards.forEach((card) => {
 observer.observe(card);
});
