gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

let smoother = ScrollSmoother.create({
  smooth: 2,
  speed: 0.2,
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

const coverContainerEl = document.querySelector(".cover-container");
const coverImgEl = document.querySelector(".cover-img");

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
        coverImgEl.style.filter = `blur(${self.progress * 5}px)`;
        if (self.progress > 0.6) {
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
  },
});
nextTl.add([
  gsap.to(".ershinta", {
    scale: 1.4,
  }),
  gsap.to(".hero-text .animate", {
    opacity: 1.2,
    display: "block",
    transformOrigin: "center center",
    ease: "power1.inOut",
  }),
  gsap.to(".hero-text .lbl-undangan", {
    y: 20,
    ease: "power1.inOut",
  }),
  gsap.to(".hero-text .lbl-brides", {
    y: -20,
    ease: "power1.inOut",
  }),
  gsap.to(".hero-text .lbl-date", {
    y: -20,
    ease: "power1.inOut",
  }),
]);

const profileTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".section .profile",
    start: "center center",
    end: "+=300",
    scrub: 1,
    markers: true,
  },
});
profileTl.add([
  gsap.to(".profile .bismillah", {
    opacity: 1,
    y: -20,
  }),
  gsap.to(".profile .assalamualaikum", {
    opacity: 1,
    y: -20,
  }),
  gsap.to(".profile .greeting", {
    opacity: 1,
    y: -20,
  }),

  gsap.to(".profile .profile-name p", {
    opacity: 1,
    y: -20,
  }),
]);

document.querySelector(".scroll-to").addEventListener("click", function () {
  gsap.to(window, { duration: 0.8, scrollTo: 1500 });
});
