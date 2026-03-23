function estPremier(n) {
    if (n < 2) return false; // 0 et 1 ne sont pas premiers
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function sommeNombresPremiers(a, b) {
    if (estPremier(a) && estPremier(b)) {
        return a + b;
    } else {
        return false;
    }
}

// Tests
console.log(sommeNombresPremiers(3, 5));   // 8 (les deux sont premiers)
console.log(sommeNombresPremiers(4, 5));   // false (4 n'est pas premier)
console.log(sommeNombresPremiers(7, 11));  // 18
console.log(sommeNombresPremiers(8, 13));  // false