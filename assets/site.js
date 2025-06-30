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

    new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
     loop: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false, 
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3.5,
      },
    },
    loop: true,
  });

   new Swiper(".skill", {
    slidesPerView: 2.5,
    spaceBetween: 40,
     loop: true,
  autoplay: {
      delay: 1500,
      disableOnInteraction: false, 
    },
    breakpoints: {
      640: {
        slidesPerView: 2.5,
         spaceBetween: 40,
      },
      1024: {
        slidesPerView: 8,
         spaceBetween: 70,
      },
    },
    loop: true,
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