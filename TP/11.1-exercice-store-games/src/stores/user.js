import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import userData from '@/seeds/user'

export const useUserStore = defineStore('user', () => {
  const user = ref(userData)

  // raccourcis vers les favoris du joueur
  const userFavs = computed(() => user.value.favs)

  // nombre de jeux favoris du joueur
  const userFavsCount = computed(() => user.value.favs.length)

  // liste des catégories des jeux favoris du joueur
  const userFavsGamesGenre = computed(() => {
    const genres = []
    user.value.favs.forEach((fav) => {
      if (!genres.includes(fav.genre)) {
        genres.push(fav.genre)
      }
    })
    return genres
  })

  // enregistrer les données de l'utilisateur
  const updateUser = (data) => {
    user.value = { ...data }
  }

  // ajouter un jeu aux favoris du joueur
  const addUserFav = (game) => {
    user.value.favs.push(game)
  }

  // supprimer un jeu des favoris du joueur
  const removeUserFav = (game) => {
    user.value.favs = user.value.favs.filter((fav) => fav.id !== game.id)
  }

  // vérifier si un jeu est dans les favoris du joueur
  const isGameInFavs = (game) => {
    return user.value.favs.some((fav) => fav.id === game.id)
  }

  return {
    user,
    userFavs,
    userFavsCount,
    userFavsGamesGenre,
    updateUser,
    isGameInFavs,
    addUserFav,
    removeUserFav,
  }
})
