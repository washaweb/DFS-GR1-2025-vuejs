<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-md-6">
        <h1>Liste de jeux</h1>
        <!-- liste des jeux, 
          - on injecte les props game et isFav
          - on écoute l'événement editFav qui est émis par le composant GameCard, on récupère le boolean $event émis par le composant GameCard et on passe le jeu en paramètre de la fonction editFav qui est dans le parent (ici dans App.vue)
          -->
        <div class="grid-game">
          <GameCard
            v-for="game in gameList"
            :key="game.id"
            :game="game"
            :isFav="isInFavs(game.id)"
            @editFav="editFav($event, game)"
          />
        </div>
      </div>
      <div class="col-md-6">
        <h1>Liste des favoris</h1>
        <!-- on liste les jeux favoris qui sont dans favList[] -->
        <GameCardSmall v-for="game in favList" :key="game.id" :game="game" />
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

<style scoped>
.grid-game {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
</style>
