
# 🧪 Chapitre 6 (alt) : Gestion des événements — "Mini clicker game"

## 🎯 Objectif pédagogique

Dans cet exercice, tu vas :

- Gérer les clics et les survols avec `@click`, `@mouseover`, etc.
- Ajouter un gestionnaire d’événements clavier (`keydown`)
- Créer une interaction simple et réactive

Projet fun : **"Mini clicker game"** 🕹️  
Clique sur le monstre pour lui infliger des dégâts. Une attaque spéciale peut être déclenchée avec la barre espace.

- au clic sur le monstre, lui infliger 1 point de dégat et indiquer le message: "Attaque normale !"
- un appuis sur la barre d'espace lui inflige une attaque spéciale de 10 points de vie, + message "Attaque spéciale !"
- au survol, le monstre vous repère et le message indiqué est "👀 Il vous a repéré !"
- utilisez le cycles de vie de votre composant pour ajouter les écouteurs d'événement au clavier
- n'oubliez pas d'enlever les écouteurs si le composant est détruit.

Exercice bonus :

- Créer un compteur, et un champ de saisie de type number pour incrémenter, décrémenter le compteur de dégâts.
- Lorsque j'utilise les flèches du clavier (haut/bas) sur le champ de saisie, avec la touche "shift" enfoncée, je veux que le compteur s'incrément/décrémente par 100 plutôt que par 1.

astuce: utiliser les transformateur d'événement et neutraliser le comportement par défaut qui incrémente par 1.

---

## 🧱 Étape 1 : Composant `App.vue`

```vue
<template>
  <div class="clicker-game">
    <h1>👾 Mini Clicker</h1>
    <p>Dégâts : {{ degats }}</p>
    <div class="monstre" @click="attaquer" @mouseover="effetSurvol">
      👾
    </div>
    <p class="message">{{ message }}</p>
    <div>
      <input 
        type="number"
        aria-label="degats"
        v-model.number="degats"
        min="0"
        @keydown.up.shift.prevent="degats += 100"
        @keydown.down.shift.prevent="degats -= 100" 
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      degats: 0,
      message: ''
    };
  },
  methods: {
    attaquer() {
      this.degats += 1;
      this.message = 'Attaque normale !';
    },
    attaqueSpeciale() {
      this.degats += 10;
      this.message = '💥 Attaque SPÉCIALE !';
    },
    effetSurvol() {
      this.message = '👀 Il vous a repéré !';
    },
    ecouteClavier(e) {
      if (e.code === 'Space') {
        this.attaqueSpeciale();
      }
    }
  },
  mounted() {
    window.addEventListener('keydown', this.ecouteClavier);
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.ecouteClavier);
  }
};
</script>

<style scoped>
.clicker-game {
  text-align: center;
  padding: 2rem;
}

.monstre {
  font-size: 5rem;
  cursor: pointer;
  transition: transform 0.2s;
}
.monstre:hover {
  transform: scale(1.1);
}

.message {
  margin-top: 1rem;
  font-style: italic;
  color: #555;
}
</style>
```

---

## 🔍 Ce que nous avons appris

- Utiliser `@click` pour réagir aux clics
- Réagir à un `@mouseover`
- Écouter les événements du clavier avec `window.addEventListener`
- Nettoyer les écouteurs avec `beforeUnmount()`

---

## 🎯 Exercices bonus

- Ajouter une jauge de PV pour le monstre
- Créer un cooldown pour l’attaque spéciale
- Ajouter un effet sonore à chaque attaque

---

✅ Tu es maintenant prêt(e) à créer un **formulaire complet** pour un personnage de jeu ⚔️
