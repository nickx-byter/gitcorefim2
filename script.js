// ============================================
// CÓDIGO COMPARTILHADO ENTRE TODAS AS PÁGINAS
// ============================================

// MENU MOBILE (hambúrguer)
const menuToggleBtn = document.getElementById('menuToggle');
const mainNavEl = document.getElementById('mainNav');

if (menuToggleBtn && mainNavEl) {
  menuToggleBtn.addEventListener('click', () => {
    mainNavEl.classList.toggle('aberto');
  });
}

// ANIMAÇÃO FADE-IN AO ROLAR A PÁGINA
const fadeInEls = document.querySelectorAll('.fade-in');

function revelarFadeIn() {
  fadeInEls.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 80) {
      el.classList.add('show');
    }
  });
}

window.addEventListener('scroll', revelarFadeIn);
window.addEventListener('load', revelarFadeIn);
revelarFadeIn();
