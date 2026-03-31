document.getElementById("filtrer").addEventListener("click", async function() {

    // Récupérer les valeurs des champs
    const idInput = document.getElementById("id").value.trim();
    const nomInput = document.getElementById("nom").value.trim().toLowerCase();
    const typeInput = document.getElementById("type").value;

    // Récupérer le fichier JSON
    const response = await fetch("pokemon.json");
    const pokemons = await response.json();

    // Filtrer selon les critères
    const resultats = pokemons.filter(pokemon => {

        const matchId = idInput === "" || pokemon.id.toString() === idInput;

        const matchNom = nomInput === "" || pokemon.name.french.toLowerCase().includes(nomInput);

        const matchType = typeInput === "" || pokemon.type.includes(typeInput);

        return matchId && matchNom && matchType;
    });

    // Afficher les résultats
    const container = document.getElementById("resultats");
    container.innerHTML = ""; // vider avant affichage

    if (resultats.length === 0) {
        container.innerHTML = "<p>Aucun Pokémon trouvé.</p>";
    } else {
        resultats.forEach(p => {
            const pElem = document.createElement("p");
            pElem.textContent = `ID: ${p.id} - Nom: ${p.name.french} - Type: ${p.type.join(", ")}`;
            container.appendChild(pElem);
        });
    }
});