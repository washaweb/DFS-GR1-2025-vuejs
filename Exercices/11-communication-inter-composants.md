
# 🧪 Chapitre 11 (alt) : Communication inter-composants — "Boutique de jeux"

## 🎯 Objectif pédagogique

Dans cet exercice, tu vas :

- Faire communiquer un composant parent et plusieurs enfants
- Utiliser les **props** pour transmettre des données
- Utiliser `$emit` pour envoyer des événements de l’enfant vers le parent

Projet fun : **"Boutique de jeux"** 🛒  
Un composant parent affiche une boutique avec des produits. Chaque carte jeu permet d’ajouter au panier (géré par le parent).

- Crée un composant panier
- Crée une liste de composants jeux, chaque jeu a un prix, et un bouton pour l'ajouter au panier
- utilise la communication inter-composants pour modifier le panier, lorsqu'un jeu est ajouté à la sélection du panier
- voici les caractéristiques d'un jeu exemple:

```js
{ 
  nom: 'Zelda',
  prix: 59, 
  image: 'The_Legend_of_Zelda_Tears_of_the_Kingdom_cover.jpg'
},
```

---

## 🧱 Étape 1 : Composant enfant `JeuCard.vue`

### 📄 `src/components/JeuCard.vue`

```vue
<template>
  <div class="jeu-card">
    <img :src="jeu.image" :alt="jeu.nom" />
    <h3>{{ jeu.nom }}</h3>
    <p>{{ jeu.prix }} €</p>
    <button @click="$emit('ajouterAuPanier', jeu)">Ajouter au panier</button>
  </div>
</template>

<script>
export default {
  name: 'JeuCard',
  props: {
    jeu: Object
  }
};
</script>

<style scoped>
.jeu-card {
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 6px;
  width: 200px;
  text-align: center;
  background-color: #fafafa;
}
.jeu-card img {
  width: 100%;
  height: auto;
  border-radius: 4px;
  margin-bottom: 0.5rem;
}
button {
  margin-top: 0.5rem;
}
</style>
```

---

## 🧱 Étape 2 : Composant parent `App.vue`

### 📄 `src/App.vue`

```vue
<template>
  <div class="boutique container text-center">
    <h1>🛒 Boutique de Jeux</h1>

    <div class="catalogue">
      <JeuCard
        v-for="(jeu, index) in jeux"
        :key="index"
        :jeu="jeu"
        @ajouterAuPanier="ajouterAuPanier"
      />
    </div>

    <h2 class="mt-4">🎁 Panier ({{ panier.length }} items)</h2>
    <ul class="list-group list-group-flush text-start">
      <li v-for="(item, i) in panier" :key="i">
        {{ item.nom }} - {{ item.prix }} €
      </li>
    </ul>
  </div>
</template>

<script>
import JeuCard from './components/JeuCard.vue';

export default {
  components: { JeuCard },
  data() {
    return {
      jeux: [
        { nom: 'Zelda', prix: 59, image: 'https://upload.wikimedia.org/wikipedia/en/3/3d/The_Legend_of_Zelda_Tears_of_the_Kingdom_cover.jpg' },
        { nom: 'Hollow Knight', prix: 14, image: 'https://upload.wikimedia.org/wikipedia/en/3/32/Hollow_Knight_cover.jpg' },
        { nom: 'Celeste', prix: 19, image: 'https://upload.wikimedia.org/wikipedia/en/6/69/Celeste_boxart.jpg' }
      ],
      panier: []
    };
  },
  methods: {
    ajouterAuPanier(jeu) {
      this.panier.push(jeu);
    }
  }
};
</script>

<style scoped>
.catalogue {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
```

---

## 🔍 Ce que nous avons appris

- Transmettre des données d’un parent vers un enfant via `props`
- Utiliser `$emit` pour faire remonter une action vers le parent
- Gérer un état centralisé (panier) dans le composant parent

---

## 🎯 Exercices bonus

- Ajouter un bouton pour retirer un jeu du panier
- Afficher le total du panier
- Créer un composant `Panier.vue` séparé pour isoler l’affichage

---

✅ Tu es maintenant prêt(e) à utiliser des **slots** pour rendre un composant plus flexible 📋
