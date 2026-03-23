function jourTravaille(date) {
    // Tableaux pour convertir les nombres en noms
    const joursSemaine = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
    const moisAnnee = ["janvier", "février", "mars", "avril", "mai", "juin",
                       "juillet", "août", "septembre", "octobre", "novembre", "décembre"];

    // Liste des jours fériés 2024 (format YYYY-MM-DD)
    const joursFeries = [
        "2024-01-01", // Jour de l'an
        "2024-04-01", // Lundi de Pâques
        "2024-05-01", // Fête du travail
        "2024-05-08", // Victoire 1945
        "2024-05-09", // Ascension
        "2024-05-20", // Lundi de Pentecôte
        "2024-07-14", // Fête nationale
        "2024-08-15", // Assomption
        "2024-11-01", // Toussaint
        "2024-11-11", // Armistice
        "2024-12-25"  // Noël
    ];

    // Récupération du jour, mois et année
    const jourNom = joursSemaine[date.getDay()]; // Nom du jour
    const jour = date.getDate();                 // Numéro du jour
    const mois = moisAnnee[date.getMonth()];     // Nom du mois
    const annee = date.getFullYear();            // Année

    // Format de la date pour comparer avec jours fériés
    const moisFormat = (date.getMonth() + 1).toString().padStart(2, "0");
    const jourFormat = date.getDate().toString().padStart(2, "0");
    const dateFormat = `${annee}-${moisFormat}-${jourFormat}`;

    // Conditions
    if (joursFeries.includes(dateFormat)) {
        console.log(`Le ${jourNom} ${jour} ${mois} ${annee} est un jour férié`);
    } else if (date.getDay() === 6 || date.getDay() === 0) {
        console.log(`Non, ${jourNom} ${jour} ${mois} ${annee} est un week-end`);
    } else {
        console.log(`Oui, ${jourNom} ${jour} ${mois} ${annee} est un jour travaillé`);
    }
}

// Exemples de test
jourTravaille(new Date("2024-01-01")); // Le lundi 1 janvier 2024 est un jour férié
jourTravaille(new Date("2024-04-06")); // Non, samedi 6 avril 2024 est un week-end
jourTravaille(new Date("2024-04-08")); // Oui, lundi 8 avril 2024 est un jour travaillé
jourTravaille(new Date("2024-05-01")); // Le mercredi 1 mai 2024 est un jour férié