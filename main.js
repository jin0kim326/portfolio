"use strict";

// navbar 높이만큼 스크롤시 투명하게 만들기
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.clientHeight;
document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

// navbar메뉴를 클릭했을때 스크롤링 되게 하기
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  //   const scrollTo = document.querySelector(link);
  //   scrollTo.scrollIntoView({ behavior: "smooth" });

  scrollIntoView(link);
});

// home 'contact me' 버튼 클릭시 contact섹션으로 이동
const contactBtn = document.querySelector(".home__contact");
contactBtn.addEventListener("click", (event) => {
  scrollIntoView("#contact");
});

// home 화면 스크롤시 투명하게 하기
const home = document.querySelector(".home__container");
const homeHeight = home.clientHeight;
document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// 스크롤 이동 함수
function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
