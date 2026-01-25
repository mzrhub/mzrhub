/* =============================
   MZR HUB — 3D + Smooth GSAP
   Effects like RESN site
   ============================= */

gsap.registerPlugin(ScrollTrigger);

// -----------------------------
// SMOOTH SCROLL
// -----------------------------
gsap.to(document.documentElement, {
  scrollBehavior: "smooth",
  ease: "power3.out"
});

// -----------------------------
// HERO PARALLAX 3D
// -----------------------------
const hero = document.querySelector("#home");

if (hero) {
  hero.style.perspective = "1000px";
  hero.addEventListener("mousemove", e => {
    const x = (e.clientX / window.innerWidth - 0.5) * 30;
    const y = (e.clientY / window.innerHeight - 0.5) * -30;
    gsap.to("#home .grid > *", {
      rotationY: x,
      rotationX: y,
      transformPerspective: 800,
      ease: "power3.out",
      duration: 0.6
    });
  });
  hero.addEventListener("mouseleave", () => {
    gsap.to("#home .grid > *", { rotation: 0, duration: 0.6, ease: "elastic.out(1, 0.6)" });
  });
}

// -----------------------------
// SECTION REVEAL (SCROLL)
// -----------------------------
gsap.utils.toArray("section").forEach(section => {
  gsap.from(section, {
    opacity: 0,
    y: 80,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: section,
      start: "top 75%",
      once: true
    }
  });
});

// -----------------------------
// PRODUCT CARDS — 3D ON HOVER
// -----------------------------
gsap.utils.toArray(".product-card").forEach(card => {

  card.style.transformStyle = "preserve-3d";
  card.style.backfaceVisibility = "hidden";

  card.addEventListener("mousemove", e => {
    const box = card.getBoundingClientRect();
    const px = (e.clientX - box.left) / box.width;
    const py = (e.clientY - box.top) / box.height;

    const rotateY = (px - 0.5) * 20;
    const rotateX = (py - 0.5) * -20;

    gsap.to(card, {
      rotationY: rotateY,
      rotationX: rotateX,
      scale: 1.05,
      duration: 0.6,
      ease: "power3.out"
    });
  });

  card.addEventListener("mouseleave", () => {
    gsap.to(card, {
      rotationY: 0,
      rotationX: 0,
      scale: 1,
      duration: 0.6,
      ease: "elastic.out(1, 0.6)"
    });
  });
});

// -----------------------------
// BUTTON 3D POP & PRESS
// -----------------------------
gsap.utils.toArray(".btn-whatsapp, a[href*='wa.me']").forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    gsap.to(btn, {
      scale: 1.15,
      boxShadow: "0 15px 25px rgba(16,185,129,0.4)",
      duration: 0.4,
      ease: "power3.out"
    });
  });
  btn.addEventListener("mouseleave", () => {
    gsap.to(btn, { scale: 1, boxShadow: "", duration: 0.4, ease: "power3.out" });
  });
});

  /* ------------------------------
     WHATSAPP NUMBER GLOW
  ------------------------------ */
  const whatsappText = document.getElementById("whatsapp-number");

  if (whatsappText) {
    whatsappText.animate(
      [
        { textShadow: "0 0 0 rgba(255,255,255,0)" },
        { textShadow: "0 0 12px rgba(255,255,255,0.9)" },
        { textShadow: "0 0 0 rgba(255,255,255,0)" }
      ],
      {
        duration: 2500,
        iterations: Infinity
      }
    );
  }

  /* ------------------------------
     FLOATING WHATSAPP SHOCK
  ------------------------------ */
  const floatingBtn = document.querySelector(
    'a.fixed.bottom-6.right-6'
  );

  if (floatingBtn) {
    floatingBtn.animate(
      [
        { boxShadow: "0 0 0 rgba(34,197,94,0.6)" },
        { boxShadow: "0 0 30px rgba(34,197,94,1)" },
        { boxShadow: "0 0 0 rgba(34,197,94,0.6)" }
      ],
      {
        duration: 2000,
        iterations: Infinity
      }
    );

    setInterval(() => {
      floatingBtn.animate(
        [
          { transform: "scale(1)" },
          { transform: "scale(1.2)" },
          { transform: "scale(1)" }
        ],
        { duration: 400 }
      );
    }, 6000);
  }