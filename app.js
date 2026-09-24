// Navegación simple entre pantallas (tabs) — sin backend, todo mock.
document.addEventListener('DOMContentLoaded', () => {
  const screens = document.querySelectorAll('.screen');
  const navItems = document.querySelectorAll('.nav-item');
  const tabButtons = document.querySelectorAll('[data-tab]');

  function goToTab(tab) {
    screens.forEach(s => s.classList.toggle('active', s.id === 'screen-' + tab));
    navItems.forEach(n => n.classList.toggle('active', n.dataset.tab === tab));
    document.getElementById('app').scrollTo?.(0, 0);
    window.scrollTo(0, 0);
  }

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => goToTab(btn.dataset.tab));
  });

  // Botones sin función todavía (a la espera de convenios / backend).
  document.querySelectorAll('[data-noop]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      btn.animate(
        [{ transform: 'scale(1)' }, { transform: 'scale(0.96)' }, { transform: 'scale(1)' }],
        { duration: 140 }
      );
    });
  });
});
