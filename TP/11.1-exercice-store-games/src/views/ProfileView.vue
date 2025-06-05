<template>
  <div class="container my-4">
    <h1 class="h2 pb-3 mb-3 border-bottom">Profil de l'utilisateur</h1>
    <div class="row" v-if="user">
      <div class="col-md-8">
        <h2 class="h3 mb-4">
          <i class="fa-solid fa-gamepad me-2 text-info"></i>Favoris de l'utilisateur
        </h2>
        <div class="grid-game my-3" v-if="userFavs && userFavs.length > 0">
          <GameCard
            v-for="game in userFavs"
            :key="game.id"
            :game="game"
            :isFav="true"
            :showButtons="false"
          />
        </div>
      </div>
      <div class="col-md-4">
        <h2 class="h3 mb-4">
          <i class="fa-solid fa-user me-2 text-info"></i>Profil de l'utilisateur
        </h2>
        <ul class="list-group mb-4">
          <li class="list-group-item">Nom: {{ user.name }}</li>
          <li class="list-group-item">Pseudo: {{ user.pseudoname }}</li>
          <li class="list-group-item">Age: {{ user.age }}</li>
          <li class="list-group-item">Nombre de favoris : {{ userFavsCount }}</li>
        </ul>
        <ul v-if="userFavsGamesGenre && userFavsGamesGenre.length" class="list-group mb-4">
          <li class="list-group-item fw-bold">Genres préférés :</li>
          <li :key="genre" v-for="genre in userFavsGamesGenre" class="list-group-item">
            {{ genre }}
          </li>
        </ul>

        <BButton iconLeft="arrow-left" variant="dark" class="w-100 mb-3" @click="$router.push('/')">
          Retour
        </BButton>
      </div>
    </div>
    <p v-else><i class="fas fa-exclamation-triangle fa-2x"></i>Aucune donnée disponible.</p>
  </div>
</template>

<script setup>
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'
import GameCard from '@/components/GameCard.vue'

const userStore = useUserStore()
const { user, userFavs, userFavsCount, userFavsGamesGenre } = storeToRefs(userStore)
</script>

<style scoped>
.grid-game {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}
</style>
