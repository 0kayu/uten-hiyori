// Rellax
var rellax = new Rellax('.rellax');

// particlesJS
particlesJS("particle-1", {
  particles: {
    number: {
      value: 200,
      density: {
        enable: false,
      }
    },
    color: {
      value: "#d9e6f4"
    },
    shape: {
      type: "star",
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
      }
    },
    size: {
      value: 5,
      random: true,
      anim: {
        enable: false,
      }
    },
    line_linked: {
      enable: false,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "top-right",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: true,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      resize: true
    },
  },
  retina_detect: true,
});

// function
$(function(){
  $(window).scroll(function () {
    $('.fadein').each(function() {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 200) {
        $(this).addClass('scrollin');
      }
    });
  });
});