window.onload = () => {
  document.querySelector('.slide-1').focus()
}




const wrapper = document.querySelector(".outer-wrapper");
const yellowdot = document.querySelector('.yellow-dot').getBoundingClientRect()
const slide2 = document.querySelector(".slide-2").getBoundingClientRect();
const slide1 = document.querySelector(".slide-1").getBoundingClientRect();
const purpledot = document.querySelector('.purple-dot').getBoundingClientRect()
const bluedot = document.querySelector('.blue-dot').getBoundingClientRect()
const reddot = document.querySelector('.red-dot').getBoundingClientRect()
const yellowdot2 = document.querySelector('.yellow-dot-2').getBoundingClientRect()
const purpledot2 = document.querySelector('.purple-dot-2').getBoundingClientRect()
const bluedot2 = document.querySelector('.blue-dot-2').getBoundingClientRect()
const slide5 = document.querySelector('.slide-5').getBoundingClientRect()


let isArrowOpaque = false;

const arrowforward = document
  .querySelector(".arrow-forward-waypoint")
  .getBoundingClientRect();

// console.log(arrowforward)




wrapper.addEventListener("scroll", function (event) {
  // const isItMobile = window.matchMedia("(max-width: 892px)")

  // if (isItMobile) {
  //   wrapper.scrollTo(0, wrapper.scrollTop)
  // }

  const scrollPosition = wrapper.scrollTop + arrowforward.left + arrowforward.width
  if (scrollPosition < slide5.left) {
    isArrowOpaque = false;
    anime({
      targets: ".arrow-forward",
      duration: 1,
      delay: 0,
      easing:'linear',
      opacity:1,
    });
  }
  if (wrapper.scrollTop < slide1.right) {
    anime({
      targets: ".arrow-forward",
      duration: 1,
      delay: 0,
      easing:'linear',
      filter:
        "invert(0%) sepia(1%) saturate(7480%) hue-rotate(315deg) brightness(93%) contrast(100%)",
    });
  }
  
  if (scrollPosition > slide2.left) {
    anime({
      targets: ".arrow-forward",
      duration: 1,
      delay: 0,
      easing:'linear',
      filter:
        "invert(98%) sepia(100%) saturate(21%) hue-rotate(40deg) brightness(105%) contrast(100%)",
    });
    

  }

  if (scrollPosition > yellowdot.left) {
    anime({
      targets: ".arrow-forward",
      duration: 1,
      delay: 0,
      easing:'linear',
      filter:
        "invert(77%) sepia(100%) saturate(575%) hue-rotate(5deg) brightness(109%) contrast(104%)",
    });
    anime({
      targets:".yellow-dot-1-child",
      duration:1000,
      delay:0,
      easing:'linear',
      opacity:1,

    })
  }

  if (scrollPosition > purpledot.left) {
    anime({
      targets: ".arrow-forward",
      duration: 1,
      delay: 0,
      easing:'linear',
      filter:
        "invert(15%) sepia(92%) saturate(4015%) hue-rotate(276deg) brightness(100%) contrast(138%)",
    });
    anime({
      targets:".purple-dot-1-child",
      duration:1000,
      delay:0,
      easing:'linear',
      opacity:1,

    })
  }

  if (scrollPosition > bluedot.left) {
    anime({
      targets: ".arrow-forward",
      duration: 1,
      delay: 0,
      easing:'linear',
      filter:
        "invert(9%) sepia(99%) saturate(5818%) hue-rotate(245deg) brightness(103%) contrast(147%)",
    });
    anime({
      targets:".blue-dot-1-child",
      duration:1000,
      delay:0,
      easing:'linear',
      opacity:1,

    })
  }

  if (scrollPosition > reddot.left) {
    anime({
      targets: ".arrow-forward",
      duration: 1,
      delay: 0,
      easing:'linear',
      filter:
        "invert(25%) sepia(97%) saturate(2059%) hue-rotate(343deg) brightness(97%) contrast(96%)",
    });

    anime({
      targets:".red-dot-child",
      duration:1000,
      delay:0,
      easing:'linear',
      opacity:1,

    })
  }

  if (scrollPosition > yellowdot2.left) {
    anime({
      targets: ".arrow-forward",
      duration: 1,
      delay: 0,
      easing:'linear',
      filter:
        "invert(77%) sepia(100%) saturate(575%) hue-rotate(5deg) brightness(109%) contrast(104%)",
    });

    anime({
      targets:".yellow-dot-2-child",
      duration:1000,
      delay:0,
      easing:'linear',
      opacity:1,

    })
  }

  if (scrollPosition > purpledot2.left) {
    anime({
      targets: ".arrow-forward",
      duration: 1,
      delay: 0,
      easing:'linear',
      filter:
        "invert(15%) sepia(92%) saturate(4015%) hue-rotate(276deg) brightness(100%) contrast(138%)",
    });

    anime({
      targets:".purple-dot-2-child",
      duration:1000,
      delay:0,
      easing:'linear',
      opacity:1,

    })
  }

  if (scrollPosition > bluedot2.left) {
    anime({
      targets: ".arrow-forward",
      duration: 1,
      delay: 0,
      easing:'linear',
      filter:
        "invert(9%) sepia(99%) saturate(5818%) hue-rotate(245deg) brightness(103%) contrast(147%)",
    });
    anime({
      targets:".blue-dot-2-child",
      duration:1000,
      delay:0,
      easing:'linear',
      opacity:1,

    })
  }

  
  if (scrollPosition > slide5.left) {
    isArrowOpaque = true;
    anime({
      targets: ".arrow-forward",
      duration: 1,
      delay: 0,
      easing:'linear',
      opacity:0,
    });
  }
});



// const   scroller = new FTScroller(wrapper, {
// 	scrollbars: false,
// 	scrollingX: false
// });

window.addEventListener('keydown', (e) => {
  if (e.key == 'ArrowRight') {
    wrapper.scrollTop += 60;
  }

  if (e.key == 'ArrowLeft') {
    wrapper.scrollTop -= 60;
  }
});
