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

function animateSubtitle() {
    let el = document.getElementById('animatedText');
    if (el) {
        var typewriter = new Typewriter(el, {
            strings: JSON.parse(el.getAttribute('data-strings')),
            autoStart: true,
            loop: true
        });
    }
}

function bindSearch() {
    document.getElementById('search').onkeydown = function (event) {
        if (event.keyCode === 13) {
            let el = document.getElementById('search');
            let q = el.value.trim();
            if (q)
                window.open('https://google.com/search?q=' + q + ' site:ion-lang.org');
        }
    };
}

document.addEventListener('DOMContentLoaded', () => {
    menuBurger();
    animateSubtitle();
    bindSearch();
});