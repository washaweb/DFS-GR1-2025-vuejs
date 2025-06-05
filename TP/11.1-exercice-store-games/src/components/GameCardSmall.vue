<template>
  <div class="card mb-3">
    <div class="row g-0">
      <div class="col-md-6">
        <img
          :src="props.game?.image || './defaultimage.jpg'"
          :alt="props.game?.titre || 'image du jeu'"
          class="img-fluid rounded-start"
        />
      </div>
      <div class="col-md-6">
        <div class="card-header">{{ props.game?.titre || '-' }}</div>
        <div class="card-body">
          <p>genre: {{ props.game?.genre || 'inclassé' }}</p>
        </div>
      </div>
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
})
</script>
