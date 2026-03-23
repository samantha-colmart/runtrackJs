function compterVoyelles(phrase) {
    const voyelles = ["a", "e", "i", "o", "u", "y"];
    let compteur = 0;

    // On parcourt chaque caractère de la phrase
    for (let i = 0; i < phrase.length; i++) {
        const lettre = phrase[i].toLowerCase(); // on met tout en minuscule
        if (voyelles.includes(lettre)) {
            compteur++;
        }
    }

    console.log(`La phrase contient ${compteur} voyelles`);
}

// Tests
compterVoyelles("Bonjour tout le monde"); // La phrase contient 8 voyelles
compterVoyelles("JavaScript est génial");  // La phrase contient 7 voyelles