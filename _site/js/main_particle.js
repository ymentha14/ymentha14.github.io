jQuery( document ).ready( function( $ ) {

    /*
    PARTICLES
    -------------------*/
    particlesJS("particles-js", {
        "particles": {
        "number": {
          "value": 20,
          "density": {
            "enable": true,
            "value_area": 600
          }
        },
        "color": {
          "value": "#a0a0a0"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#606060"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 10,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 20,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 200,
          "color": "#808080",
          "opacity": 0.3,
          "width": 2
        },
        "move": {
          "enable": true,
          "speed": 3,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": true,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
        },
        "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 140,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
        },
        "retina_detect": true
    });

    /*
    OWL CAROUSEL
    -------------------*/
    $('#owl-events').owlCarousel({
        margin: 0,
        dots: false,
        nav: true,
        navText: [],
        loop: true,
        // autoPlay: false,
        // autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

});