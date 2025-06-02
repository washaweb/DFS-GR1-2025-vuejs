
# 🧪 Chapitre 16 (exercice) — "VueNews : le lecteur d’articles JSONPlaceholder"

## 🎯 Objectif

Construire une application qui :
- Récupère dynamiquement une liste d’articles
- Affiche les titres, avec état de chargement et gestion des erreurs
- Utilise `fetch` ou `axios` selon la version choisie
- Option bonus : implémenter la logique via **Pinia**

---

## 💡 Consignes

Crée un projet avec :

1. Une page principale avec le titre **VueNews 📰**
2. Un bouton **"Charger les articles"**
3. Une zone qui affiche :
   - un message de chargement
   - un message d'erreur en cas d’échec
   - la liste des titres une fois reçus

---

## 🧱 Étapes

### 🔧 Étape 1 : Setup

```bash
npm install axios pinia
```

---

### ✅ Version 1 : Avec Fetch

Utiliser `fetch()` dans le composant pour appeler :
```
https://jsonplaceholder.typicode.com/posts
```

---

### ✅ Version 2 : Avec Axios

Même logique que version 1 mais avec `axios.get()`  
Bonus : gérer les erreurs avec `try/catch`

---

### ✅ Version 3 : Avec Pinia (bonus)

- Créer un store `usePostStore.js`
- Gérer `posts`, `loading`, `error` dans l’état
- Créer une `action` `fetchPosts()`
- Utiliser le store dans ton composant avec `usePostStore()`

---

## 🧪 Test attendu

- Cliquer sur le bouton affiche "Chargement..."
- Les articles sont affichés ou un message d’erreur s’il y a un problème
- Une seule source de vérité dans le store si tu fais la version bonus

---

## 🎯 Bonus

- Afficher un message d’erreur stylisé
- Ajouter un bouton "Recharger"
- Permettre d’afficher un article entier dans un composant modal (slot ?)

---

✅ Une fois terminé, tu sauras consommer **toutes les APIs REST** les doigts dans le nez ! 😎
