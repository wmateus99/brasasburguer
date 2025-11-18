let swiper;

// Array de imagens de fundo
const backgrounds = [
    "/assets/img/cardapio_black.png",
    "/assets/img/whatsapp_black.png",
    "/assets/img/localizacao_black.png",
    "/assets/img/avaliacao_black.png",
];

// Função para alterar o fundo suavemente, só se for tela de celular
function changeBackground(index) {
    const screenWidth = window.innerWidth;
    const bgLayer = document.getElementById("background-layer");
    if (!bgLayer) return;

    // Só aplica se for tela <= 550px
    if (screenWidth <= 549) {
        const bg = backgrounds[index] || "";
        bgLayer.style.opacity = "0";
        setTimeout(() => {
            bgLayer.style.backgroundImage = bg ? `url('${bg}')` : "";
            bgLayer.style.opacity = "1";
        }, 350);
    } else {
        // Se aumentar a tela, remove imagem
        bgLayer.style.backgroundImage = "";
    }
}

function initSwiper() {
    const screenWidth = window.innerWidth;
    const swiperEl = document.querySelector(".mySwiper");

    if (screenWidth < 550) {
        if (!swiper) {
            swiperEl.classList.remove("not-slider");
            swiper = new Swiper(".mySwiper", {
                effect: "coverflow",
                grabCursor: true,
                centeredSlides: true,
                slidesPerView: 1.4,
                spaceBetween: 30,
                coverflowEffect: {
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 1.5,
                    scale: 0.85,
                    slideShadows: false
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true
                },
                navigation: {
                    nextEl: ".button-next",
                    prevEl: ".button-prev"
                }
            });

            // Imagem inicial
            changeBackground(swiper.activeIndex);

            swiper.on("slideChange", () => {
                changeBackground(swiper.activeIndex);
            });
        } else {
            // Sempre checa se o fundo está correto ao redimensionar
            changeBackground(swiper.activeIndex);
        }
    } else {
        if (swiper) {
            swiper.destroy(true, true);
            swiper = null;
        }
        swiperEl.classList.add("not-slider");
        // Remove imagem de fundo quando não for mobile
        changeBackground(0);
    }
}

window.addEventListener("load", initSwiper);
window.addEventListener("resize", initSwiper);