// MENU MOBILE
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

if(toggle){
  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}

// BOTÃO VOLTAR AO TOPO
const topBtn = document.getElementById("topBtn");

window.onscroll = function(){
  if(document.documentElement.scrollTop > 200){
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

if(topBtn){
  topBtn.onclick = function(){
    window.scrollTo({top:0, behavior:"smooth"});
  }
}

// ANIMAÇÃO AO SCROLL
const elements = document.querySelectorAll(".card, .hero-text");

function showOnScroll(){
  elements.forEach(el => {
    const pos = el.getBoundingClientRect().top;
    const screen = window.innerHeight;

    if(pos < screen - 100){
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", showOnScroll);
showOnScroll();
const infoBox = document.getElementById("info-box");

document.querySelector(".tela-peca").addEventListener("mouseenter", () => {
  infoBox.innerHTML = "📱 <b>Tela:</b> contém materiais recicláveis e tóxicos.";
});

document.querySelector(".camera").addEventListener("mouseenter", () => {
  infoBox.innerHTML = "📸 <b>Câmera:</b> componentes reutilizáveis.";
});

document.querySelector(".placa").addEventListener("mouseenter", () => {
  infoBox.innerHTML = "🔌 <b>Placa:</b> ouro, cobre e metais valiosos.";
});

document.querySelector(".bateria").addEventListener("mouseenter", () => {
  infoBox.innerHTML = "🔋 <b>Bateria:</b> nunca descarte no lixo comum.";
});