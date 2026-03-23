function tri(numbers, order) {
    // Création d'une copie pour ne pas modifier le tableau original
    const copie = [...numbers];

    // Tri selon l'ordre demandé
    if (order === "asc") {
        copie.sort((a, b) => a - b); // ordre croissant
    } else if (order === "desc") {
        copie.sort((a, b) => b - a); // ordre décroissant
    } else {
        console.log("Erreur : order doit être 'asc' ou 'desc'");
        return null;
    }

    return copie;
}

// Tests
console.log(tri([5, 2, 9, 1, 7], "asc"));   // [1, 2, 5, 7, 9]
console.log(tri([5, 2, 9, 1, 7], "desc"));  // [9, 7, 5, 2, 1]
console.log(tri([5, 2, 9, 1, 7], "xyz"));   // Erreur