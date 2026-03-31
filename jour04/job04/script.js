document.getElementById("update").addEventListener("click", async function() {

    // Récupérer le fichier JSON
    const response = await fetch("utilisateur.json");
    const users = await response.json();

    // Sélectionner le body du tableau
    const tbody = document.getElementById("table-body");

    // Vider le tableau avant mise à jour
    tbody.innerHTML = "";

    // Ajouter chaque utilisateur
    users.forEach(user => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${user.id}</td>
            <td>${user.nom}</td>
            <td>${user.prenom}</td>
            <td>${user.email}</td>
        `;

        tbody.appendChild(tr);
    });

});