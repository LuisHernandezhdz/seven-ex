
  gsap.from(".hero-title", {
    y: 80,
    opacity: 0,
    duration: 2.5,
    ease: "power4.out"
  });

  gsap.from(".hero-subtitle", {
    y: 40,
    opacity: 0,
    duration: 2.3,
    delay: 0.4,
    ease: "power3.out"
  });

  gsap.registerPlugin(SplitText);

  let split = SplitText.create(".split", { 
    type: "words, chars" 
  });

  gsap.from(split.chars, {
    duration: 0.9,
    y: 100,
    autoAlpha: 0,
    stagger: 0.005 ,
    ease: "power4.out"
  });

gsap.from(".split", {
  x: -60,
  opacity: 0,
  duration: 3,
  ease: "power3.out"
});


gsap.registerPlugin(SplitText);

let eventos = SplitText.create(".evento", { type: "chars" });

gsap.from(eventos.chars, {
  y: 100,
  opacity: 0,
  scale: 0.8,
  stagger: {
    amount: 0.6
  },
  duration: 1,
  ease: "back.out(1.7)"
});

gsap.from(".banner-subtitle", {
  y: 25,
  opacity: 0,
  duration: 0.6,
  delay: 0.7,
  ease: "power2.out"
});