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
        <form v-if="editMode" @submit.prevent="onUpdateUser">
          <div class="mb-3">
            <label for="name" class="form-label">Nom</label>
            <input
              :class="validate(form.name)"
              type="text"
              class="form-control"
              id="name"
              v-model="form.name"
            />
          </div>
          <div class="mb-3">
            <label for="pseudo" class="form-label">Pseudo</label>
            <input
              :class="validate(form.pseudoname)"
              type="text"
              class="form-control"
              id="pseudo"
              v-model="form.pseudoname"
            />
          </div>
          <div class="mb-3">
            <label for="age" class="form-label">Age</label>
            <input
              type="number"
              min="0"
              :class="{ 'is-invalid': form.age <= 0 }"
              class="form-control"
              id="age"
              v-model.number="form.age"
            />
          </div>
          <div class="d-flex gap-2">
            <BButton @click="onCancelUpdateUser" type="button" variant="danger">Annuler</BButton>
            <BButton :disabled="formInvalid" type="submit" variant="primary" iconLeft="save"
              >Enregistrer</BButton
            >
          </div>
          {{ formInvalid }}
        </form>

        <ul v-else class="list-group mb-4">
          <li class="list-group-item">Nom: {{ user.name }}</li>
          <li class="list-group-item">Pseudo: {{ user.pseudoname }}</li>
          <li class="list-group-item">Age: {{ user.age }}</li>
          <li class="list-group-item">Nombre de favoris : {{ userFavsCount }}</li>
          <li class="list-group-item">
            <button class="btn btn-link" @click="onEditUser">Editer</button>
          </li>
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
import { ref, computed, onBeforeMount } from 'vue'
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'
import GameCard from '@/components/GameCard.vue'

const userStore = useUserStore()
const { user, userFavs, userFavsCount, userFavsGamesGenre } = storeToRefs(userStore)
const { getUserById, updateUser } = userStore

// logique du formulaire d'édition de l'utilisateur
// j'importe l'interface type de l'utilisateur
import { userInterface } from '@/interfaces/user'
// une variable pour gérer l'état du formulaire
const editMode = ref(false)
// une variable pour stocker les données temporaires du formulaire
const form = ref({ ...userInterface })

// quand j'annule l'édition, je réinitialise le formulaire
const onCancelUpdateUser = () => {
  editMode.value = false
  form.value = { ...userInterface }
}

// quand je clique sur le bouton d'édition, je passe en mode édition, je remplis le formulaire avec les données de l'utilisateur
const onEditUser = () => {
  form.value = { ...user.value }
  editMode.value = true
}

// quand je valide l'édition, je met à jour l'utilisateur
const onUpdateUser = async () => {
  await updateUser(form.value)
  editMode.value = false
}

// validation sommaire d'un champ de formulaire
const validate = (value) => {
  if (!value || value.length < 3) {
    return 'is-invalid'
  }
  return ''
}
const formInvalid = computed(() => {
  console.log(form.value)
  return form.value.name.length < 3 || form.value.pseudoname.length < 3 || form.value.age == 0
})

onBeforeMount(async () => {
  // await getGames()
  await getUserById(1)
})
</script>

<style scoped>
.grid-game {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}
</style>
