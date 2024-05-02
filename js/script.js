// Swiper js
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  // grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// Nav open close
const body = document.querySelector('body'),
  navMenu = body.querySelector('.menu-content'),
  navOpenBtn = body.querySelector('.navOpen-btn'),
  navCloseBtn = navMenu.querySelector('.navClose-btn');

if (navMenu && navOpenBtn) {
  navOpenBtn.addEventListener("click", () => {
    navMenu.classList.add("open");
    body.style.overflowY = "hidden";
  })
}

if (navMenu && navCloseBtn) {
  navCloseBtn.addEventListener("click", () => {
    navMenu.classList.remove("open");
    body.style.overflowY = "scroll";
  })
}

// Change header bg color
window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset;

  if (scrollY > 5) {
    document.querySelector("header").classList.add("header-active");
  } else {
    document.querySelector("header").classList.remove("header-active");
  }

  // Scroll up button
  const scrollUpBtn = document.querySelector('.scrollUp-btn');

  if (scrollY > 250) {
    scrollUpBtn.classList.add("scrollUpBtn-active");
  } else {
    scrollUpBtn.classList.remove("scrollUpBtn-active");
  }


  // Nav link indicator

  const sections = document.querySelectorAll('section[id]');
  sections.forEach(section => {
    const sectionHeight = section.offsetHeight,
      sectionTop = section.offsetTop - 100;

    let navId = document.querySelector(`.menu-content a[href='#${section.id}']`);
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navId.classList.add("active-navlink");
    } else {
      navId.classList.remove("active-navlink");
    }

    navId.addEventListener("click", () => {
      navMenu.classList.remove("open");
      body.style.overflowY = "scroll";
    })
  })
})


// Scroll Reveal Animation
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
})

sr.reveal(`.header, .section-title, .section-subtitle, .section-description, .services-card, .accordion, .newsletter, .contact-wrap, .swiper-wrapper,
.newsletter-inputBox, .newsletter-mediaIcon, .review, .footer-content, .col, .footer-copyRight, .footer-links`, { interval: 100, })

sr.reveal(`.about-imageContent, .menu-items`, { origin: 'left' })
sr.reveal(`.about-details, .time-table`, { origin: 'right' })

// COUNTER
let valueDisplays = document.querySelectorAll(".num");
let interval = 500; // Decreased interval value for faster counting

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});


// ACCORDION
let li = document.querySelectorAll(".faq-text li");
for (var i = 0; i < li.length; i++) {
  li[i].addEventListener("click", (e) => {
    let clickedLi;
    if (e.target.classList.contains("question-arrow")) {
      clickedLi = e.target.parentElement;
    } else {
      clickedLi = e.target.parentElement.parentElement;
    }
    clickedLi.classList.toggle("showAnswer");
  });
}



