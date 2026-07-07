const items = document.querySelectorAll('section, .step-card, .method-grid article, .resource-card, .testimonial-grid article, .plan-card');
items.forEach(el => el.classList.add('reveal'));
const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });
items.forEach(el => io.observe(el));

// Planos Tabs Logic
const tabBtns = Array.from(document.querySelectorAll('.tab-btn'));
const planCards = Array.from(document.querySelectorAll('.plan-card'));
const prevBtn = document.getElementById('prev-plan');
const nextBtn = document.getElementById('next-plan');

let currentTabIndex = tabBtns.findIndex(btn => btn.classList.contains('active'));
if (currentTabIndex === -1) currentTabIndex = 1;

function updateTabs(index) {
  tabBtns.forEach(b => b.classList.remove('active'));
  planCards.forEach(c => c.classList.remove('active'));
  
  tabBtns[index].classList.add('active');
  const targetId = tabBtns[index].getAttribute('data-target');
  document.getElementById(targetId).classList.add('active');
}

tabBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    currentTabIndex = index;
    updateTabs(currentTabIndex);
  });
});

if (prevBtn) {
  prevBtn.addEventListener('click', () => {
    currentTabIndex = (currentTabIndex - 1 + tabBtns.length) % tabBtns.length;
    updateTabs(currentTabIndex);
  });
}

if (nextBtn) {
  nextBtn.addEventListener('click', () => {
    currentTabIndex = (currentTabIndex + 1) % tabBtns.length;
    updateTabs(currentTabIndex);
  });
}

// Preloader Logic
document.addEventListener("DOMContentLoaded", () => {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    setTimeout(() => {
      preloader.classList.add("hidden");
      document.body.classList.remove("no-scroll");
    }, 3500);
  }
});
