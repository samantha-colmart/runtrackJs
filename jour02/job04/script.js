// Écoute les touches du clavier sur toute la page
document.addEventListener("keydown", function(event) {
    const textarea = document.getElementById("keylogger");

    // Vérifie si c'est une lettre (a-z)
    const lettre = event.key;

    if (/^[a-z]$/i.test(lettre)) {
        // Vérifie si le focus est dans le textarea
        if (document.activeElement === textarea) {
            textarea.value += lettre + lettre; // ajoute 2 fois
        } else {
            textarea.value += lettre; // ajoute 1 fois
        }
    }
});