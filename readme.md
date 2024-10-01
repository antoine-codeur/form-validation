# Form Validation avec Jest

Ce projet est une implémentation simple d'un formulaire de validation côté client avec des tests unitaires utilisant Jest. Il inclut des fonctions de validation pour le nom d'utilisateur, le mot de passe et l'email, avec des messages d'erreur ou de succès affichés en temps réel.

## Fonctionnalités

- Validation du nom d'utilisateur (au moins 3 caractères).
- Validation du mot de passe (au moins 8 caractères).
- Validation du format d'email.
- Tests unitaires pour chaque fonction de validation avec Jest.
- Messages de validation dynamiques affichés sous chaque champ de formulaire.

## Prérequis

- [Node.js](https://nodejs.org/) installé sur votre machine.

## Installation

1. Clonez le dépôt GitHub :

    ```bash
    git clone https://github.com/username/form-validation.git
    ```

2. Accédez au répertoire du projet :

    ```bash
    cd form-validation
    ```

3. Installez les dépendances :

    ```bash
    npm install
    ```

## Exécution des tests

    ```bash
    npm test
    ```

Cela exécutera les tests définis dans validation.test.js et affichera le résultat dans le terminal.

## Structure du projet

```validation.js``` : Contient les fonctions de validation pour le nom d'utilisateur, le mot de passe et l'email.
```validation.test.js``` : Contient les tests unitaires pour chaque fonction de validation avec Jest.
```index.html``` : Un simple formulaire HTML qui utilise les fonctions de validation pour afficher les messages de validation en temps réel.
```.gitignore``` : Liste des fichiers et dossiers à ignorer par Git.
```package.json``` : Fichier de configuration du projet Node.js.