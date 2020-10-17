AOS.init();

let marker = document.getElementById("marker");
let item = document.querySelectorAll("nav ul li a");
let nav = document.querySelector("header nav");
let toggleBtn = document.querySelector("label")
let toggler = document.querySelector(".sci span");
let action = document.querySelector(".sci");

toggler.addEventListener("click", function () {
    action.classList.toggle("active");
})

function indicator(e) {
    marker.style.left = e.offsetLeft + "px";
    marker.style.width = e.offsetWidth + "px";
}

item.forEach(link => {
    link.addEventListener("mousemove", (e) => {
        indicator(e.target)
    })
})

window.addEventListener("scroll", function () {
    nav.classList.toggle("active", window.scrollY > 50 && window.scrollY < 5470);
})

toggleBtn.addEventListener("click", function () {
    toggleBtn.classList.toggle("active");
    marker.parentElement.classList.toggle("activated");
})

var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 1,
        slideShadows: true,
    },
    loop: true,
    autoplay: {
        delay: 2000,
        disableonInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    keyboard: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
    },
});