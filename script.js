const home = document.getElementById("home");
const services = document.getElementById("services");
const about = document.getElementById("about");
const work = document.getElementById("work");

const home_btn = document.querySelector(".nave-item-home");
const services_btn = document.querySelector(".nave-item-services");
const about_btn = document.querySelector(".nave-item-about");
const work_btn = document.querySelector(".nave-item-work");

window.addEventListener("DOMContentLoaded", function () {
  home.style.display = "flex";
  services.style.display = "none";
  about.style.display = "none";
  work.style.display = "none";
});

home_btn.addEventListener("click", function () {
  console.log("clicked");
  home.style.display = "flex";
  services.style.display = "none";
  about.style.display = "none";
  work.style.display = "none";
});

services_btn.addEventListener("click", function () {
  services.style.display = "block";
  home.style.display = "none";
  about.style.display = "none";
  work.style.display = "none";
});

about_btn.addEventListener("click", function () {
  about.style.display = "block";
  services.style.display = "none";
  home.style.display = "none";
  work.style.display = "none";
});

work_btn.addEventListener("click", function () {
  work.style.display = "block";
  services.style.display = "none";
  about.style.display = "none";
  home.style.display = "none";
});
