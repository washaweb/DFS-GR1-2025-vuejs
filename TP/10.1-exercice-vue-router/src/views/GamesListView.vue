<template>
  <h2 class="h4 mb-3">Jeux disponibles</h2>
  <div class="games-grid">
    <div v-for="game in platformGames" :key="game.id" class="game-card" @click="goToGame(game.id)">
      <h3>{{ game.name }}</h3>
      <div class="game-info d-flex gap-2">
        <span class="rating">⭐ {{ game.rating }}/10</span>
        <span class="year">📅 {{ game.year }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
const $route = useRoute()
const $router = useRouter()

const platformId = $route.params.platformId

import { games } from '@/seeds/datas'
const platformGames = games[platformId]

const goToGame = (gameId) => {
  $router.push({
    name: 'game',
    params: {
      platformId,
      gameId,
    },
  })
}
</script>

<style scoped>
.games-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}

.game-card {
  border: 1px solid #ccc;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 5px;
}

.game-card:hover {
  transform: translateY(-5px);
  border-color: #4caf50;
  box-shadow: 0 8px 25px rgba(76, 175, 80, 0.2);
}
</style>
