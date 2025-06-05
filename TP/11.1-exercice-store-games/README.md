# Exercice pinia store

## 🎯 Objectif pédagogique

Dans cet exercice, tu vas :

- Installer et configurer **Pinia**
- Créer un **store global** pour le profil utilisateur
- Créer un **store global** pour les jeux
- Utiliser ces stores dans plusieurs composants

## Rendu attendu

( Reprendre éventuellement la structure du code de l'exercice 9-composants)

- Utiliser vue-router pour créer 3 routes :

  - la liste des jeux
  - le détail d'un jeu
  - la page de profil utilisateur qui listera les favoris de l'utilisateur

- Créer 2 stores avec les logiques nécessaires:
  - game.js
  - user.js

Modifier la logique des composants pour faire appel à ces nouveaux stores

Pour rappel, voici un exemple de liste de jeux :

```
[
  {
    id: 1,
    titre: 'Celeste',
    image: '/Celeste_boxart.jpg',
    genre: 'Plateforme',
    note: 9,
  },
  {
    id: 2,
    titre: 'Hollow Knight',
    image: '/Hollow_Knight_cover.jpg',
    genre: 'Action-Adventure',
    note: 8,
  },
  {
    id: 3,
    titre: 'Hades',
    image: '/Hades.jpg',
    genre: 'Rogue-like',
    note: 9,
  },
]
```

Voici un exemple de données utilisateur :

```
{
  name: 'John Doe',
  pseudoname: 'WarriorWizzad57',
  age: 16,
  favs: [],
}
```
