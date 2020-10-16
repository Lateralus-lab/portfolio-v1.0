const d = new Date();
const hours = d.getHours();
const night = hours >= 19 || hours <= 7;
const checkbox = document.querySelector('input[name=theme]');
const mode = document.querySelector('.dark__mode');
const btn = document.querySelector('.btn');

// Active night mode from 19 to 7
if (night) {
    checkbox.checked = true;
    document.documentElement.setAttribute('data-theme', 'dark');

    btnOnHoverDark();
} else {
    checkbox.checked = false;
    document.documentElement.setAttribute('data-theme', 'light');

    btnLight();
}

// Active night mode on click
checkbox.addEventListener('change', function () {
    if (this.checked) {
        trans()

        document.documentElement.setAttribute('data-theme', 'dark')

        btnOnHoverDark();
    } else {
        trans()

        document.documentElement.setAttribute('data-theme', 'light')

        btnLight();
    }
})

let trans = () => {
    document.documentElement.classList.add('transition');

    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
}

// White btn color on mouse hover for dark mode
function btnOnHoverDark() {
    btn.style.color = '#fff';

    btn.addEventListener('mouseover', (e) => {
        e.preventDefault();

        btn.style.color = '#fff';
    });

    btn.addEventListener('mouseout', (e) => {
        e.preventDefault();

        btn.style.color = '#fff';
    });
}

function btnLight() {
    btn.style.color = '#444452';

    btn.addEventListener('mouseover', (e) => {
        e.preventDefault();

        btn.style.color = '#fff';
    });

    btn.addEventListener('mouseout', (e) => {
        e.preventDefault();

        btn.style.color = '#444452';
    });
}
