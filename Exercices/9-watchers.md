
# 🧪 Chapitre 9 (alt) : Watchers — "Système d’achievements"

## 🎯 Objectif pédagogique

Dans cet exercice, tu vas :

- Utiliser les **watchers** pour détecter des changements dans des données
- Déclencher des actions ou mises à jour quand une condition est remplie
- Gérer un système de succès ou trophées débloqués

Projet fun : **"Système d’achievements"** 🏆  
Un joueur clique pour progresser, et débloque des succès à mesure qu’il atteint des milestones.

---

## 🧱 Étape 1 : Composant `App.vue`

```vue
<template>
  <div class="achievements">
    <h1>🏆 Achievements System</h1>
    <p>Clics : {{ clics }}</p>
    <button @click="clics++">Cliquer</button>

    <div class="liste">
      <h2>Succès débloqués :</h2>
      <ul>
        <li v-for="(success, index) in succesDebloques" :key="index">
          ✅ {{ success }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clics: 0,
      succesDebloques: [],
      conditions: [
        { seuil: 10, nom: 'Premier réflexe' },
        { seuil: 50, nom: 'Doigt d’acier' },
        { seuil: 100, nom: 'Clickmaster 3000' }
      ]
    };
  },
  watch: {
    clics(newVal) {
      this.conditions.forEach(condition => {
        if (newVal >= condition.seuil && !this.succesDebloques.includes(condition.nom)) {
          this.succesDebloques.push(condition.nom);
        }
      });
    }
  }
};
</script>

<style scoped>
.achievements {
  text-align: center;
  padding: 2rem;
}
button {
  margin-top: 1rem;
  padding: 0.5rem 1.5rem;
}
.liste {
  margin-top: 2rem;
}
</style>
```

---

## 🔍 Ce que nous avons appris

- Déclarer un `watch` sur une donnée (`clics`)
- Réagir à une condition atteinte pour mettre à jour un tableau
- Empêcher les doublons dans un tableau grâce à `includes`

---

## 🎯 Exercices bonus

- Ajouter une animation ou alerte visuelle lors du déblocage
- Ajouter un succès secret qui ne s’affiche qu’au dernier moment
- Utiliser `localStorage` pour conserver les succès débloqués

---

✅ Tu es maintenant prêt(e) à créer des **composants** pour structurer ton interface 🎴
