$(function() {
    const champ = $("#champ");

    // Quand le champ reçoit le focus → agrandir
    champ.focus(function() {
        $(this).animate({ width: "400px" }, 500); // agrandit à 400px
    });

    // Quand le champ perd le focus → revenir à la taille normale
    champ.blur(function() {
        $(this).animate({ width: "200px" }, 500); // revient à 200px
    });
});