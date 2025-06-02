
# 🧪 Chapitre 14 (alt) : Routes dynamiques — "Détail des jeux"

## 🎯 Objectif pédagogique

Dans cet exercice, tu vas :

- Utiliser les **routes dynamiques** avec des paramètres (`:id`)
- Récupérer les paramètres de route dans un composant
- Afficher des données spécifiques selon l’URL

Projet fun : **"Détail des jeux"** 🎯  
Un clic sur un jeu dans la liste affiche une page dédiée avec ses détails.

---

## 🧱 Étape 1 : Ajouter les routes dynamiques

### 📄 `src/router.js`

Ajoute cette route après les autres :

```js
import GameDetail from './views/GameDetail.vue';

const routes = [
  // ... autres routes
  { path: '/game/:id', component: GameDetail }
];
```

---

## 🧱 Étape 2 : Page de liste avec liens vers les jeux

### 📄 `src/views/GamesView.vue`

```vue
<template>
  <div class="games">
    <h1>🎮 Tous les jeux</h1>
    <ul>
      <li v-for="jeu in jeux" :key="jeu.id">
        <router-link :to="`/game/${jeu.id}`">{{ jeu.nom }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jeux: [
        { id: 1, nom: 'Zelda', genre: 'Aventure', note: 9 },
        { id: 2, nom: 'Celeste', genre: 'Platformer', note: 8 },
        { id: 3, nom: 'Hades', genre: 'Rogue-like', note: 9 }
      ]
    };
  }
};
</script>
```

---

## 🧱 Étape 3 : Page de détail dynamique

### 📄 `src/views/GameDetail.vue`

```vue
<template>
  <div v-if="jeu">
    <h1>{{ jeu.nom }}</h1>
    <p>Genre : {{ jeu.genre }}</p>
    <p>Note : {{ jeu.note }}/10</p>
  </div>
  <p v-else>Jeu introuvable.</p>
</template>

<script>
import { useRoute } from 'vue-router';

export default {
  setup() {
    const route = useRoute();
    const jeux = [
      { id: '1', nom: 'Zelda', genre: 'Aventure', note: 9 },
      { id: '2', nom: 'Celeste', genre: 'Platformer', note: 8 },
      { id: '3', nom: 'Hades', genre: 'Rogue-like', note: 9 }
    ];

    const jeu = jeux.find(j => j.id === route.params.id);

    return { jeu };
  }
};
</script>
```

---

## 🔍 Ce que nous avons appris

- Créer une route dynamique avec `/game/:id`
- Utiliser `useRoute()` pour accéder au paramètre dynamique
- Récupérer dynamiquement des données en fonction de l’URL

---

## 🎯 Exercices bonus

- Ajouter une image à chaque jeu
- Ajouter un bouton "Retour" vers la liste
- Gérer les erreurs si le jeu n’existe pas (afficher une vue 404)

---

✅ Tu es maintenant prêt(e) à utiliser **Pinia** pour partager les données de l’utilisateur à travers toute l’app 👤
