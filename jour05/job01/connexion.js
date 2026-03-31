const form = document.getElementById("loginForm");

const email = document.getElementById("loginEmail");
const password = document.getElementById("loginPassword");

// Afficher erreur
function showError(input, message) {
    input.nextElementSibling.textContent = message;
}

// Supprimer erreur
function clearError(input) {
    input.nextElementSibling.textContent = "";
}

// Validation email
email.addEventListener("input", () => {
    setTimeout(() => {
        if (!email.value.includes("@")) {
            showError(email, "Email invalide");
        } else {
            clearError(email);
        }
    }, 300);
});

// Validation mot de passe
password.addEventListener("input", () => {
    setTimeout(() => {
        if (password.value.length < 8) {
            showError(password, "Minimum 8 caractères");
        } else {
            clearError(password);
        }
    }, 300);
});

// Submit
form.addEventListener("submit", (e) => {
    e.preventDefault();

    let valid = true;

    if (!email.value.includes("@")) {
        showError(email, "Email invalide");
        valid = false;
    }

    if (password.value.length < 8) {
        showError(password, "Mot de passe trop court");
        valid = false;
    }

    if (valid) {
        alert("Connexion réussie !");
    }
});