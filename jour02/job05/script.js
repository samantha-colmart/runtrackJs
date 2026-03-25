// Fonction pour mettre à jour la couleur du footer selon le scroll
window.addEventListener("scroll", function() {
    const footer = document.querySelector("footer");

    // Calcul du pourcentage de scroll
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    // On transforme le pourcentage en couleur (exemple : du rouge vers vert)
    // 0% → rouge, 100% → vert
    const r = 255 - Math.round((scrollPercent / 100) * 255);
    const g = Math.round((scrollPercent / 100) * 255);
    footer.style.backgroundColor = `rgb(${r},${g},0)`;
});