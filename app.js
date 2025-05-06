gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let smoother = ScrollSmoother.create({
  smooth: 2,
  effects: true,
  normalizeScroll: true,
});

gsap.timeline().to(".scroll-to", {
  duration: 1.2,
  y: -4,
  repeat: -1,
  yoyo: true,
});

ScrollTrigger.refresh();

const openTl = gsap.timeline();

openTl
  .to(".cover-img", {
    scale: 2,
    z: 350,
    transformOrigin: "center center",
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: ".wrapper",
      start: "top top",
      end: "+=200%",
      pin: true,
      scrub: true,
      onUpdate: (self) => {
        document.querySelector(".cover-img").style.filter = `blur(${
          self.progress * 5
        }px)`;
      },
      onLeave: () => {
        document.querySelector(".image-container").style.display = "none";
      },
      onEnterBack: () => {
        document.querySelector(".image-container").style.display = "block";
      },
    },
  })
  .to(
    ".section.hero",
    {
      scale: 1.4,
      transformOrigin: "center center",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".cover-img",
        start: "top top",
        end: "+=200%",
        scrub: true,
      },
    },
    "<"
  )
  .to(".scroll-to", {
    opacity: -1,
    scrollTrigger: {
      start: "top top",
      end: "+=50%",
      scrub: true,
      pin: true,
    },
  });

const nextTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".section.hero",
    start: "center center",
    end: "+=150%",
    scrub: true,
    markers: true,
  },
});
nextTl.add([
  gsap.to(".initial-name", {
    opacity: 0,
    scale: 1.4,
    display: "none",
  }),
  gsap.to(".brides-name", {
    opacity: 1,
    display: "block",
    transformOrigin: "center center",
    ease: "power1.inOut",
  }),
  gsap.to(".brides-name .two-of-us", {
    y: 20,
    opacity: 1,
    scale: 1.1,
    transformOrigin: "center center",
    ease: "power1.inOut",
  }),
  gsap.to(".brides-name .top", {
    y: 40,
    transformOrigin: "center center",
    ease: "power1.inOut",
  }),
  gsap.to(".brides-name .bottom", {
    y: -20,
    transformOrigin: "center center",
    ease: "power1.inOut",
  }),
]);
