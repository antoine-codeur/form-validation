// validation.js
function validateUsername(username) {
    return username.length >= 3;
}

function validatePassword(password) {
    return password.length >= 8;
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Fonction DOM à utiliser uniquement dans le contexte du navigateur
function updateValidationMessage(elementId, isValid, validMessage, invalidMessage) {
    const messageElement = document.getElementById(elementId);
    if (messageElement) {
        if (isValid) {
            messageElement.textContent = validMessage;
            messageElement.classList.remove('invalid');
            messageElement.classList.add('valid');
        } else {
            messageElement.textContent = invalidMessage;
            messageElement.classList.remove('valid');
            messageElement.classList.add('invalid');
        }
    }
}

// Exportation des fonctions de validation pour les tests avec Jest
module.exports = {
    validateUsername,
    validatePassword,
    validateEmail,
};
