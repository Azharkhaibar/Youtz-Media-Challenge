$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    margin: 20,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    dots: true,
    dotsContainer: '.owl-dots',
    navContainer: '.owl-nav',
    navText: ["<div class='owl-prev'>&#9664;</div>", "<div class='owl-next'>&#9654;</div>"],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });
});



document.addEventListener("DOMContentLoaded", function() {
  var fadeElements = document.querySelectorAll("#home .background-image");
  var currentIndex = 0;

  function fadeInNext() {
    fadeElements[currentIndex].style.opacity = 0;
    currentIndex = (currentIndex + 1) % fadeElements.length;
    fadeElements[currentIndex].style.opacity = 1;
  }

  setInterval(fadeInNext, 5000); // Change slide every 5 seconds (adjust as needed)
});

document.addEventListener('DOMContentLoaded', function () {
  const arrowButtons = document.querySelectorAll('.owl-prev, .owl-next');

  arrowButtons.forEach(button => {
    button.style.fontSize = '2em'; 
    button.style.lineHeight = '1.5'; 
  });
});

$(document).ready(function(){
    $('.center').slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    });
  });