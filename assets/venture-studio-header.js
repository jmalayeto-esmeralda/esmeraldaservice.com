const studioNav = document.querySelector('.venture-nav');
const studioMenuButton = studioNav.querySelector('.nav-toggle');
const studioMenuLinks = document.getElementById(studioMenuButton.getAttribute('aria-controls'));

function isStudioMenuOpen() {
  return studioMenuButton.getAttribute('aria-expanded') === 'true';
}

function closeStudioMenu() {
  studioMenuButton.setAttribute('aria-expanded', 'false');
}

studioMenuButton.addEventListener('click', () => {
  studioMenuButton.setAttribute('aria-expanded', String(!isStudioMenuOpen()));
});

studioMenuLinks.addEventListener('click', (event) => {
  if (event.target.closest('a')) closeStudioMenu();
});

document.addEventListener('click', (event) => {
  if (isStudioMenuOpen() && !studioNav.contains(event.target)) closeStudioMenu();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && isStudioMenuOpen()) {
    closeStudioMenu();
    studioMenuButton.focus();
  }
});

window.matchMedia('(max-width: 767px)').addEventListener('change', closeStudioMenu);
