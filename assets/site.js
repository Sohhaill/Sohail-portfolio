const rawText = "Shopify & WordPress<br><span class='highlight'>Developer</span>";
const typingSpeed = 100;
const delayAfterTyping = 2000;
const element = document.getElementById("typewriter");

let i = 0;
let displayText = "";

function typeText() {
  // Show raw HTML character-by-character
  if (i < rawText.length) {
    displayText += rawText[i];
    element.innerHTML = displayText;
    i++;
    setTimeout(typeText, typingSpeed);
  } else {
    // Restart after delay
    setTimeout(() => {
      i = 0;
      displayText = "";
      element.innerHTML = "";
      typeText();
    }, delayAfterTyping);
  }
}
typeText();


  const swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3,
    loop: true,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
  320: {
    slidesPerView: 1.2, // shows a bit of the next slide
  },
  480: {
    slidesPerView: 1.5, // a bit more visible
  },
  640: {
    slidesPerView: 2, // two slides for larger phones
  }
}

  });


    const menu = document.getElementById('mobileMenu');
  const toggle = document.getElementById('menuToggle');
  const close = document.getElementById('closeMenu');

  toggle.addEventListener('click', () => {
    menu.classList.remove('translate-x-full');
    menu.classList.add('translate-x-0');
  });

  close.addEventListener('click', () => {
    menu.classList.remove('translate-x-0');
    menu.classList.add('translate-x-full');
  });