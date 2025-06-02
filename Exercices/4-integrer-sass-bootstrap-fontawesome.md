
# 🧪 Chapitre 4 (alt) : Intégrer Sass, Bootstrap et FontAwesome — "Profil de joueur stylé"

## 🎯 Objectif pédagogique

Dans cet exercice, tu vas :

- Intégrer **Sass**, **Bootstrap** et **FontAwesome** dans un projet Vue
- Créer une **fiche profil joueur** moderne avec stats et icônes
- Utiliser les classes Bootstrap pour la mise en page et FontAwesome pour les éléments visuels

Projet fun : **"Profil de joueur stylé"** 🎮  
Un profil de joueur avec nom, avatar, niveau et compétences.

---

## 🧱 Étape 1 : Installation des dépendances

```bash
npm install -D sass
npm install bootstrap
npm install @fortawesome/fontawesome-free
```

### 📄 `main.js`

```js
import { createApp } from 'vue';
import App from './App.vue';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

createApp(App).mount('#app');
```

---

## 🧱 Étape 2 : Composant `App.vue`

```vue
<template>
  <div class="container mt-5 profile">
    <div class="card shadow p-4">
      <div class="text-center">
        <img class="avatar mb-3" src="https://avatars.githubusercontent.com/u/583231?v=4" alt="avatar" />
        <h2>{{ pseudo }}</h2>
        <p class="text-muted">Niveau {{ niveau }}</p>
      </div>
      <ul class="list-group list-group-flush text-start mt-3">
        <li class="list-group-item">
          <i class="fas fa-fire text-danger me-2"></i> Force : {{ stats.force }}
        </li>
        <li class="list-group-item">
          <i class="fas fa-bolt text-warning me-2"></i> Agilité : {{ stats.agilite }}
        </li>
        <li class="list-group-item">
          <i class="fas fa-brain text-info me-2"></i> Intelligence : {{ stats.intelligence }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pseudo: 'DarkBlade',
      niveau: 42,
      stats: {
        force: 80,
        agilite: 65,
        intelligence: 90
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.profile {
  max-width: 400px;

  .avatar {
    width: 120px;
    border-radius: 50%;
    border: 4px solid #ccc;
  }

  .card {
    border-radius: 1rem;
    background: linear-gradient(to bottom right, #1f1f1f, #3f3f3f);
    color: white;
  }

  .list-group-item {
    background: transparent;
    border: none;
    font-size: 1.1rem;
  }
}
</style>
```

---

## 🔍 Ce que nous avons appris

- Installer et configurer Sass, Bootstrap et FontAwesome
- Utiliser les classes Bootstrap pour styliser des composants Vue
- Créer un profil visuellement engageant avec des icônes

---

## 🎯 Exercices bonus

- Ajouter une barre de progression pour le niveau
- Ajouter un bouton “Modifier le profil” avec un modal Bootstrap
- Créer un composant `UserCard` réutilisable

---

✅ Tu es maintenant prêt(e) à attaquer le **binding dynamique de styles et classes** 💚
