
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
});

if (ScrollTrigger.isTouch !==1) {
  ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
    smooth: 1.6,
    effects: true
  })
}

gsap.fromTo(".discount", { x: 0, },
  {
    x: 100,
    opacity: 0,
    scrollTrigger: {
      trigger: ".discount",
      start: "-50px",
      scrub: true,
    }
  })


gsap.to('.carousel', {
  x: 100,
  opacity: 0,
  scrollTrigger: {
    trigger: '.carousel',
    start: '-50px',
    scrub: true
  }
}
)

gsap.to('.examples', {
  y: -100,
  opacity: 0,
  scrollTrigger: {
    trigger: '.examples',
    start: '-70px',
    scrub: true
  }
}
)


gsap.to('.info', {
  x: -100,
  opacity: 0,
  scrollTrigger: {
    trigger: '.examples',
    start: '-100px',
    scrub: true
  }
}
)


gsap.to(".winner", {
  x: 100,
  opacity: 0,
  scrollTrigger: {
    trigger: ".winner",
    start: "50px",
    end: "200px",
    scrub: true
  }
})


gsap.fromTo(".service", { backgroundColor: 'none' },
  {
    backgroundColor: 'rgb(84, 84, 84)',
    duration: 3,
    scrollTrigger: {
      trigger: ".services__container",
      start: "-400px",
      scrub: true
    }

  })


gsap.fromTo(".user__card__1, .user__card__3", { opacity: 1 },
  {
    x: -200,
    duration: 3,
    opacity: 1,
    scrollTrigger: {
      trigger: ".short__q__container",
      start: '-300px',
      scrub: true
    }
  })

gsap.fromTo(".short__q__container", { opacity: 0, y: -200, backgroundColor: 'none', boxShadow: 'none',  },
  {
    backgroundColor: 'rgba(94, 112, 31, 0.1)',
    boxShadow:"0px 0px 24px 6px #cecf77",
    y: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: ".short__q__container",
      start: '-200px',
      end: '170px',
      scrub: true
    }
  })

let dignityL = gsap.utils.toArray('.dignity-1-2-3 .dignity')

dignityL.forEach(dignity => {
  gsap.fromTo(dignity, { x: -150, opacity: 0 }, {
    x: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: dignity,
      start: '-450px',
      end: '50px',
      scrub: true
    }
  })
})

let dignityR = gsap.utils.toArray('.dignity-4-5-6 .dignity')

dignityR.forEach(dignity => {
  gsap.fromTo(dignity, { x: 150, opacity: 0 }, {
    x: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: dignity,
      start: '-450px',
      end: '50px',
      scrub: true
    }
  })
})

gsap.fromTo('.dignity__head', { opacity: 0, y: 300 }, {
  opacity: 1,
  y: 0,
  scrollTrigger: {
    trigger: '.dignity__head',
    start: '-800px',
    end: '-300px',
    scrub: true
  }
})


