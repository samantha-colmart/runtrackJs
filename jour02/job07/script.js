// Fonction qui change le thème
function changeTheme() {
    document.body.classList.toggle("dark-theme");
}

// Événement sur le bouton
document.getElementById("toggle-theme").addEventListener("click", changeTheme);