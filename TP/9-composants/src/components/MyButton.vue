<template>
  <div>Parent bound v-model is: {{ model }}</div>
  <div>Child bound v-model is: {{ email }}</div>
  <button @click="update">Increment</button>
  <input class="form-control" type="text" v-model="email" />
</template>

<script setup>
const model = defineModel('modelValue')
const email = defineModel('email')

function update() {
  model.value++
}
</script>
