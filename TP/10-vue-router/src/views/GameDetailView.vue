<template>
  <div class="container my-4">
    <h1>Game detail</h1>
    <template v-if="game">
      <p>Id du jeu :</p>
      <pre>
        {{ $route.params.id }}
        {{ id }}
        {{ game }}
      </pre>
    </template>
    <template v-else>
      <p>Le jeu n'existe pas</p>
    </template>
    <BButton variant="dark" iconLeft="arrow-left" @click="$router.push('/games')">Retour</BButton>
  </div>
</template>

<script setup>
import { ref } from 'vue'
// pour utiliser la route dans le controleur, il faut importer le composable useRoute
// import { useRoute } from 'vue-router'
// const route = useRoute()
import games from '@/seeds/games.js'

// pour utiliser les params de la route dans les props, il faut déclarer props:true dans la configuration de la route (fichier router.js)
const props = defineProps({
  id: {
    type: String,
    default: '',
  },
})

// je crée une ref qui va contenir le jeu dont l'id est dans l'url
// const game = ref(games.find((game) => game.id === parseInt(route.params.id)))
const game = ref(games.find((game) => game.id === parseInt(props.id)))
</script>
