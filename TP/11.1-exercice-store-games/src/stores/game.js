import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import gameList from '@/seeds/games.js'

export const useGameStore = defineStore('game', () => {
  const games = ref(gameList)
  const game = ref(null)

  const gamesCount = computed(() => {
    return games.value?.length || 0
  })

  const getGame = (id) => {
    game.value = games.value.find((game) => game.id === parseInt(id))
  }

  const gameStatsByGenre = computed(() => {
    // format data like stats = [
    //  { name: 'GenreName', value: 4 },
    // ]
    const stats = []
    const genres = {}
    games.value.forEach((game) => {
      if (!genres[game.genre]) {
        genres[game.genre] = 1
      } else {
        genres[game.genre]++
      }
    })
    for (const genre in genres) {
      stats.push({
        name: genre,
        value: genres[genre],
      })
    }
    stats.sort((a, b) => b.value - a.value)
    return stats
  })

  return {
    games,
    game,
    gamesCount,
    gameStatsByGenre,
    getGame,
  }
})
