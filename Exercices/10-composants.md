
# 🧪 Chapitre 10 (alt) : Composants — "Collection de cartes"

## 🎯 Objectif pédagogique

Dans cet exercice, tu vas :

- Créer un composant personnalisé et réutilisable
- Passer des données via des **props**
- Utiliser `v-for` pour afficher une liste de composants

Projet fun : **"Collection de cartes"** 🎴  
Afficher une galerie de jeux vidéo sous forme de cartes avec image, nom, genre et note.

- Crée un composant game-card pour afficher un jeu
- Crée une liste de jeux (min 3 jeux) en utilisant le composant créé
- Voici les caractéristiques d'un jeu exemple :

```js
{
  titre: 'Elden Ring',
  image: 'https://upload.wikimedia.org/wikipedia/en/b/b9/Elden_Ring_Box_art.jpg',
  genre: 'Action RPG',
  note: 9
}
```


---

## 🧱 Étape 1 : Créer le composant `GameCard.vue`

### 📄 `src/components/GameCard.vue`

```vue
<template>
  <div class="game-card">
    <img :src="image" :alt="titre" />
    <h3>{{ titre }}</h3>
    <p>🎮 {{ genre }}</p>
    <p>⭐ {{ note }}/10</p>
  </div>
</template>

<script>
export default {
  name: 'GameCard',
  props: {
    titre: String,
    image: String,
    genre: String,
    note: Number
  }
};
</script>

<style scoped>
.game-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  width: 200px;
  text-align: center;
  background-color: #f5f5f5;
}
.game-card img {
  width: 100%;
  height: auto;
  border-radius: 6px;
  margin-bottom: 0.5rem;
}
</style>
```

---

## 🧱 Étape 2 : Utiliser les composants dans `App.vue`

### 📄 `src/App.vue`

```vue
<template>
  <div class="collection container text-center">
    <h1>🎴 Ma Collection de Jeux</h1>
    <div class="grid">
      <GameCard
        v-for="(jeu, index) in jeux"
        :key="index"
        :titre="jeu.titre"
        :image="jeu.image"
        :genre="jeu.genre"
        :note="jeu.note"
      />
    </div>
  </div>
</template>

<script>
import GameCard from './components/GameCard.vue';

export default {
  components: {
    GameCard
  },
  data() {
    return {
      jeux: [
        {
          titre: 'Elden Ring',
          image: 'https://upload.wikimedia.org/wikipedia/en/b/b9/Elden_Ring_Box_art.jpg',
          genre: 'Action RPG',
          note: 9
        },
        {
          titre: 'Stardew Valley',
          image: 'https://upload.wikimedia.org/wikipedia/en/f/fd/Stardew_Valley_cover_art.jpg',
          genre: 'Farming',
          note: 8
        },
        {
          titre: 'Hades',
          image: 'https://upload.wikimedia.org/wikipedia/en/e/e3/Hades_cover_art.jpg',
          genre: 'Rogue-like',
          note: 9
        }
      ]
    };
  }
};
</script>

<style scoped>
.grid {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
```

---

## 🔍 Ce que nous avons appris

- Créer un composant `GameCard` avec props
- Réutiliser un composant dans une boucle `v-for`
- Passer dynamiquement des données à chaque carte

---

## 🎯 Exercices bonus

- Ajouter un bouton "Voir plus" sur chaque carte
- Ajouter une note sous forme d’étoiles ⭐⭐⭐
- Créer un système de filtres (genre ou note minimale)

---

✅ Tu es maintenant prêt(e) à faire communiquer les composants entre eux dans une **boutique de jeux** 🛒
