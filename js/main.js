/* ============================================================
   PLASTIBRAS — MAIN JAVASCRIPT
   Animations, Interactions, Canvas, Cursor
   ============================================================ */

'use strict';

// ─── PAGE LOADER ───────────────────────────────────────────
window.addEventListener('load', () => {
  const loader = document.getElementById('page-loader');
  if (loader) {
    setTimeout(() => {
      loader.classList.add('hidden');
      document.body.style.overflow = '';
    }, 1300);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  document.body.style.overflow = 'hidden';

  // ─── CUSTOM CURSOR ─────────────────────────────────────
  const dot = document.querySelector('.cursor-dot');
  const ring = document.querySelector('.cursor-ring');
  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;
  let isHovering = false;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (dot) {
      dot.style.left = mouseX + 'px';
      dot.style.top = mouseY + 'px';
    }
  });

  function animateCursor() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    if (ring) {
      ring.style.left = ringX + 'px';
      ring.style.top = ringY + 'px';
    }
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  document.querySelectorAll('a, button, .service-card, .blog-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
      if (ring) ring.classList.add('hovering');
    });
    el.addEventListener('mouseleave', () => {
      if (ring) ring.classList.remove('hovering');
    });
  });

  // ─── NAVBAR SCROLL BEHAVIOR ────────────────────────────
  const nav = document.querySelector('.nav');
  const handleNavScroll = () => {
    if (window.scrollY > 60) {
      nav?.classList.add('scrolled');
    } else {
      nav?.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();

  // ─── MOBILE MENU ───────────────────────────────────────
  const hamburger = document.querySelector('.nav-hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileClose = document.querySelector('.mobile-close');

  hamburger?.addEventListener('click', () => {
    mobileMenu?.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
  mobileClose?.addEventListener('click', () => {
    mobileMenu?.classList.remove('open');
    document.body.style.overflow = '';
  });
  mobileMenu?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // ─── HERO CANVAS — SINE/COSINE DOT GRID ────────────────
  const canvas = document.getElementById('hero-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    const SPACING = 52;   // distance between base grid points
    const AMP     = 22;   // max displacement in px
    const SPEED   = 0.010;
    let W, H, t = 0;

    const heroSection = canvas.closest('section') || canvas.parentElement;

    function resize() {
      W = canvas.width  = heroSection.offsetWidth;
      H = canvas.height = heroSection.offsetHeight;
    }

    function animate() {
      ctx.clearRect(0, 0, W, H);
      t += SPEED;

      const cols = Math.ceil(W / SPACING) + 2;
      const rows = Math.ceil(H / SPACING) + 2;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const bx = i * SPACING;
          const by = j * SPACING;

          // Each dot ripples with its own phase derived from grid position
          const phase = i * 0.45 + j * 0.35;
          const x = bx + Math.sin(t       + phase)         * AMP;
          const y = by + Math.cos(t * 0.8 + phase * 1.3)   * AMP;

          // Brightness wave: dots pulse subtly over time
          const wave  = (Math.sin(t * 0.6 + i * 0.3 + j * 0.5) + 1) / 2;
          const alpha = 0.10 + wave * 0.20;
          const r     = 1.5 + wave * 0.8;

          // Scatter a few green dots among the navy ones
          const isGreen = (i + j) % 7 === 0;
          const color   = isGreen
            ? `rgba(46,158,79,${alpha})`
            : `rgba(30,58,122,${alpha})`;

          ctx.beginPath();
          ctx.arc(x, y, r, 0, Math.PI * 2);
          ctx.fillStyle = color;
          ctx.fill();
        }
      }

      requestAnimationFrame(animate);
    }

    const ro = new ResizeObserver(resize);
    ro.observe(heroSection);
    resize();
    animate();
  }

  // ─── SCROLL REVEAL ─────────────────────────────────────
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12 });
  revealElements.forEach(el => observer.observe(el));

  // ─── COUNTER ANIMATION ─────────────────────────────────
  function animateCounter(el) {
    const target = parseFloat(el.dataset.target);
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    const isFloat = String(target).includes('.');
    const duration = 2000;
    const start = performance.now();

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = isFloat
        ? (target * eased).toFixed(1)
        : Math.floor(target * eased);
      el.textContent = prefix + current + suffix;
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.counted) {
        entry.target.dataset.counted = 'true';
        animateCounter(entry.target);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('[data-counter]').forEach(el => counterObserver.observe(el));

  // ─── BLOG FILTER ───────────────────────────────────────
  const filterBtns = document.querySelectorAll('.blog-filter');
  const blogCards = document.querySelectorAll('.blog-card[data-cat]');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.cat;
      blogCards.forEach(card => {
        const match = cat === 'all' || card.dataset.cat === cat;
        card.style.display = match ? '' : 'none';
        card.style.opacity = match ? '1' : '0';
      });
    });
  });

  // ─── FORM SUBMISSION ───────────────────────────────────
  const contactForm = document.querySelector('.contact-form');
  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('[type="submit"]');
    const orig = btn.textContent;
    btn.textContent = 'Enviando...';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = '✓ Mensagem Enviada!';
      btn.style.background = '#25D366';
      contactForm.reset();
      setTimeout(() => {
        btn.textContent = orig;
        btn.disabled = false;
        btn.style.background = '';
      }, 3500);
    }, 1200);
  });

  // ─── ACTIVE NAV LINK ───────────────────────────────────
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.includes(currentPath) && currentPath !== '') {
      link.classList.add('active');
    }
    if (currentPath === '' || currentPath === 'index.html') {
      const homeLinks = document.querySelectorAll('.nav-link[href="index.html"], .nav-link[href="./"]');
      homeLinks.forEach(l => l.classList.add('active'));
    }
  });

  // ─── MAGNETIC BUTTONS ──────────────────────────────────
  document.querySelectorAll('.btn-primary, .btn-orange').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });

  // ─── PARALLAX HERO IMAGE ───────────────────────────────
  const heroImg = document.querySelector('.hero-img-parallax');
  if (heroImg) {
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      heroImg.style.transform = `translateY(${y * 0.2}px)`;
    }, { passive: true });
  }

  // ─── TABLE HORIZONTAL SCROLL HINT ──────────────────────
  const tableWrap = document.querySelector('.table-scroll-wrap');
  if (tableWrap && tableWrap.scrollWidth > tableWrap.clientWidth) {
    const hint = document.querySelector('.table-scroll-hint');
    if (hint) hint.style.display = 'block';
  }

  // ─── SMOOTH ANCHOR SCROLL ──────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href');
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ─── STAGGER CHILDREN ──────────────────────────────────
  document.querySelectorAll('[data-stagger]').forEach(parent => {
    const children = parent.children;
    Array.from(children).forEach((child, i) => {
      child.setAttribute('data-delay', String(i + 1));
      child.classList.add('reveal');
    });
  });

  // Re-observe after stagger setup
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el));

  console.log('%cPlastibras Indústria de Plásticos © 1995',
    'color: #00B4D8; font-family: Syne, sans-serif; font-size: 14px; font-weight: bold;');
});
