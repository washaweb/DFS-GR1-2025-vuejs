
# 🧪 Chapitre 13 (alt) : Vue Router — "Portail gaming"

## 🎯 Objectif pédagogique

Dans cet exercice, tu vas :

- Configurer le **Vue Router** dans une app Vue
- Créer plusieurs vues accessibles via des routes
- Gérer la navigation avec une navbar

Projet fun : **"Portail gaming"** 🏠  
Créer un mini-site avec plusieurs pages : Accueil, Jeux, Profil, À propos.

---

## 🧱 Étape 1 : Installer Vue Router

```bash
npm install vue-router
```

---

## 🧱 Étape 2 : Configuration du router

### 📄 `src/router.js`

```js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.vue';
import GamesView from './views/GamesView.vue';
import ProfileView from './views/ProfileView.vue';
import AboutView from './views/AboutView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/games', component: GamesView },
  { path: '/profile', component: ProfileView },
  { path: '/about', component: AboutView }
];

export default createRouter({
  history: createWebHistory(),
  routes
});
```

---

## 🧱 Étape 3 : Utilisation dans `main.js`

### 📄 `src/main.js`

```js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

createApp(App).use(router).mount('#app');
```

---

## 🧱 Étape 4 : App.vue avec `<router-view>` et navbar

### 📄 `src/App.vue`

```vue
<template>
  <div>
    <nav class="nav">
      <router-link to="/">🏠 Accueil</router-link>
      <router-link to="/games">🎮 Jeux</router-link>
      <router-link to="/profile">👤 Profil</router-link>
      <router-link to="/about">ℹ️ À propos</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style scoped>
.nav {
  display: flex;
  gap: 1rem;
  background: #222;
  padding: 1rem;
}
.nav a {
  color: white;
  text-decoration: none;
}
.nav a.router-link-active {
  font-weight: bold;
  text-decoration: underline;
}
</style>
```

---

## 🧱 Étape 5 : Créer les vues

Crée un fichier par vue dans `src/views/`.

### 📄 `src/views/HomeView.vue`

```vue
<template><h1>Bienvenue sur le portail gaming !</h1></template>
```

### 📄 `src/views/GamesView.vue`

```vue
<template><h1>🎮 Liste des jeux</h1></template>
```

### 📄 `src/views/ProfileView.vue`

```vue
<template><h1>👤 Ton profil joueur</h1></template>
```

### 📄 `src/views/AboutView.vue`

```vue
<template><h1>ℹ️ À propos de cette app</h1></template>
```

---

## 🔍 Ce que nous avons appris

- Installer et configurer `vue-router`
- Créer des composants de vue dédiés
- Gérer la navigation avec `router-link` et `router-view`

---

## 🎯 Exercices bonus

- Ajouter une route par défaut (`/` redirige vers Accueil)
- Ajouter une route 404 avec `path: '/:pathMatch(.*)*'`
- Styliser dynamiquement la route active dans la navbar

---

✅ Tu es maintenant prêt(e) à explorer les **routes dynamiques** pour afficher des pages de jeu uniques 🎯
