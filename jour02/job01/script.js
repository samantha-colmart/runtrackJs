// Fonction qui récupère et affiche la citation
function citation() {
    // Récupérer l'élément avec l'id "citation"
    const article = document.getElementById("citation");

    // Afficher son contenu dans la console
    console.log(article.textContent);
}

// Ajouter un événement au bouton
document.getElementById("button").addEventListener("click", citation);
