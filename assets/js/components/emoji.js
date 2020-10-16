const helloWave = document.getElementById('helloWave');

helloWave.addEventListener('load', () => {
    waveOnLoad();
});

helloWave.addEventListener('mouseover', () => {
    helloWave.classList.add('wave');
});

helloWave.addEventListener('mouseout', () => {
    helloWave.classList.remove('wave');
});

function waveOnLoad() {
    helloWave.classList.add('wave');
    setTimeout(() => {
        helloWave.classList.remove('wave');
    }, 2000);
}

setTimeout(() => {
    waveOnLoad();
}, 1000);
