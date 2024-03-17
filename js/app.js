/* I had to do a bit of research to make the hamburger menu work. I had to use the following links to help me figure out how to do it.
https://forum.freecodecamp.org/t/responsive-nav-bar-issue/348655
https://www.sitepoint.com/community/t/how-to-close-navigation-bar-in-js-by-clicking-away/392454
https://stackoverflow.com/questions/70442998/slick-slider-dots-not-changing-color
https://reintech.io/blog/tutorial-working-with-the-window-scrollto-method */

$(document).ready(function(){
  $('.slider').slick({
      arrows:false,
      dots:true,
      appendDots:'.slider-dots',
      dotsClass:'dots'
  });

  let hamburger = document.querySelector('.hamburger');
  let times = document.querySelector('.times');
  let mobileNav = document.querySelector('.mobile-nav');

  hamburger.addEventListener('click', function(){
      mobileNav.classList.add('open');  
  });

  times.addEventListener('click', function(){
      mobileNav.classList.remove('open');  
  });

  window.scrollTo(0, 0);;;
});
