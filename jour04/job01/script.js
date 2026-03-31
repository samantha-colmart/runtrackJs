// Quand on clique sur le bouton
document.getElementById("button").addEventListener("click", async function() {
    
    // Récupérer le fichier texte
    const response = await fetch("expression.txt");
    
    // Transformer en texte
    const texte = await response.text();

    // Créer un paragraphe
    const p = document.createElement("p");
    p.textContent = texte;

    // Ajouter dans la page
    document.body.appendChild(p);
});
