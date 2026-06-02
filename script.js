const items = document.querySelectorAll('section, .step-card, .method-grid article, .resource-card, .testimonial-grid article, .plan-card');
items.forEach(el => el.classList.add('reveal'));
const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });
items.forEach(el => io.observe(el));
