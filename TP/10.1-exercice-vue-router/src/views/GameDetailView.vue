<template>
  <div class="container">
    <div class="game-detail" v-if="game">
      <div class="game-header">
        <button @click="goBack" class="btn btn-dark">← Retour à la liste</button>
      </div>

      <div class="game-content">
        <div class="game-main-info">
          <h1>{{ game.name }}</h1>
          <div class="game-meta">
            <div class="rating-badge">
              <span class="star">⭐</span>
              <span class="score">{{ game.rating }}/10</span>
            </div>
            <div class="year-badge">
              <span class="calendar">📅</span>
              <span>{{ game.year }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="error">
      <h2>Jeu introuvable</h2>
      <button @click="goBack" class="btn btn-dark">Retour</button>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
const $router = useRouter()
const $route = useRoute()

const platformId = $route.params.platformId
const gameId = $route.params.gameId

import { games } from '@/seeds/datas'
const game = games[platformId].find((game) => game.id === gameId)

const goBack = () => {
  $router.go(-1)
}
</script>
