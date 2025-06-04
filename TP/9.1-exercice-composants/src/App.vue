<template>
  <div class="container pt-4">
    <div class="row">
      <div class="col-md-6">
        <h1>Liste de jeux</h1>
        <!-- liste des jeux, 
         - on injecte les props game et isFav
         - on écoute l'événement editFav qui est émis par le composant GameCard, on récupère le boolean $event émis par le composant GameCard et on passe le jeu en paramètre de la fonction editFav qui est dans le parent (ici dans App.vue)
         -->
        <GameCard
          v-for="game in gameList"
          :key="game.id"
          :game="game"
          :isFav="isInFavs(game.id)"
          @editFav="editFav($event, game)"
        />

        <!-- debug -->
        <pre>{{ gameList }}</pre>
      </div>
      <div class="col-md-6">
        <h1>Liste des favoris</h1>
        <!-- on liste les jeux favoris qui sont dans favList[] -->
        <GameCardSmall v-for="game in favList" :key="game.id" :game="game" />

        <!-- debug -->
        <pre>
          {{ favList }}
        </pre>

        <h2 class="h3 mb-3">Correction de l'exercice 2 : composant global BBouton</h2>
        <div class="d-flex gap-2">
          <BButton iconRight="user" variant="primary">Profil</BButton>
          <BButton iconLeft="envelope" variant="dark">Nous contacter</BButton>
        </div>
        <div class="my-2">
          <BButton iconLeft="home" size="lg" variant="info" class="text-warning">Big</BButton>
        </div>
        <div class="mY-2">
          <BButton
            iconLeft="arrow-right"
            iconRight="exclamation-triangle"
            size="sm"
            variant="danger"
            >small</BButton
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// import des données seed
import games from '@/seeds/games.js'

import GameCard from '@/components/GameCard.vue'
import GameCardSmall from '@/components/GameCardSmall.vue'
// le composant BButton est importé globalement voir dans `src/main.js`

// liste des jeux et des favoris
const gameList = ref(games) //ici on injecte les données seed chargées depuis le fichier `src/seeds/games.js`
const favList = ref([])

// modifier la liste des favoris
const editFav = (isFav, game) => {
  // console.log(isFav, game)
  // si le jeu est déjà dans la liste des favoris, on le retire
  if (!isFav) {
    favList.value = favList.value.filter((fav) => fav.id !== game.id)
    return
    // sinon on l'ajoute
  } else {
    favList.value.push(game)
  }
}

// vérifier si un jeu est dans la liste des favoris
const isInFavs = (id) => {
  return favList.value.some((fav) => fav.id === id)
}
</script>
