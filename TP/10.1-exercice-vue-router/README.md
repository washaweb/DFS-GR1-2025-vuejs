# Exercice Vue Router - Catalogue de Jeux Vidéo 🎮

## Objectif (45 minutes)

Créer une application Vue.js avec Vue Router pour gérer un catalogue de jeux vidéo avec navigation complexe.

## Structure attendue

### Routes principales

- `/` - Accueil avec liste des plateformes
- `/platform/:platformId` - Page d’une plateforme spécifique
- `/platform/:platformId/game/:gameId` - Détails d’un jeu (route enfant)
- `/platform/:platformId/stats` - Statistiques de la plateforme (route enfant)

### Données à utiliser

```javascript
const platforms = [
  { id: 'pc', name: 'PC', icon: '💻' },
  { id: 'playstation', name: 'PlayStation', icon: '🎮' },
  { id: 'xbox', name: 'Xbox', icon: '🎯' },
  { id: 'nintendo', name: 'Nintendo', icon: '🎨' },
]

const games = {
  pc: [
    { id: 'cyberpunk', name: 'Cyberpunk 2077', rating: 8.5, year: 2020 },
    { id: 'valorant', name: 'Valorant', rating: 9.2, year: 2020 },
    { id: 'cs2', name: 'Counter-Strike 2', rating: 8.8, year: 2023 },
  ],
  playstation: [
    { id: 'spiderman', name: 'Spider-Man', rating: 9.7, year: 2018 },
    { id: 'god-of-war', name: 'God of War', rating: 9.8, year: 2018 },
    { id: 'last-of-us', name: 'The Last of Us Part II', rating: 9.4, year: 2020 },
  ],
  xbox: [
    { id: 'halo-infinite', name: 'Halo Infinite', rating: 8.7, year: 2021 },
    { id: 'forza-horizon', name: 'Forza Horizon 5', rating: 9.1, year: 2021 },
    { id: 'gears-5', name: 'Gears 5', rating: 8.4, year: 2019 },
  ],
  nintendo: [
    { id: 'zelda-breath', name: 'Zelda: Breath of the Wild', rating: 9.9, year: 2017 },
    { id: 'mario-odyssey', name: 'Super Mario Odyssey', rating: 9.6, year: 2017 },
    { id: 'smash-ultimate', name: 'Super Smash Bros. Ultimate', rating: 9.3, year: 2018 },
  ],
}
```

## Tâches à réaliser

### 1. Configuration du routeur (5 min)

- Installer et configurer Vue Router
- Définir les routes avec paramètres et routes enfants
- Configurer le mode history

### 2. Composant Accueil (5 min)

- Afficher la liste des plateformes sous forme de cartes
- Chaque carte doit être un lien vers `/platform/:platformId`
- Utiliser `router-link` avec classes CSS actives

### 3. Composant Plateforme (10 min)

- Récupérer le paramètre `platformId` depuis la route
- Afficher le nom de la plateforme et son icône
- Navigation avec onglets vers :
  - Liste des jeux (`/platform/:platformId` - vue par défaut)
  - Statistiques (`/platform/:platformId/stats`)
- Utiliser `<router-view>` pour les routes enfants

### 4. Routes enfants (8 min)

**Liste des jeux** (route par défaut) :

- Afficher les jeux de la plateforme
- Chaque jeu est cliquable → `/platform/:platformId/game/:gameId`

**Détails du jeu** :

- Récupérer `platformId` et `gameId` depuis `$route.params`
- Afficher nom, note et année du jeu
- Bouton “Retour” avec navigation programmatique

**Statistiques** :

- Afficher le nombre total de jeux
- Note moyenne de la plateforme

### 5. Bonus

- Ajouter des gardes de navigation pour vérifier l’existence des plateformes/jeux
- Rediriger vers 404 si paramètre invalide

### Compétences évaluées

- ✅ Utilisation correcte de `$route.params`
- ✅ Navigation programmatique avec `$router.push()`
- ✅ Liens avec `router-link` et classes actives
- ✅ Configuration correcte des routes imbriquées
- ✅ Utilisation de `<router-view>` dans le composant parent
- ✅ Route par défaut (redirect)

## Structure des fichiers suggérée

```
src/
├── router/
│   └── index.js
├── views/
│   ├── HomeView.vue
│   ├── PlatformView.vue
│   ├── GamesListView.vue
│   ├── GameDetailView.vue
│   └── PlatformStatsView.vue
│   └── PlatformView.vue
└── App.vue
```
