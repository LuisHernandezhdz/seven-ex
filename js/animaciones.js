const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    const el = entry.target;

    if (el.classList.contains("hero-title")) {
      Animacion1(el);
    }

    if (el.classList.contains("hero-subtitle")) {
      Animacion2(el);
    }

    if (el.classList.contains("split")) {
      animacion3(el);
      animacion4(el);
    }

    if (el.classList.contains("evento")) {
      animacion5(el);
    }

    if (el.classList.contains("banner-subtitle")) {
      animacion6(el);
    }

    observer.unobserve(el); // solo se anima una vez
  });
}, { threshold: 0.3 });

// Observa todos los elementos animables
document.querySelectorAll(".hero-title, .hero-subtitle, .split, .evento, .banner-subtitle")
  .forEach(el => observer.observe(el));


// -------- Animaciones --------

function Animacion1(el){
  gsap.fromTo(el, { y:20, opacity:0 }, { y:0, opacity:1, duration:2.5, ease:"power4.out" });
}

function Animacion2(el){
  gsap.fromTo(el, { y:20, opacity:0 }, { y:0, opacity:1, duration:2.3, delay:0.4, ease:"power3.out" });
}

function animacion3(el){
  gsap.registerPlugin(SplitText);
  let split = SplitText.create(el, { type: "words, chars" });
  gsap.fromTo(split.chars, { y:20, autoAlpha:0 }, { y:0, autoAlpha:1, duration:0.9, stagger:0.005, ease:"power4.out" });
}

function animacion4(el){
  gsap.fromTo(el, { x:-20, opacity:0 }, { x:0, opacity:1, duration:3, ease:"power3.out" });
}

function animacion5(el){
  gsap.registerPlugin(SplitText);
  let eventos = SplitText.create(el, { type: "chars" });
  gsap.fromTo(eventos.chars, { y:20, opacity:0, scale:0.8 }, { y:0, opacity:1, scale:1, duration:1, ease:"back.out(1.7)", stagger:{ amount:0.6 } });
}

function animacion6(el){
  gsap.fromTo(el, { y:25, opacity:0 }, { y:0, opacity:1, duration:0.6, delay:0.7, ease:"power2.out" });
}