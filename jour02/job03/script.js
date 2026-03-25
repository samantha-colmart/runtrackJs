// Fonction qui ajoute +1 au compteur
function addOne() {
    const compteur = document.getElementById("compteur");

    // Récupérer la valeur actuelle et la convertir en nombre
    let valeur = parseInt(compteur.textContent);

    // Incrémenter
    valeur++;

    // Mettre à jour le texte
    compteur.textContent = valeur;
}

// Ajouter l'événement au bouton
document.getElementById("button").addEventListener("click", addOne);
