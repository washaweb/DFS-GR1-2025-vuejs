<template>
  <div class="container pt-4">
    <div class="row">
      <div class="col-md-8">
        <h1>Détail du jeux</h1>
        <GameCard v-if="game" :game="game" :showButtons="false" />
      </div>
      <div class="col-md-4">
        <BButton iconLeft="arrow-left" variant="dark" class="w-100 mb-3" @click="$router.push('/')"
          >Retour</BButton
        >
        <BButton
          iconLeft="gamepad"
          variant="primary"
          class="w-100 mb-3"
          @click="$router.push(`/game/edit/${game.id}`)"
          >Modifier</BButton
        >

        <pre
          >{{ id }}
{{ game }}
        </pre>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useGameStore } from '@/stores/game'
import { storeToRefs } from 'pinia'
import { onBeforeMount } from 'vue'
import GameCard from '@/components/GameCard.vue'

const gameStore = useGameStore()
const { game } = storeToRefs(gameStore)
const { getGame } = gameStore

const props = defineProps({
  id: {
    type: [String, Number],
    required: true,
  },
})

onBeforeMount(async () => {
  await getGame(props.id)
})
</script>
