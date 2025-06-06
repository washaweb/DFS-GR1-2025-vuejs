<template>
  <div class="container pt-4">
    <div class="row">
      <div class="col-md-6">
        <h1>Créer un jeu</h1>
        <form @submit.prevent="onCreateGame" v-if="game">
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
import { ref } from 'vue'
import { gameInterface } from '@/interfaces/game'
import { useGameStore } from '@/stores/game'
import { useRouter } from 'vue-router'
const $router = useRouter()
const gameStore = useGameStore()

const { createGame } = gameStore

// ici game est un formulaire vierge, au format gameInterface
const game = ref({ ...gameInterface })

const onCancel = () => {
  console.log('Annuler')
  $router.push('/')
}

const onCreateGame = async () => {
  console.log('Créer le jeu')
  await createGame(game.value)
  $router.push('/')
}
</script>
