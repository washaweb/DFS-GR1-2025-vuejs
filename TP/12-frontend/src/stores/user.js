import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
// plus besoin des données seeds
// import userData from '@/seeds/user'

export const useUserStore = defineStore('user', () => {
  const user = ref(null)

  console.log(import.meta.env.VITE_API_URL)
  // raccourcis vers les favoris du joueur
  const userFavs = computed(() => user.value?.favs || [])

  // nombre de jeux favoris du joueur
  const userFavsCount = computed(() => user.value?.favs?.length || 0)

  // liste des catégories des jeux favoris du joueur
  const userFavsGamesGenre = computed(() => {
    const genres = []
    if (user.value?.favs.length > 0) {
      user.value.favs.forEach((fav) => {
        if (!genres.includes(fav.genre)) {
          genres.push(fav.genre)
        }
      })
    }
    return genres
  })

  // récupérer les données de l'utilisateur depuis l'API
  const getUserById = async (id) => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/users/${id}`)
    user.value = response.data
  }

  // enregistrer les données de l'utilisateur
  const updateUser = async (data) => {
    const response = await axios.patch(
      `${import.meta.env.VITE_API_URL}/users/${user.value.id}`,
      data,
    )
    user.value = { ...response.data }
  }

  // ajouter un jeu aux favoris du joueur
  const addUserFav = async (game) => {
    user.value.favs.push(game)
    await updateUser({ favs: user.value.favs })
  }

  // supprimer un jeu des favoris du joueur
  const removeUserFav = (game) => {
    user.value.favs = user.value.favs.filter((fav) => fav.id !== game.id)
    updateUser({ favs: user.value.favs })
  }

  // vérifier si un jeu est dans les favoris du joueur
  const isGameInFavs = (game) => {
    if (!user.value?.favs) {
      return false
    }
    return user.value.favs.some((fav) => fav.id === game.id)
  }

  return {
    user,
    userFavs,
    userFavsCount,
    userFavsGamesGenre,
    getUserById,
    updateUser,
    isGameInFavs,
    addUserFav,
    removeUserFav,
  }
})
