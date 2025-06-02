<template>
  <h1>Hello {{ name }}</h1>

  <button @click="name = 'Jane'">Change Name</button>
</template>

<script setup>
// pas dynamique :
// const name = 'John'

// dynamique:
import { ref } from 'vue'
const name = ref('John')
// ici en fait on déclare un objet qui contient une propriété name.value qui est égale à John

name.value = 'Maria'
</script>
