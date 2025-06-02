<template>
  <!-- la variable name est dynamique et le template est raffraichi à chaque changement de la ref name -->
  <h1>Hello {{ name }}</h1>

  <!-- les directives comme @click permettent de déclencher des événements -->
  <button @click="name = 'John'">Changer pour John</button>
</template>

<script setup>
// pas dynamique (mais affiché dans le template) :
// const name = 'John'

// dynamique:
import { ref } from 'vue'
const name = ref('John')

// pour mettre à jour la valeur de la ref dans le controleur, on utilise `.value`
name.value = 'Maria'
</script>
