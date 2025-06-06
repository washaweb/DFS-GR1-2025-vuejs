import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useGameStore = defineStore('game', () => {
  // déclarer un tableau vide (qui sera rempli par les données de l'API)
  const games = ref([])
  const game = ref(null)

  const gamesCount = computed(() => {
    return games.value?.length || 0
  })

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

  // faire une nouvelle fonction poru récupérer la liste des jeux
  const getGames = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/games`)
      games.value = response.data
    } catch (error) {
      console.log(error)
    }
  }

  // modifier cette fonction pour faire appel à l'api afin de récupérer un jeu
  const getGame = async (id) => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/games/${id}`)
      game.value = response.data
    } catch (error) {
      console.log(error)
    }
  }

  // modifier cette fonction pour faire appel à l'api afin de récupérer un jeu
  const patchGame = async (id, data) => {
    try {
      const response = await axios.patch(`${import.meta.env.VITE_API_URL}/games/${id}`, data)
      game.value = response.data
    } catch (error) {
      console.log(error)
    }
  }

  // modifier cette fonction pour faire appel à l'api afin de récupérer un jeu
  const createGame = async (data) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/games`, data)
      game.value = response.data
    } catch (error) {
      console.log(error)
    }
  }

  // modifier cette fonction pour faire appel à l'api afin de récupérer un jeu
  const deleteGame = async (id) => {
    try {
      const response = await axios.delete(`${import.meta.env.VITE_API_URL}/games/${id}`)
      game.value = response.data
    } catch (error) {
      console.log(error)
    }
  }

  return {
    games,
    game,
    gamesCount,
    gameStatsByGenre,
    getGames,
    getGame,
    patchGame,
    createGame,
    deleteGame,
  }
})
