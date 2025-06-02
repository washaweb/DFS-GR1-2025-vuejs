
# 🧪 Chapitre 15 (alt) : Store Pinia — "Gestionnaire de profil global"

## 🎯 Objectif pédagogique

Dans cet exercice, tu vas :

- Installer et configurer **Pinia**
- Créer un **store global** pour le profil utilisateur
- Utiliser ce store dans plusieurs composants

Projet fun : **"Gestionnaire de profil global"** 👤  
L’utilisateur peut modifier son profil depuis n’importe quelle vue grâce à Pinia.

---

## 🧱 Étape 1 : Installer Pinia

```bash
npm install pinia
```

---

## 🧱 Étape 2 : Configurer Pinia dans `main.js`

```js
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

const app = createApp(App);
app.use(createPinia());
app.mount('#app');
```

---

## 🧱 Étape 3 : Créer un store `useUserStore.js`

### 📄 `src/stores/useUserStore.js`

```js
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    nom: 'DarkPlayer',
    niveau: 5,
    achievements: ['Tutoriel terminé']
  }),
  actions: {
    monterNiveau() {
      this.niveau++;
    },
    ajouterAchievement(nom) {
      if (!this.achievements.includes(nom)) {
        this.achievements.push(nom);
      }
    }
  }
});
```

---

## 🧱 Étape 4 : Utiliser le store dans une vue

### 📄 `src/views/ProfileView.vue`

```vue
<template>
  <div class="profile">
    <h1>👤 Profil de {{ user.nom }}</h1>
    <p>Niveau : {{ user.niveau }}</p>
    <button @click="user.monterNiveau">+ Monter d’un niveau</button>

    <h3>🏆 Succès :</h3>
    <ul>
      <li v-for="(s, i) in user.achievements" :key="i">{{ s }}</li>
    </ul>
  </div>
</template>

<script>
import { useUserStore } from '../stores/useUserStore';

export default {
  setup() {
    const user = useUserStore();
    return { user };
  }
};
</script>
```

---

## 🔍 Ce que nous avons appris

- Installer et configurer `Pinia`
- Créer un store global avec `defineStore`
- Utiliser des **actions**, **state** et **mutations** centralisés

---

## 🎯 Exercices bonus

- Ajouter un champ `avatar` et l’afficher dans le profil
- Afficher le nom du joueur dans la navbar, peu importe la page
- Créer une vue "Achievements" séparée alimentée par le store

---

✅ Tu as maintenant une base complète pour une **app VueJS moderne**, avec des concepts avancés intégrés ! 🚀
