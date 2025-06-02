
# 🧪 Chapitre 1 (alt) : Initialiser une application VueJS — "Hello Gamer"

## 🎯 Objectif pédagogique

Dans cet exercice, tu vas :
- Initialiser une app VueJS avec Vite
- Afficher dynamiquement un nom dans l’interface
- Commencer à explorer le binding avec `{{ variable }}`

Projet fun : **"Hello Gamer"** 👾  
Une app qui accueille le joueur par son prénom avec un message personnalisé.

---

## 🔧 Étape 1 : Créer le projet avec Vite

```bash
npm create vite@latest hello-gamer
cd hello-gamer
npm install
npm run dev
```

- Sélectionner le framework : `Vue`
- Choisir `JavaScript`

---

## 🧱 Étape 2 : Nettoyer le composant `App.vue`

```vue
<template>
  <div class="container">
    <h1>🎮 Bonjour {{ joueur }} !</h1>
    <p>Bienvenue dans l’univers du gaming VueJS.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      joueur: 'PlayerOne'
    };
  }
};
</script>

<style scoped>
.container {
  text-align: center;
  margin-top: 3rem;
  font-family: 'Courier New', Courier, monospace;
}
</style>
```

---

## 🔍 Ce que nous avons appris

- Initialiser un projet Vue avec Vite
- Créer une variable `joueur` dans `data()`
- Afficher une donnée avec `{{ variable }}`
- Appliquer un style de base avec `<style scoped>`

---

## 🎯 Exercices bonus

- Ajouter une variable `univers` (ex: “fantasy”, “cyberpunk”) et afficher un message différent selon cette valeur
- Créer une animation d’apparition du texte avec CSS
- Demander le prénom du joueur via `prompt()` et l’injecter dans la variable `joueur` avec `mounted()`

---

✅ Tu es maintenant prêt(e) à passer au chapitre 2 : Syntaxe des templates (version geek 🎲) !
