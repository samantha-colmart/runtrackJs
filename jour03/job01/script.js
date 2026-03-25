$(function() {
    // Clique sur le bouton pour afficher
    $("#show-btn").click(function() {
        // Si l'élément n'existe pas déjà
        if ($("#citation").length === 0) {
            $("body").append("<p id='citation'>Les logiciels et les cathédrales, c'est un peu la même chose - d'abord, on les construit, ensuite, on prie.</p>");
        }
    });

    // Clique sur le bouton pour cacher
    $("#hide-btn").click(function() {
        $("#citation").remove();
    });
});