
# 🧪 Chapitre 5 (alt) : Binding styles et classes — "Barre de vie dynamique"

## 🎯 Objectif pédagogique

Dans cet exercice, tu vas :

- Utiliser `:style` et `:class` pour modifier dynamiquement l'apparence d’un élément
- Créer des classes CSS conditionnelles
- Lier des données à des styles en temps réel

Projet fun : **"Barre de vie dynamique"** 💚  
Une barre de points de vie qui change de couleur et de taille selon les PV du joueur.

---

## 🧱 Étape 1 : Composant `App.vue`

```vue
<template>
  <div class="container">
    <h1>🧍 Barre de Vie</h1>
    <div class="barre-de-vie" :style="styleBarre" :class="classVie"></div>

    <div class="controls">
      <button @click="soigner">+ Soigner</button>
      <button @click="blesser">- Blesser</button>
    </div>

    <p>PV : {{ hp }}/100</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hp: 100
    };
  },
  computed: {
    styleBarre() {
      return {
        width: this.hp + '%'
      };
    },
    classVie() {
      if (this.hp > 60) return 'hp-haut';
      else if (this.hp > 30) return 'hp-moyen';
      else return 'hp-bas';
    }
  },
  methods: {
    soigner() {
      if (this.hp < 100) this.hp += 10;
    },
    blesser() {
      if (this.hp > 0) this.hp -= 10;
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 400px;
  margin: auto;
  text-align: center;
  padding: 2rem;
}

.barre-de-vie {
  height: 30px;
  border-radius: 5px;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
}

.hp-haut {
  background-color: #4caf50;
}

.hp-moyen {
  background-color: #ffc107;
}

.hp-bas {
  background-color: #f44336;
}

.controls button {
  margin: 0.5rem;
  padding: 0.5rem 1rem;
}
</style>
```

---

## 🔍 Ce que nous avons appris

- Utiliser `:style` pour modifier dynamiquement la largeur
- Utiliser `:class` pour changer la couleur selon une condition
- Appliquer plusieurs types de binding sur un même élément

---

## 🎯 Exercices bonus

- Afficher un emoji selon l’état de santé (😄 / 😟 / ☠️)
- Ajouter un effet de clignotement en cas de danger (< 20 PV)
- Empêcher de dépasser 0 ou 100 PV avec des messages d’alerte

---

✅ Tu es maintenant prêt(e) à gérer les **événements utilisateur** dans un mini clicker game 🕹️
