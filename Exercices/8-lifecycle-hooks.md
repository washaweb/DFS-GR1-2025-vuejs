
# 🧪 Chapitre 8 (alt) : Lifecycle Hooks — "Simulateur jour/nuit"

## 🎯 Objectif pédagogique

Dans cet exercice, tu vas :

- Utiliser les hooks `mounted`, `beforeUnmount` et `created`
- Mettre en place une animation automatique déclenchée au chargement
- Simuler un cycle jour → coucher → nuit → lever
- Démontrer l’usage de `beforeUnmount` via un démontage manuel

Projet fun : **"Simulateur jour/nuit"** 🌅  
Une scène qui change automatiquement au fil du temps grâce au cycle de vie Vue. Le joueur peut quitter la scène, ce qui démonte le composant.

---

## 🧱 Étape 1 : Composant `App.vue`

```vue
<template>
  <div class="container text-center">
    <button v-if="afficherScene" @click="afficherScene = false" class="btn btn-danger mb-3">
      Quitter la scène
    </button>
    <button v-else @click="afficherScene = true" class="btn btn-success mb-3">
      Revenir dans la scène
    </button>

    <SceneVue v-if="afficherScene" />
  </div>
</template>

<script>
import SceneVue from './components/SceneVue.vue';

export default {
  components: {
    SceneVue
  },
  data() {
    return {
      afficherScene: true
    };
  }
};
</script>
```

---

## 🧱 Étape 2 : Composant `SceneVue.vue`

```vue
<template>
  <div :class="moment" class="scene">
    <h1>{{ titre }}</h1>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      moment: 'jour',
      titre: '',
      description: '',
      index: 0,
      cycle: ['jour', 'coucher', 'nuit', 'lever'],
      titres: {
        jour: '☀️ Jour',
        coucher: '🌇 Coucher du soleil',
        nuit: '🌙 Nuit',
        lever: '🌄 Lever du soleil'
      },
      descriptions: {
        jour: 'Il fait beau et lumineux.',
        coucher: 'Le soleil disparaît lentement.',
        nuit: 'Silence et obscurité...',
        lever: 'Un nouveau jour commence.'
      },
      intervalId: null
    };
  },
  methods: {
    changerMoment() {
      this.index = (this.index + 1) % this.cycle.length;
      this.moment = this.cycle[this.index];
      this.titre = this.titres[this.moment];
      this.description = this.descriptions[this.moment];
    }
  },
  mounted() {
    console.log('🌞 Composant monté !');
    this.changerMoment(); // initialisation
    this.intervalId = setInterval(this.changerMoment, 4000);
  },
  beforeUnmount() {
    console.log('🌒 Composant démonté !');
    clearInterval(this.intervalId);
  }
};
</script>

<style scoped>
.scene {
  text-align: center;
  padding: 3rem;
  transition: background 1s ease;
  color: white;
  min-height: 300px;
  border-radius: 10px;
}

.jour {
  background: linear-gradient(to top, #87ceeb, #fefcea);
}

.coucher {
  background: linear-gradient(to top, #ff9966, #ff5e62);
}

.nuit {
  background: linear-gradient(to top, #2c3e50, #4ca1af);
}

.lever {
  background: linear-gradient(to top, #f9d423, #ff4e50);
}
</style>
```

---

## 🔍 Ce que nous avons appris

- Utiliser le hook `mounted()` pour initialiser un effet
- Nettoyer un effet à `beforeUnmount()` déclenché par un démontage manuel
- Contrôler l'affichage conditionnel d’un composant via `v-if`

---

## 🎯 Exercices bonus

- Ajouter un message dans la console à `created()` pour repérer l’ordre des hooks
- Enregistrer le cycle courant dans `localStorage`
- Ajouter un bouton “pause” pour interrompre temporairement l’animation

---

✅ Tu es maintenant prêt(e) à utiliser des **watchers** pour déclencher des actions selon l’évolution de l’état 🏆
