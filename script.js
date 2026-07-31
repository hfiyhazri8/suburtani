// SUBURTANI — shared interactions

document.addEventListener('DOMContentLoaded', () => {
  // mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
      toggle.textContent = links.classList.contains('open') ? 'Tutup' : 'Menu';
    });
  }

  // testimonial filter tabs (testimoni.html)
  const filterBtns = document.querySelectorAll('.filter-btn');
  const testiCards = document.querySelectorAll('[data-crop]');
  if (filterBtns.length && testiCards.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const crop = btn.dataset.filter;
        testiCards.forEach(card => {
          const show = crop === 'semua' || card.dataset.crop === crop;
          card.style.display = show ? '' : 'none';
        });
      });
    });
  }

  // FAQ accordion (hubungi.html)
  document.querySelectorAll('.accordion-q').forEach(q => {
    q.addEventListener('click', () => {
      const item = q.closest('.accordion-item');
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });

  // contact form — front-end only mock submit
  const form = document.querySelector('#order-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const msg = document.querySelector('#form-success');
      msg.style.display = 'block';
      form.reset();
    });
  }
});
