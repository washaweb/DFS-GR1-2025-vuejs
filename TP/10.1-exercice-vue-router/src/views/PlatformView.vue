<template>
  <div class="container my-4">
    <div class="platform-header">
      <router-link to="/" class="btn btn-dark">← Retour</router-link>
      <div class="platform-info d-flex gap-2">
        <span class="platform-icon h1">{{ platform.icon }}</span>
        <h1>{{ platform.name }}</h1>
      </div>
    </div>

    <ul class="nav nav-tabs">
      <li class="nav-item">
        <router-link
          activeClass="active"
          :to="`/platform/${platformId}`"
          class="nav-link"
          exact-active-class="active"
        >
          Jeux
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
          activeClass="active"
          :to="`/platform/${platformId}/stats`"
          class="nav-link"
          active-class="active"
        >
          Statistiques
        </router-link>
      </li>
    </ul>
    <div class="my-3">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { platforms } from '@/seeds/datas'

const props = defineProps({
  platformId: {
    type: String,
    required: true,
  },
})

const platform = computed(() => platforms.find((platform) => platform.id === props.platformId))
</script>
