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

  typeText();

  //   new Swiper(".mySwiper", {
  //   slidesPerView: 1,
  //   spaceBetween: 20,
  //    loop: true,
  //   autoplay: {
  //     delay: 1500,
  //     disableOnInteraction: false, 
  //   },
  //   breakpoints: {
  //     640: {
  //       slidesPerView: 2,
  //     },
  //     1024: {
  //       slidesPerView: 3.5,
  //     },
  //   },
  //   loop: true,
  // });


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