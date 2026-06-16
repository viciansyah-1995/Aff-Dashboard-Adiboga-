document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('[data-nav]');
  const current = window.location.pathname.split('/').pop() || 'index.html';
  links.forEach(link => {
    const target = link.getAttribute('href');
    if (target === current) {
      link.classList.add('active');
    }
  });
});
