
# 🧪 Chapitre 2 (alt) : Syntaxe des templates — "Générateur de pseudo gamer"

## 🎯 Objectif pédagogique

Dans cet exercice, tu vas :

- Utiliser `{{ }}` pour interpoler des variables
- Afficher des éléments conditionnellement avec `v-if` / `v-else`
- Générer dynamiquement une liste avec `v-for`

Projet fun : **"Générateur de pseudo gamer"** 🎲  
Génère des pseudos en combinant aléatoirement des préfixes et suffixes selon un type de jeu sélectionné.

---

## 🧱 Étape 1 : Le composant `App.vue`

```vue
<template>
  <div class="pseudo-generator">
    <h1>🎮 Générateur de pseudo</h1>

    <label>Type de jeu :
      <select v-model="type">
        <option value="">-- Choisir --</option>
        <option value="fps">FPS</option>
        <option value="rpg">RPG</option>
        <option value="str">STR</option>
      </select>
    </label>

    <div v-if="type">
      <h2>Pseudos proposés :</h2>
      <ul>
        <li v-for="(pseudo, index) in pseudosGeneres" :key="index">
          {{ pseudo }}
        </li>
      </ul>
    </div>
    <div v-else>
      <p>Veuillez choisir un type de jeu pour générer des pseudos.</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: '',
      bases: {
        fps: ['Sniper', 'Headshot', 'Ghost', 'Reaper'],
        rpg: ['Elwyn', 'Shadowblade', 'Thorin', 'Elandor'],
        str: ['Commandant', 'Tactik', 'Builder', 'ZergRush']
      },
      suffixes: ['X', '77', '_Pro', 'Master', '666']
    };
  },
  computed: {
    pseudosGeneres() {
      if (!this.type) return [];
      const base = this.bases[this.type];
      return base.map(nom => {
        const suffix = this.suffixes[Math.floor(Math.random() * this.suffixes.length)];
        return `${nom}${suffix}`;
      });
    }
  }
};
</script>

<style scoped>
.pseudo-generator {
  text-align: center;
  max-width: 400px;
  margin: auto;
  padding: 2rem;
}
</style>
```

---

## 🔍 Ce que nous avons appris

- Utilisation de `v-model` sur un `select`
- Affichage conditionnel avec `v-if` et `v-else`
- Génération de liste avec `v-for`
- Computed property pour produire des données dynamiques

---

## 🎯 Exercices bonus

- Ajoute une option pour régénérer les pseudos (bouton)
- Change le style de la liste selon le type sélectionné
- Affiche une icône liée au genre de jeu avec `v-if`

---

✅ Tu es maintenant prêt(e) à passer au chapitre 3 : Option vs Composition API avec un compteur de kills ⚡
