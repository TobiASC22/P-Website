let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function() {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // scrolling down
    navbar.style.top = "-80px";
  } else {
    // scrolling up
    navbar.style.top = "0";
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

 document.addEventListener("DOMContentLoaded", function() {
  const content = document.querySelector("main, .project-page");

  if (content) {

 content.style.opacity = 0;

    let opacity = 0;
    const interval = setInterval(() => {
      opacity += 0.05;
      if (opacity >= 1) {
        opacity = 1;
        clearInterval(interval);
      }
      content.style.opacity = opacity;
    }, 25);
  }
});