<template>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <h1>Exemple de réactivité</h1>
        <p>Afficher une valeur de variable : {{ title }}</p>
        <p>
          On peut interpoler des résultats dans les moustaches {{ `${title} - mon super site` }}
        </p>

        <p>Utilisateur : {{ userFullName }}</p>

        <div class="mb-3">
          <label for="title" class="form-label">Modifier le titre</label>
          <input type="text" class="form-control" id="title" v-model="title" />
        </div>

        <!-- directives conditionnelles (voir aussi le v-show)-->
        <p v-if="online" class="text-success">Je suis online</p>
        <p v-else class="text-danger">Je suis offline</p>

        <!-- on peut utiliser des conditions complexes -->
        <p v-if="age >= 18">Acces autorisé pour les majeurs</p>
        <p v-else-if="age >= 16">Acces restreint</p>
        <p v-else>Acces interdit</p>

        <ul>
          <!-- v-for permet de boucler sur un tableau de valeurs, ne pas oublier de mettre une clé unique avec :key -->
          <li :key="animal + '-' + i" v-for="(animal, i) in zoo">{{ animal }}</li>
        </ul>

        <div class="d-flex gap-2">
          <!-- v-on permet de déclencher des événements JS : click, dbl-click, hover, focus, blur... -->
          <!-- ici la logique est directement dans le template -->
          <button v-on:click="zoo.push('singe')" class="btn btn-primary">Ajouter un singe</button>
          <!-- on peut utiliser la syntaxe raccourcie @click et faire appel à une fonction pour garder la logique dans le controlleur (script)-->
          <button @click="onRemoveLastAnimal" class="btn btn-dark">
            Retirer le dernier animal
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
// les variables
const title = ref('mon titre')
const online = ref(false)
const age = ref(18)
const user = ref({
  firstname: 'John',
  lastname: 'Doe',
  title: 'M.',
})

// les variables calculées sont mis en cache, elles sont automatiquement recalculées si l'une des variables dont dépent le calcul est mise à jour, sinon, c'est le cache du resultat qui est affiché.
const userFullName = computed(() => {
  return `${user.value.title} ${user.value.firstname} ${user.value.lastname}`
})

// un tableau
const zoo = ref(['girafe', 'lion', 'singe', 'croco'])

// une fonction qui est appelée sur le click du bouton
const onRemoveLastAnimal = () => {
  zoo.value.pop()
}
</script>
