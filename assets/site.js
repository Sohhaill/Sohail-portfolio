

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
  slidesPerView: 'auto', 
  spaceBetween: 20,       
  grabCursor: true,       

    breakpoints: {
  320: {
    slidesPerView: 1.2, 
  },
  480: {
    slidesPerView: 1.5, 
  },
  640: {
    slidesPerView: 2, 
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
  speed: 3000, 
  autoplay: {
    delay: 0, 
    disableOnInteraction: false,
  },
  spaceBetween: 20,      
 

  // Default for desktop
  slidesPerView: 3, 

  breakpoints: {
    320: {
      slidesPerView: 1.5,
       spaceBetween: 5, // Mobile
    },
    768: {
      slidesPerView: 2.5,
       spaceBetween: 5, // Tablet
    },
    1024: {
      slidesPerView: 3,   // Desktop
    },
  }
});



const swiper4 = new Swiper(".crouselright", { 
  loop: true,
  speed: 3000, 
  autoplay: {
    delay: 0, 
    disableOnInteraction: false,
    reverseDirection: true,
  },
  spaceBetween: 20,      


  // Default for desktop
  slidesPerView: 3, 

  breakpoints: {
    320: {
      slidesPerView: 1.5,
      spaceBetween: 5,     // Mobile
    },
    768: {
      slidesPerView: 2.5,
       spaceBetween: 5, // Tablet
    },
    1024: {
      slidesPerView: 3,   // Desktop
    },
  }
});
const swiper5 = new Swiper(".crouselrightshopify", { 
  loop: true,
  speed: 3000, 
  autoplay: {
    delay: 0, 
    disableOnInteraction: false,
    reverseDirection: true,
  },
  spaceBetween: 20,      


  // Default for desktop
  slidesPerView: 3, 

  breakpoints: {
    320: {
      slidesPerView: 1.5,
      spaceBetween: 5,     // Mobile
    },
    768: {
      slidesPerView: 2.5,
       spaceBetween: 5, // Tablet
    },
    1024: {
      slidesPerView: 3,   // Desktop
    },
  }
});
window.addEventListener("scroll", function () {
  const header = document.getElementById("mainHeader");
  header.classList.toggle("scrolled", window.scrollY > 0);
});
 // Digital Counter Logic
    let percent = 0;
    const counter = document.getElementById("percentCounter");

    const interval = setInterval(() => {
      percent++;
      counter.innerText = percent + "%";
      if (percent >= 100) clearInterval(interval);
    }, 30); // 30ms × 100 = ~3s

    // Splash Exit Animations
    setTimeout(() => {
      document.getElementById("splashTop").classList.add("animate-up");
      document.getElementById("splashBottom").classList.add("animate-down");
      document.getElementById("splashText").classList.add("fade-out");
    }, 6200);

    // Show Main Content
    setTimeout(() => {
      document.querySelector(".splash_screen").style.display = "none";
      document.getElementById("mainContent").classList.remove("hidden");
    }, 7100);
window.addEventListener("scroll", function () {
  const header = document.getElementById("mainHeader");
  header.classList.toggle("scrolled", window.scrollY > 0);
});

 window.addEventListener('DOMContentLoaded', () => {
    const muhammad = document.getElementById('muhammad');
    const sohail = document.getElementById('sohail');

   
    setTimeout(() => {
      muhammad.classList.remove('opacity-0', 'scale-50', '-translate-x-[100vw]');
    }, 100); 

    
    setTimeout(() => {
      sohail.classList.remove('opacity-0', 'scale-50', 'translate-x-[100vw]');
    }, 500); 
     const images = document.querySelectorAll('.company-img');
    images.forEach((img, index) => {
      setTimeout(() => {
        img.classList.remove('opacity-0', 'translate-y-10');
        img.classList.add('opacity-100', 'translate-y-0');
      }, index * 200); // Stagger each image
    });
  });

setTimeout(() => {
  const subtitle = document.getElementById('subtitle');
  subtitle.classList.remove('opacity-0', 'translate-y-8');
}, 900);



