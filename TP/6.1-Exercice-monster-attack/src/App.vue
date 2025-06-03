<template>
  <div class="container pt-4 d-flex justify-content-center flex-column align-items-center">
    <h1 class="text-center mb-5">👾 Monster attack !!</h1>
    <section class="card bg-light-subtle clicker-game">
      <p class="h1">Dégâts : {{ degats }}</p>
      <div class="monstre" @click="attack" @mouseover="detect">👾</div>
      <p class="message">{{ message }}</p>
    </section>

    <h2>Exercice 2</h2>

    <p>
      - Créer un compteur, et un champ de saisie de type number pour incrémenter, décrémenter le
      compteur. - Lorsque j'utilise les flèches du clavier (haut/bas) sur le champ de saisie, avec
      la touche "shift" enfoncée, je veux que le compteur s'incrément/décrémente par 100 plutôt que
      par 1.
    </p>
    <section>
      <input
        step="1"
        type="number"
        class="form-control"
        aria-label="dégâts"
        v-model.number="degats"
        @keydown.shift.up.prevent="degats += 100"
        @keydown.shift.down.prevent="degats -= 100"
      />
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

let timeId
const degats = ref(0)
const message = ref('')

const detect = () => {
  message.value = '👀 Il vous a repéré !'
  resetMessageTimer()
}

const attack = () => {
  degats.value += 1
  message.value = 'Attaque normale !'
  resetMessageTimer()
}

const superAttack = (event) => {
  console.log(event.keyCode)
  if (event.keyCode === 32) {
    //barre d'espace
    degats.value += 100
    message.value = 'Super attaque !'
    resetMessageTimer()
  }
}

const resetMessageTimer = () => {
  clearTimeout(timeId)
  timeId = setTimeout(() => {
    message.value = ''
  }, 1000)
}

// au chargement du composant, on initialise notre écouteur d'événement keyup
onMounted(() => {
  window.addEventListener('keyup', superAttack)
})

// au déchargement du composant, il faut bien penser à retirer l'écouteur d'événement en place
onUnmounted(() => {
  window.removeEventListener('keyup', superAttack)
})
</script>

<style scoped>
.clicker-game {
  text-align: center;
  padding: 2rem;
  user-select: none;
  width: 20rem;
  height: 320px;
}

.monstre {
  font-size: 5rem;
  cursor: pointer;
  transition: transform 0.2s;
}
.monstre:hover {
  transform: scale(1.1);
}

.message {
  margin-top: 1rem;
  font-style: italic;
  color: #555;
}
</style>
