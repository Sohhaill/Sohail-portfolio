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
     loop: true,
  speed: 1000, // The higher the speed, the smoother and slower the transition
  autoplay: {
    delay: 3000, // No pause between transitions
    disableOnInteraction: false,
  },
  slidesPerView: 'auto', // For a smooth continuous marquee-style flow
  spaceBetween: 20,       // Optional: controls spacing between slides
  grabCursor: true,       // Optional: makes it feel more interactive

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


const swiper3 = new Swiper(".crouselleft", { 
  loop: true,
  speed: 3000, // The higher the speed, the smoother and slower the transition
  autoplay: {
    delay: 0, // No pause between transitions
    disableOnInteraction: false,
  },
  slidesPerView: 3, // For a smooth continuous marquee-style flow
  spaceBetween: 20,       // Optional: controls spacing between slides
  grabCursor: true,       // Optional: makes it feel more interactive
});


const swiper4 = new Swiper(".crouselright", { 
  loop: true,
  speed: 3000, // The higher the speed, the smoother and slower the transition
  autoplay: {
    delay: 0, // No pause between transitions
    disableOnInteraction: false,
    reverseDirection: true,
  },
  slidesPerView: 3, // For a smooth continuous marquee-style flow
  spaceBetween: 20,       // Optional: controls spacing between slides
  grabCursor: true,       // Optional: makes it feel more interactive
});