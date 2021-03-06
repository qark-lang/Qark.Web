function menuBurger() {
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    if ($navbarBurgers.length > 0) {
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {
                const target = el.dataset.target;
                const $target = document.getElementById(target);
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');
            });
        });
    }
}

function animateText() {
    let el = document.getElementById('animatedText');
    if (el) {
        new TypeIt("#animatedText", {
            strings: JSON.parse(el.getAttribute('data-description')),
            nextStringDelay: [2000, 100],
            loop: true,
            breakLines: false
        }).go();
    }
}

function initSearch() {
    document.getElementById('search').onkeydown = function (event) {
        if (event.keyCode === 13) {
            let el = document.getElementById('search');
            let q = el.value.trim();
            if (q) {
                window.open('https://google.com/search?q=' + q + ' site:qark.dev');
            }
        }
    };
    document.addEventListener('keyup', function (event) {
        if (event.key === '/') {
            document.getElementById('search').focus();
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    menuBurger();
    animateText();
    initSearch();
});