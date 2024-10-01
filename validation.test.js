// validation.test.js
const { validateUsername, validatePassword, validateEmail } = require('./validation');

describe('Validation de nom d\'utilisateur', () => {
    test('devrait retourner false si le nom d\'utilisateur a moins de 3 caractères', () => {
        expect(validateUsername('ab')).toBe(false);
    });

    test('devrait retourner true si le nom d\'utilisateur a 3 caractères ou plus', () => {
        expect(validateUsername('abc')).toBe(true);
        expect(validateUsername('abcdef')).toBe(true);
    });
});

describe('Validation de mot de passe', () => {
    test('devrait retourner false si le mot de passe a moins de 8 caractères', () => {
        expect(validatePassword('pass123')).toBe(false);
    });

    test('devrait retourner true si le mot de passe a 8 caractères ou plus', () => {
        expect(validatePassword('password')).toBe(true);
        expect(validatePassword('mypassword123')).toBe(true);
    });
});

describe('Validation d\'email', () => {
    test('devrait retourner false si l\'email n\'est pas valide', () => {
        expect(validateEmail('userexample.com')).toBe(false);
        expect(validateEmail('user@com')).toBe(false);
    });

    test('devrait retourner true si l\'email est valide', () => {
        expect(validateEmail('user@example.com')).toBe(true);
        expect(validateEmail('test.email@domain.co')).toBe(true);
    });
});
