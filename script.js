// 🎵 Audios del juego
const musicaFondo = new Audio('sounds/fondo.mp3');
musicaFondo.loop = true; // La música se repite automáticamente
console.log("sis")
musicaFondo.volume = 0.1; // Volumen bajo para no molestar

const sonidoCorrecto = new Audio('sounds/correcto.mp3');
const sonidoIncorrecto = new Audio('sounds/incorrecto.flac');
sonidoIncorrecto.volume = 0.05

// Reproducir música de fondo automáticamente al cargar
document.addEventListener('DOMContentLoaded', () => {
    const iniciarMusica = () => {
        musicaFondo.play().catch(() => {
            console.log("⚠️ No se pudo reproducir la música. El usuario debe interactuar.");
        });
        // Esto se ejecuta solo una vez y remueve el listener
        document.removeEventListener('click', iniciarMusica);
    };

    document.addEventListener('click', iniciarMusica);
});

// Funciones para sonidos
function reproducirCorrecto() {
    sonidoCorrecto.currentTime = 0;
    sonidoCorrecto.play();
}

function reproducirIncorrecto() {
    sonidoIncorrecto.currentTime = 0;
    sonidoIncorrecto.play();
}

function stop() {
    musicaFondo.pause();
    setTimeout(() => {
        musicaFondo.play();
        console.log("sonado")
    }, 1500);

}