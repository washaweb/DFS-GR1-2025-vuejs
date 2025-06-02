
# 🧪 Chapitre 3 (alt) : Option API vs Composition API — "Compteur de kills"

## 🎯 Objectif pédagogique

Dans cet exercice, tu vas :

- Implémenter le même comportement avec l’Option API et la Composition API
- Comprendre la différence de syntaxe et d’organisation du code

Projet fun : **"Compteur de kills"** ⚡  
Un petit compteur pour simuler le score d’un joueur en match.

---

## 🧱 Étape 1 : Version Option API

### 📄 `App.vue`

```vue
<template>
  <div class="scoreboard">
    <h1>⚔️ Kills : {{ kills }}</h1>
    <button @click="kills++">+1 Kill</button>
    <button @click="kills = 0">Reset</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      kills: 0
    };
  }
};
</script>

<style scoped>
.scoreboard {
  text-align: center;
  padding: 2rem;
}
button {
  margin: 0.5rem;
  padding: 0.5rem 1rem;
}
</style>
```

---

## 🧱 Étape 2 : Version Composition API

### 📄 `App.vue` (Composition)

```vue
<template>
  <div class="scoreboard">
    <h1>⚔️ Kills : {{ kills }}</h1>
    <button @click="kills++">+1 Kill</button>
    <button @click="reset">Reset</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const kills = ref(0);
const reset = () => kills.value = 0;
</script>

<style scoped>
.scoreboard {
  text-align: center;
  padding: 2rem;
}
button {
  margin: 0.5rem;
  padding: 0.5rem 1rem;
}
</style>
```

---

## 🔍 Ce que nous avons appris

- Déclarer une propriété réactive avec `data()` (Option) ou `ref()` (Composition)
- Gérer des événements simples avec `@click`
- Comparer les styles de code entre les deux APIs

---

## 🎯 Exercices bonus

- Ajouter un score de "deaths" pour calculer un ratio K/D
- Utiliser une computed property pour afficher le ratio
- Créer un composant `KillDisplay` réutilisable

---

✅ Tu es maintenant prêt(e) à intégrer Sass, Bootstrap et FontAwesome dans un **profil de joueur stylé** 🎮
