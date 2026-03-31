const form = document.getElementById("form");

const fields = {
    firstname: document.getElementById("firstname"),
    lastname: document.getElementById("lastname"),
    email: document.getElementById("email"),
    password: document.getElementById("password"),
    confirmPassword: document.getElementById("confirmPassword"),
    address: document.getElementById("address"),
    postal: document.getElementById("postal"),
};

// Fonction pour afficher erreur
function showError(input, message) {
    input.nextElementSibling.textContent = message;
}

// Fonction pour enlever erreur
function clearError(input) {
    input.nextElementSibling.textContent = "";
}

// Validation prénom
fields.firstname.addEventListener("input", () => {
    setTimeout(() => {
        if (fields.firstname.value.length < 2) {
            showError(fields.firstname, "Prénom trop court");
        } else {
            clearError(fields.firstname);
        }
    }, 300);
});

// Validation nom
fields.lastname.addEventListener("input", () => {
    setTimeout(() => {
        if (fields.lastname.value.length < 2) {
            showError(fields.lastname, "Nom trop court");
        } else {
            clearError(fields.lastname);
        }
    }, 300);
});

// Email
fields.email.addEventListener("input", () => {
    setTimeout(() => {
        if (!fields.email.value.includes("@")) {
            showError(fields.email, "Email invalide");
        } else {
            clearError(fields.email);
        }
    }, 300);
});

// Password
fields.password.addEventListener("input", () => {
    setTimeout(() => {
        const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[\W_]).{8,}$/;

        if (!regex.test(fields.password.value)) {
            showError(fields.password, "Min 8 caractères, 1 lettre, 1 chiffre, 1 spécial");
        } else {
            clearError(fields.password);
        }
    }, 300);
});

// Confirmation password
fields.confirmPassword.addEventListener("input", () => {
    setTimeout(() => {
        if (fields.confirmPassword.value !== fields.password.value) {
            showError(fields.confirmPassword, "Les mots de passe ne correspondent pas");
        } else {
            clearError(fields.confirmPassword);
        }
    }, 300);
});

// Code postal
fields.postal.addEventListener("input", () => {
    setTimeout(() => {
        if (!/^\d{5}$/.test(fields.postal.value)) {
            showError(fields.postal, "Code postal invalide");
        } else {
            clearError(fields.postal);
        }
    }, 300);
});

// Submit
form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Formulaire valide !");
});