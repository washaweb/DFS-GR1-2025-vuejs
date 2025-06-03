
# 🧪 Chapitre 5 : Binding des attributs, styles et classes

## 🎯 Objectif pédagogique

Dans ce chapitre, nous allons :

- Comprendre comment lier dynamiquement des classes CSS avec `:class`
- Modifier dynamiquement des styles inline avec `:style`
- Appliquer des effets visuels conditionnels en fonction des données

Projet exemple : **Mood Button – Changeur d’humeur**

Les humeurs du joueur :
[
  { mood: 'happy', color: 'yellow', emoji: '😄' },
  { mood: 'sad', color: 'lightblue', emoji: '😢' },
  { mood: 'angry', color: 'lightcoral', emoji: '😡' },
  { mood: 'zen', color: 'lightgreen', emoji: '🧘‍♂️' }
]
un clic sur un bouton "changer d'humeur" permet de passer d'un humeur à la l'autre...

- créer une classe par humeur (happy, sad, angry, zen)
- pour chaque humeur, utiliser une image d'arrière plan différente (modifiée par la classe utilisée)
- changer aussi la couleur du texte, et l'émoji affiché


---

## 🎨 Étape 1 : Description du projet

Nous allons créer un bouton qui change d’apparence selon l’humeur de l'utilisateur.  
Chaque clic change l’humeur, les couleurs et les emojis affichés.

---

## 📄 `App.vue`

```vue
<template>
  <div class="container">
    <h1>Comment te sens-tu aujourd’hui ?</h1>
    <div class="mood-display" :class="moodClass" :style="moodStyle">
      {{ emoji }}
    </div>
    <button @click="changerHumeur">Changer d’humeur</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 0,
      humeurs: [
        { mood: 'happy', color: 'yellow', emoji: '😄' },
        { mood: 'sad', color: 'lightblue', emoji: '😢' },
        { mood: 'angry', color: 'lightcoral', emoji: '😡' },
        { mood: 'zen', color: 'lightgreen', emoji: '🧘‍♂️' }
      ]
    };
  },
  computed: {
    humeurActuelle() {
      return this.humeurs[this.index];
    },
    moodClass() {
      return this.humeurActuelle.mood;
    },
    moodStyle() {
      return {
        backgroundColor: this.humeurActuelle.color
      };
    },
    emoji() {
      return this.humeurActuelle.emoji;
    }
  },
  methods: {
    changerHumeur() {
      this.index = (this.index + 1) % this.humeurs.length;
    }
  }
};
</script>

<style scoped>
.container {
  text-align: center;
  padding: 2rem;
}

.mood-display {
  font-size: 5rem;
  margin: 2rem auto;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.happy {
  /* personnaliser le style ici*/
}
.sad {
  /* personnaliser le style ici*/
}
.angry {
  /* personnaliser le style ici*/
}
.zen {
  /* personnaliser le style ici*/
}

button {
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  border: none;
  background-color: #333;
  color: white;
  border-radius: 6px;
  cursor: pointer;
}
</style>
```

---

## 🔍 Ce que nous avons appris

- Utiliser `:class` pour appliquer des classes dynamiquement
- Utiliser `:style` pour appliquer des styles inline selon les données
- Créer une interaction visuelle simple et engageante

---

## 🎯 Exercices bonus

- Ajoute un texte descriptif sous l’emoji qui affiche le nom de l’humeur.
- Crée un bouton “Reset” qui remet l’humeur à “happy”.
- Ajoute une animation CSS (ex: rotation, scale) à chaque changement d’humeur.

---

✅ Tu es maintenant prêt(e) à gérer les événements avec VueJS !
