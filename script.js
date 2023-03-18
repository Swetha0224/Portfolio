
/*===== SHOW MENU =====*/

// const navToggle = document.querySelector(".nav_toggle")
const navToggle = document.documentElement,
      navMenu = document.querySelector(".nav_menu");

function openMenu(){
  navMenu.classList.add('animate');
  navToggle.addEventListener('click',closeMenuOnBodyClick);
}
    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("show-menu");
        navToggle.classList.toggle("active");
    })
    function closeMenu(){
      navMenu.classList.remove('animate');
      navToggle.removeEventListener('click',closeMenuOnBodyClick);
    }
    function closeMenuOnBodyClick(){
      closeMenu();
    }
    function closeMenuOnBodyClick(event){
      const path=event.composedPath();
      if(path.some(elem=>elem.id==='myMenuId')){
        return;
      }
      closeMenu();
    }
// window.onscroll=()=>
// {
//   navbar.classList.remove("show-menu");
//   navMenu.classList.toggle("move");
// }

/*===== TYPING TEXT =====*/

    var typed = new Typed(".profession_text", {
        strings: ["Programmer","Web Developer"],
        typeSpeed: 70,
        backSpeed: 70,
        loop: true,
    })


/*===== COUNTER =====*/

     const counters = document.querySelectorAll(".counter");

     counters.forEach((counter) => {
       counter.innerText = "0";
    
       const updateCounter = () => {
         const target = +counter.getAttribute("data-counter");
         const c = +counter.innerText;
    
         const increment = target / 200;
    
         if (c < target) {
           counter.innerText = `${Math.ceil(c + increment)}`;
           setTimeout(updateCounter, 40);
         } else {
         counter.innerText = target;
         }
     };
    
       updateCounter();
    });
    

    /*===== SWIPER =====*/

    var swiper = new Swiper(".brand_container", {
        slidesPerView: 2,
        spaceBetween: 50,
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
        breakpoints: {
            640: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          },

          loop: true,
      });


/*===== BACK TOP BUTTON =====*/

      const back_btn_top = document.querySelector(".btn-top");

      window.addEventListener("scroll", () => {
        if(window.scrollY >= 50){
           back_btn_top.classList.add("active")
        }else{
            back_btn_top.classList.remove("active")
        }
      })



/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 250,
//     reset: true
});

sr.reveal('.home_content, .about_banner, .brand_container, .copyright',{}); 
sr.reveal('.about_content, .contact_container, .skills_wrapper, .count_wrapper',{delay: 500}); 
sr.reveal('.social_list,.title_wrapper, .work_list',{ interval: 250}); 
sr.reveal('.service_item, .team_item, .work_item, .input_field',{interval: 250}); 