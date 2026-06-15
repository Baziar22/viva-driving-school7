/* =========================================================
   VIVA Driving School GB — script.js
   - Sticky header on scroll
   - Mobile nav toggle
   - Contact form handling (client-side demo)
   - Footer year
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  // ---- Sticky header ----
  const header = document.querySelector('.site-header');
  const onScroll = () => {
    if (window.scrollY > 24) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // ---- Mobile nav toggle ----
  const navToggle = document.getElementById('nav-toggle');
  const mainNav = document.getElementById('main-nav');

  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    navToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  });

  // Close mobile nav when a link is tapped
  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (mainNav.classList.contains('open')) {
        mainNav.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Open menu');
      }
    });
  });

  // ---- Contact form (client-side only — wire up to your backend / form service) ----
  const form = document.getElementById('contact-form');
  const note = document.getElementById('form-note');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    const message = form.message.value.trim();

    if (!name || !phone || !message) {
      note.textContent = 'Please fill in every field so we can get back to you.';
      note.style.color = '#ff8a8a';
      return;
    }

    // Demo confirmation — replace with a fetch() call to your form
    // handling endpoint (e.g. Formspree, Netlify Forms, or your own API).
    note.textContent = `Thanks ${name}! Your message has been noted — we'll be in touch on ${phone} shortly.`;
    note.style.color = '';
    form.reset();
  });

  // ---- Footer year ----
  document.getElementById('year').textContent = new Date().getFullYear();
});
