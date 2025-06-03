
# 🧪 Chapitre 7 (alt) : Form Input Binding — "Créateur de personnage"

## 🎯 Objectif pédagogique

Dans cet exercice, tu vas :

- Lier des champs de formulaire avec `v-model`
- Gérer différents types d’inputs : texte, select, range, checkbox
- Afficher un récapitulatif dynamique d’un formulaire

Projet fun : **"Créateur de personnage"** ⚔️  
L’utilisateur remplit un formulaire pour créer un héros avec nom, classe, stats et compétences.

Les caractéristiques d'une fiche de personnage sont les suivante :

- nom: '',
- classe (à choisir entre): voleur, guerrier, magicien, rodeur,
- compétences (bonus: 100 points à répartir entre): intelligence, force, agilité, charisme
- competences (bonus: max 3 cochées): magie, furtivité, rapidité, crochetage, arme de jet, arme de melée

---

## 🧱 Étape 1 : Composant `App.vue`

```vue
<template>
  <div class="creator container">
    <h1>🛡️ Créateur de personnage</h1>

    <form @submit.prevent>
      <input type="text" v-model="nom" placeholder="Nom du héros" />

      <select v-model="classe">
        <option disabled value="">Choisis ta classe</option>
        <option value="guerrier">Guerrier</option>
        <option value="mage">Mage</option>
        <option value="voleur">Voleur</option>
      </select>

      <label>Force : {{ force }}</label>
      <input type="range" v-model="force" min="0" max="100" />

      <label>Agilité : {{ agilite }}</label>
      <input type="range" v-model="agilite" min="0" max="100" />
      
      <label>Charisme : {{ charisme }}</label>
      <input type="range" v-model="charisme" min="0" max="100" />
      
      <label>Intelligence : {{ intelligence }}</label>
      <input type="range" v-model="intelligence" min="0" max="100" />

      <label>
        <input type="checkbox" v-model="competences.magie" />
        Peut utiliser la magie
      </label>
      <label>
        <input type="checkbox" v-model="competences.furtivite" />
        Maître de la furtivité
      </label>
      <label>
        <input type="checkbox" v-model="competences.rapidide" />
        Maître de la rapidité
      </label>
      <label>
        <input type="checkbox" v-model="competences.crochetage" />
        Maître du crochetage
      </label>
      <label>
        <input type="checkbox" v-model="competences.arme_jet" />
        Maître des arme de jet
      </label>
      <label>
        <input type="checkbox" v-model="competences.arme_melee" />
        Maître des arme de mélée
      </label>
    </form>

    <div class="carte mt-4 p-3 border rounded bg-light">
      <h2>{{ nom || 'Nom du héros' }}</h2>
      <p>Classe : {{ classe || 'Non définie' }}</p>
      <p>Force : {{ force }}</p>
      <p>Agilité : {{ agilite }}</p>
      <p>Compétences :</p>
      <ul>
        <li v-if="competences.magie">Magie</li>
        <li v-if="competences.furtivite">Furtivité</li>
        <li v-if="competences.rapidide">Rapidité</li>
        <li v-if="competences.crochetage">Crochetage</li>
        <li v-if="competences.arme_jet">Armes de Jet</li>
        <li v-if="competences.arme_melee">Armes de Mélée</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nom: '',
      classe: '',
      force: 25,
      agilite: 25,
      charisme: 25,
      intelligence: 25,
      competences: {
        magie: false,
        furtivite: false,
        rapidite: false,
        crochetage: false,
        arme_jet: false,
        arme_melee: false,
      }
    };
  }
};
</script>

<style scoped>
.creator {
  max-width: 500px;
  margin: auto;
  padding: 2rem;
}

input[type="text"],
select {
  display: block;
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.5rem;
}

input[type="range"] {
  width: 100%;
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
}
</style>
```

---

## 🔍 Ce que nous avons appris

- Utiliser `v-model` sur différents types d’inputs
- Créer un formulaire complexe lié à un objet Vue
- Afficher dynamiquement un résumé à partir du formulaire

---

## 🎯 Exercices bonus

- Ajouter un champ pour uploader une image d’avatar
- Ajouter un bouton “Sauvegarder” qui affiche une alerte personnalisée
- Créer un composant `CharacterCard` pour réutiliser la présentation

---

✅ Tu es maintenant prêt(e) à explorer les **hooks du cycle de vie** pour automatiser des effets !
