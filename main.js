let swiper;

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

            // Retirado: changeBackground(swiper.activeIndex);

            swiper.on("slideChange", () => {
                // Retirado: changeBackground(swiper.activeIndex);
            });
        } else {
            // Retirado: changeBackground(swiper.activeIndex);
        }
    } else {
        if (swiper) {
            swiper.destroy(true, true);
            swiper = null;
        }
        swiperEl.classList.add("not-slider");

        // Retirado: changeBackground(0);
    }
}

window.addEventListener("load", initSwiper);
window.addEventListener("resize", initSwiper);
