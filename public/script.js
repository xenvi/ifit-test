window.onload = function() {
    // Fade in on load
    const landingtext = document.querySelector("#landingtext");
    const landingbtn = document.querySelector("#landingbtn");
    setTimeout(function(){ landingtext.classList.add('reveal')}, 500);
    setTimeout(function(){ landingbtn.classList.add('reveal')}, 1000);
    
    // Hamburger nav open
    const mobilenav = document.querySelector("#mobilenav");
    document.querySelector("#hamburger").addEventListener('click', function() {
        this.classList.toggle('open');
        mobilenav.classList.toggle('slidein');
    })

    // Mousemove parallax card effect
    document.querySelectorAll('.exercise-card').forEach((card) => {
        const height = card.clientHeight;
        const width = card.clientWidth;

        card.addEventListener('mousemove', handleMouseMove)

        function handleMouseMove(e) {
            // store x-y values of mouse
            const xValue = e.layerX;
            const yValue = e.layerY;
            
            // calculate x-y rotation values
            const yRotation = 20 * ((xValue - width / 2) / width);
            const xRotation = -20 * ((yValue - height / 2) / height);
            
            /* apply css transformation property */
            const string = 'perspective(500px) scale(1.1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)';

            card.style.transform = string;
        };

        card.addEventListener('mouseout', function() {
        card.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
        });

        card.addEventListener('mouseup', function() {
        card.style.transform = 'perspective(500px) scale(1.1) rotateX(0) rotateY(0)'
        });
    });
carouselize(document.querySelector('#slider'));
    function carouselize(carousel) {
      var wrapper = document.getElementById("slides"),
        slideWidth = document.getElementsByClassName('slide')[0].offsetWidth,
        currentSlide = 1,
        carouselNext = carousel.querySelector("#next"),
        carouselPrev = carousel.querySelector("#prev");

  
      function transition(currentSlideInput, slideWidthInput) {
        var pxValue = -(currentSlideInput - 1) * slideWidthInput;
        wrapper.style.transition = "all 0.3s ease-in-out";
        wrapper.style.left = pxValue + "px";
      }
  
      carouselNext.addEventListener('click', function () {
        if (currentSlide === 2) {
          currentSlide = 0;
          transition(currentSlide, slideWidth);
        } else {
          currentSlide++;
          transition(currentSlide, slideWidth);
        }
      });
      carouselPrev.addEventListener('click', function () {
        if (currentSlide === 0) {
          currentSlide = 2;
          transition(currentSlide, slideWidth);
        } else {
          currentSlide--;
          transition(currentSlide, slideWidth);
        }
      });
  }
}

window.onscroll = function () {
    // Nav position and visibility on scroll
    var nav = document.querySelector("#nav");
    var mobilenav = document.querySelector("#mobilenav");
    if (window.pageYOffset > 46) {
      mobilenav.style.top = '72px';
    } else {
      mobilenav.style.top = '118px';
    }
      if (window.pageYOffset > 919) {
        nav.classList.add("hidenav");
        mobilenav.classList.add("hidenav");
      } else {
        nav.classList.remove("hidenav");
        mobilenav.classList.remove("hidenav");
      }
  };
  