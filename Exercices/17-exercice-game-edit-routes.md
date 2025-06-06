# Exercice

Créer une nouvelle route dans vue-router EditGameView.vue

- si je navigue vers /games/edit/1, je passe en mode édition
- si je nabigue vers /games/create, je passe en mode création d'un nouveau jeu

## ETAPE 1: édition d'un jeu existant

- Créer une page de formulaire qui permet d'éditer les données d'un jeu (sauf l'image)
- permettre de modifier les données d'un jeu (titre, genre, note)
- Ajouter 3 boutons en bas du formulaire : 
    - Annuler (on revient simplement sur la liste des jeux)
    - Supprimer (déclencher une action de suppression du jeu)
    - Enregistrer (déclencher l'enregistrement des données du jeu, revenir à la liste)
- Créer les méthodes du store correspondant à ces nouvelles actions

## ETAPE 2 : création d'un nouveau jeu

- Reprendre et adapter le formulaire d'édition, mais cette fois-ci :
- pas de bouton de suppression
- le bouton enregistrer déclenche un POST, pas un PATCH
- revenir à la liste après l'enregistrement
