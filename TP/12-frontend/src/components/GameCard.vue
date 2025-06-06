<template>
  <div class="card bg-dark text-light mb-3 rounded-3">
    <div v-if="isFav" class="favorite-indicator">
      <i class="fas fa-lg fa-star text-warning"></i>
    </div>
    <div class="game-title text-light h4 fw-bold text-center rounded-top-3">
      {{ game?.titre || '-' }}
    </div>
    <img
      :src="game?.image || './defaultimage.jpg'"
      :alt="game?.titre || 'image du jeu'"
      class="img-fluid rounded-top-3"
    />
    <div class="card-body">
      <div class="row">
        <div class="col-7">
          <p class="mb-1">
            {{ game?.genre || 'inclassé' }}
          </p>
        </div>
        <div class="col-5 text-end">
          <p class="mb-0">Note: {{ game?.note }}/10</p>
        </div>
      </div>
    </div>
    <div class="card-footer d-flex gap-2" v-if="showButtons">
      <router-link class="btn btn-secondary btn-sm" :to="`/game/${game.id}`">
        Voir le détail
      </router-link>
      <button @click="emit('editFav', !isFav)" class="btn btn-secondary btn-sm">
        {{ isFav ? 'Retirer des' : 'Ajouter aux' }} favoris
      </button>
    </div>
  </div>
</template>

<script setup>
// récupération des données passées au composant
const props = defineProps({
  game: {
    type: Object,
    required: true,
  },
  isFav: {
    type: Boolean,
    default: false,
  },
  showButtons: {
    type: Boolean,
    default: true,
  },
})
// événement pour avertir le parent de l'appel de la fonction editFav
const emit = defineEmits(['editFav'])
</script>

<style scoped>
.game-title {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100px;
  padding-top: 20px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 60%, rgba(0, 0, 0, 0) 100%);
}
.favorite-indicator {
  position: absolute;
  top: 18px;
  right: 24px;
  z-index: 1;
}
.bg-dark .card-body {
  background: #40454b;
}
.bg-dark .card-footer {
  background: #4d545c;
}
</style>
