const introHeight = document.getElementById('intro').offsetHeight;
const topButton = document.getElementById('top-button');
const $topButton = $('#top-button');

topButton.addEventListener('click', waveOnLoad);

window.addEventListener(
    'scroll',
    function () {
        if (window.scrollY > introHeight) {
            $topButton.fadeIn();
        } else {
            $topButton.fadeOut();
        }
    },
    false
);

topButton.addEventListener('click', () => {
    $('html, body').animate({scrollTop: 0}, 500);
});