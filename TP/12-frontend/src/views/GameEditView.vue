<template>
  <div class="container pt-4">
    <div class="row">
      <div class="col-md-6">
        <h1>Editer le jeu</h1>
        <form @submit.prevent="onSaveGame" v-if="game">
          <div class="mb-3">
            <label for="titre" class="form-label">Titre</label>
            <input type="text" class="form-control" v-model="game.titre" name="titre" id="titre" />
          </div>
          <div class="mb-3">
            <label for="genre" class="form-label">Genre</label>
            <input type="text" class="form-control" v-model="game.genre" name="genre" id="genre" />
          </div>
          <div class="mb-3">
            <label for="note" class="form-label">Note</label>
            <input
              type="number"
              class="form-control"
              v-model.number="game.note"
              name="note"
              id="note"
            />
          </div>
          <div class="mb-3 d-flex gap-2">
            <BButton @click="onCancel" type="button" variant="secondary">Annuler</BButton>
            <BButton @click="onDelete" iconLeft="trash" type="button" variant="danger"
              >Supprimer</BButton
            >
            <BButton class="ms-auto" iconLeft="save" type="submit" variant="primary"
              >Enregistrer</BButton
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useGameStore } from '@/stores/game'
import { storeToRefs } from 'pinia'
import { onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
const $router = useRouter()
const gameStore = useGameStore()
const { game } = storeToRefs(gameStore)
const { getGame, deleteGame, patchGame } = gameStore

const props = defineProps({
  id: {
    type: [String, Number],
    required: true,
  },
})
const onCancel = () => {
  console.log('Annuler')
  $router.push('/')
}

const onDelete = async () => {
  console.log('Supprimer le jeu')
  await deleteGame(props.id)
  $router.push('/')
}

const onSaveGame = async () => {
  console.log('Enregistrer le jeu')
  await patchGame(props.id, game.value)
  $router.push('/')
}

onBeforeMount(async () => {
  await getGame(props.id)
})
</script>
