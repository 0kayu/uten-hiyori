particlesJS('particle-js', {
  particles: {
    number: {
      value: 100,
      density: {
        enable: false,
      }
    },
    color: {
      value: '#d9e6f4'
    },
    shape: {
      type: 'star',
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
      direction: 'left',
      random: true,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: true,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: false
      },
      onclick: {
        enable: false
      },
      resize: true
    },
  },
  retina_detect: true,
});