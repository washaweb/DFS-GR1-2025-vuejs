<template>
  <button class="btn text-nowrap" :class="[`btn-${variant}`, `btn-${size}`]">
    <!-- on définit le contenu du bouton avec les différentes possibilités : 
      icon-left? slot icon-right? 
      <slot /> permet de contenir le  texte/code entouré par le composant (depuis le coposant parent)
    -->
    <i v-if="iconLeft" :class="iconLeftClass"></i>
    <slot>Bouton</slot>
    <i v-if="iconRight" :class="iconRightClass"></i>
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  iconLeft: {
    type: String,
    default: '',
  },
  iconRight: {
    type: String,
    default: '',
  },
  variant: {
    type: String,
    default: 'primary',
  },
  size: {
    type: String,
    default: 'md',
  },
})

const iconRightClass = computed(() => {
  return props.iconRight !== '' ? `fas fa-${props.iconRight} ms-2` : ''
})

const iconLeftClass = computed(() => {
  return props.iconLeft !== '' ? `fas fa-${props.iconLeft} me-2` : ''
})
</script>
