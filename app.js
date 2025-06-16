gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

let smoother = ScrollSmoother.create({
  smooth: 2,
  effects: true,
  normalizeScroll: true,
});

document.querySelector(".click-to-open").addEventListener("click", function () {
  gsap.to(window, { duration: 1, scrollTo: 1500 });
});

gsap.timeline().to(".click-to-open", {
  duration: 1.2,
  y: -4,
  repeat: -1,
  yoyo: true,
});

const coverContainerEl = document.querySelector(".cover-container");
const coverImgEl = document.querySelector(".cover-img");

const openTl = gsap.timeline([
  gsap.to(".cover-img", {
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
        coverImgEl.style.filter = `blur(${self.progress * 5}px)`;
        if (self.progress > 0.8) {
          coverContainerEl.style.display = "none";
        } else {
          coverContainerEl.style.display = "block";
        }
      },
      onLeave: () => {
        coverContainerEl.style.display = "none";
      },
      onEnterBack: () => {
        coverContainerEl.style.display = "block";
      },
    },
  }),
  gsap.to(
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
  ),
  gsap.to(".click-to-open", {
    opacity: -1,
    scrollTrigger: {
      start: "top top",
      end: "+=50%",
      scrub: true,
      pin: true,
    },
  }),
]);

const navTl = gsap.timeline({ paused: true }).to("nav", {
  opacity: 1,
  y: -20,
  duration: 0.2,
  display: "block",
});

const nextTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".section.hero",
    start: "center center",
    end: "+=150%",
    scrub: true,
    onLeave: function () {
      navTl.play();
      ScrollTrigger.refresh();
    },
    onEnterBack: function () {
      navTl.reverse();
      ScrollTrigger.refresh();
    },
  },
});
nextTl.add([
  gsap.to(".hero .hero-text", {
    y: -40,
    ease: "power1.inOut",
  }),
  gsap.to(".hero .ershinta", {
    scale: 1.5,
    duration: 0.8,
  }),
  gsap.to(".hero .dekor-1", {
    scale: 1.5,
    x: -60,
    y: -100,
    duration: 0.8,
    ease: "power1.inOut",
  }),
  gsap.to(".hero .dekor-2", {
    scale: 1.5,
    x: 50,
    y: 100,
    duration: 0.5,
    ease: "power1.inOut",
  }),
  gsap.from(".hero .from-top", {
    opacity: 0,
    y: -20,
    ease: "power1.inOut",
    display: "block",
    transformOrigin: "center center",
  }),
  gsap.from(".hero .from-bottom", {
    opacity: 0,
    y: 20,
    ease: "power1.inOut",
    display: "block",
    transformOrigin: "center center",
  }),
]);

const profileTl = gsap.timeline({
  scrollTrigger: {
    start: "center 80%",
    end: "+=800",
    scrub: 1,
  },
});
profileTl.add([
  gsap.from(".profile .from-bottom", {
    opacity: 0,
    y: 60,
  }),
  gsap.from(".profile .from-left", {
    opacity: 0,
    x: -60,
  }),
  gsap.from(".profile .from-right", {
    opacity: 0,
    x: 60,
  }),
]);

const eventTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".event",
    start: "center 80%",
    end: "+=500",
    scrub: 1,
    markers: true,
  },
});
eventTl.add([
  gsap.from(".event .event-dekor", {
    opacity: 0,
    y: -60,
  }),
  gsap.from(".event .card", {
    opacity: 0,
    y: 60,
  }),
]);
