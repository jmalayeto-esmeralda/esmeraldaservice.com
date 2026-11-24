const practiceMenu = document.querySelector('.practice-header .practice-menu');

if (practiceMenu) {
  const summary = practiceMenu.querySelector('summary');

  document.addEventListener('click', (event) => {
    if (!practiceMenu.open) return;
    if (!practiceMenu.contains(event.target) || event.target.closest('.practice-menu-links a')) {
      practiceMenu.open = false;
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && practiceMenu.open) {
      practiceMenu.open = false;
      summary.focus();
    }
  });
}
