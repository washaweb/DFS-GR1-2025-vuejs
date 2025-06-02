<template>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <h2>Game Peudo maker</h2>
        <div>
          <label class="form-label" for="gameTypes">Chosir un style de jeu</label>
          <select class="form-control" v-model="selectedGameType" id="gameTypes">
            <option :value="[]">Chosir...</option>
            <option :key="cle" v-for="(val, cle) in gameTypes" :value="val">{{ cle }}</option>
          </select>

          <select
            v-if="isGameSelected"
            class="mt-2 form-control"
            v-model="selectedPseudo"
            id="gamePseudos"
          >
            <option value="">Chosir...</option>
            <option :key="pseudo" v-for="pseudo in selectedGameType" :value="pseudo">
              {{ pseudo }}
            </option>
          </select>
        </div>
        <p class="my-4 fw-bold text-secondary" v-if="!isGameSelected">
          Veuillez sélectionner un type de jeu.
        </p>
        <p v-else class="my-4 fw-bold text-success">{{ finalPseudo }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// on déclare un tableau de données pour gérer les pseudos
const gameTypes = {
  fps: ['Sniper', 'Headshot', 'Ghost', 'Reaper'],
  rpg: ['Elwyn', 'Shadowblade', 'Thorin', 'Elandor'],
  str: ['Commandant', 'Tactik', 'Builder', 'ZergRush'],
}

const suffixes = ['X', '77', '_Pro', 'Master', '666']

// cette donnée doit être dynamique, car elle est modifiable par l'utilisateur
const selectedGameType = ref([])
const selectedPseudo = ref('')

// je créer une valeur calculée pour les conditions du template
const isGameSelected = computed(() => selectedGameType.value.length > 0)

// je construit le pseudo de l'utilisateur avec des choix aléatoires depuis le tableau selectedGameType que l'utilisateur a choisi + une valeur aléatoire du suffixe
const finalPseudo = computed(() => {
  const rdPrefix = Math.floor(Math.random() * selectedGameType.value.length)
  const rdSuffix = Math.floor(Math.random() * suffixes.length)
  console.log(rdPrefix, rdSuffix)
  //soluce 1 random psuedo :
  // return selectedGameType.value[rdPrefix] + '_' + suffixes[rdSuffix]

  //soluce 2 deuxième select
  return selectedPseudo.value + '_' + suffixes[rdSuffix]
})
</script>
