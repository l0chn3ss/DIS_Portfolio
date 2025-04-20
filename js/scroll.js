gsap.registerPlugin(ScrollTrigger);

gsap.from(".project-card", {
  scrollTrigger: ".projects",
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.2
});
