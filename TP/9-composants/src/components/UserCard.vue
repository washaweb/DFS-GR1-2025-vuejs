<template>
  <div class="card mb-3">
    <div class="card-header">{{ props.data?.name || '-' }}</div>
    <div class="card-body">
      <input aria-label="email" type="text" class="form-control" v-model="emailModel" />
      <p>valeur locale: {{ emailModel || '-' }}</p>
      <p>valeur de la props{{ props.data?.email || '-' }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
// const props = defineProps(['user'])

// ici je créer une référence locale qui me sert pour le formulaire email.
// j'initialise la valeur email avec la valeur qui vient du parent via la props data
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
})

const emailModel = ref(props.data?.email)

// je décris un événement personalisé qui sera émis par le composant
const emit = defineEmits(['update:email'])

// je surveille les changements de la valeur de emailModel et je déclenche l'événement personalisé
watch(emailModel, (newValue) => {
  emit('update:email', newValue)
})
</script>
