const headerLink = document.querySelectorAll('.header__link');

headerLink.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href'))
            .scrollIntoView({
                behavior: 'smooth'
            });
    });
});

