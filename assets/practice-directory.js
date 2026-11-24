const practiceFilter = document.querySelector('[data-practice-filter]');
const practiceGrid = document.querySelector('[data-practice-grid]');

if (practiceFilter && practiceGrid) {
  const cards = Array.from(practiceGrid.children);
  const buttons = Array.from(practiceFilter.querySelectorAll('button'));
  const result = practiceFilter.querySelector('[role="status"]');
  const spanish = document.documentElement.lang === 'es';

  function showCategory(category) {
    let count = 0;
    for (const card of cards) {
      const matches = category === 'all' || card.dataset.category.split(' ').includes(category);
      card.hidden = !matches;
      if (matches) count += 1;
    }
    for (const button of buttons) {
      button.setAttribute('aria-pressed', String(button.dataset.filter === category));
    }
    result.textContent = spanish ? `${count} áreas` : `${count} practice areas`;
  }

  for (const button of buttons) {
    button.addEventListener('click', () => showCategory(button.dataset.filter));
  }
  practiceFilter.hidden = false;
  showCategory('all');
}

const mobileMenuToggle = document.querySelector('#nav .burger');
const mobileMenu = document.querySelector('#navLinks');
if (mobileMenuToggle && mobileMenu) {
  const updateExpanded = () => {
    const isOpen = mobileMenu.style.display === 'flex';
    if (!isOpen) mobileMenu.removeAttribute('style');
    mobileMenuToggle.setAttribute('aria-expanded', String(isOpen));
  };
  mobileMenuToggle.addEventListener('click', updateExpanded);
  mobileMenu.addEventListener('click', updateExpanded);
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && mobileMenuToggle.getAttribute('aria-expanded') === 'true') {
      mobileMenuToggle.click();
      mobileMenuToggle.focus();
    }
  });
  window.matchMedia('(min-width: 768px)').addEventListener('change', (event) => {
    if (event.matches && mobileMenuToggle.getAttribute('aria-expanded') === 'true') mobileMenuToggle.click();
  });
}
