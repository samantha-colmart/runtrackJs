// Konami Code : ↑ ↑ ↓ ↓ ← → ← → B A
const konamiCode = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a"
];

let konamiIndex = 0;

// Écoute des touches
document.addEventListener("keydown", function(event) {
    const key = event.key.toLowerCase(); // minuscule pour B/A

    if (key === konamiCode[konamiIndex].toLowerCase()) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            activerKonami();
            konamiIndex = 0; // reset pour réutilisation
        }
    } else {
        konamiIndex = 0; // reset si erreur
    }
});

// Fonction qui active l'easter egg
function activerKonami() {
    document.body.classList.add("konami");

    // Crée le texte
    const message = document.createElement("h1");
    message.textContent = "Félicitation ! Vous avez trouvé l'Easter egg caché de La Plateforme.";
    document.body.appendChild(message);
}