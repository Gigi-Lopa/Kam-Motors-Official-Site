/* ON SCROLL EVENTS*/ 
let selectHeader = document.querySelector('#header')
let selectTopbar = document.querySelector('#topbar')
if (selectHeader) {
  const headerScrolled = () => {
    if (window.scrollY > 100) {
      selectHeader.classList.add('header-scrolled')
      if (selectTopbar) {
        selectTopbar.classList.add('topbar-scrolled')
      }
    } else {
      selectHeader.classList.remove('header-scrolled')
      if (selectTopbar) {
        selectTopbar.classList.remove('topbar-scrolled')
      }
    }
  }
  window.addEventListener('load', headerScrolled)
  document.addEventListener("scroll", headerScrolled)
}
/* Mobile nav toggle */
let mobileTaggle = document.querySelector(".mobile-nav-toggle");
mobileTaggle.addEventListener("click", ()=>{
    document.querySelector('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
})
/* INIT AOS */ 
window.addEventListener("load", ()=>{
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    })
})

/* INIT CAROUSEL*/
/*
* OWL CAROUSEL
*/
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:30,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
          items:2,
          nav:false
      },
      900:{
        items:3,
        nav:true,
        loop:false
      },
      1000:{
          items:3,
          nav:true,
          loop:false
      },
      1024:{
        items:4,
        nav:true,
        loop:false,
        marginLeft:45
      },
      2000:{
        items:5,
        nav:true,
        loop:false
    }
  }
}) 