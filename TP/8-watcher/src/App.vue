<template>
  <div class="container pt-4">
    <h1>Observation de la réactivité</h1>
    <input type="text" v-model="message" class="form-control" aria-label="message" />
    <p>Mon message: {{ message }}</p>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const message = ref('')

watch(message, (newValue, oldValue) => {
  // console.log('Ancienne valeur:', oldValue)
  console.log('Nouvelle valeur:', newValue)
  message.value = newValue.toUpperCase().replace(' ', '-')

  if (message.value.length > 10) {
    alert('Votre message est trop long')
  }
})
</script>
