// Fonction qui gère l'affichage / suppression
function showhide() {
    // Vérifie si l'article existe déjà
    let article = document.getElementById("citation");

    if (article) {
        // Si il existe → on le supprime
        article.remove();
    } else {
        // Sinon → on le crée
        article = document.createElement("article");
        article.id = "citation";
        article.textContent = "L'important n'est pas la chute, mais l'atterrissage.";

        // On l'ajoute à la page
        document.body.appendChild(article);
    }
}

// Ajouter l'événement au bouton
document.getElementById("button").addEventListener("click", showhide);