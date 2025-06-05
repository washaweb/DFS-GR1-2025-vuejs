<template>
  <div class="container my-4">
    <h1>Bienvenue, consultez les jeux par plateforme</h1>
    <div class="d-flex gap-2 flex-wrap mb-2">
      <div
        class="card bg-secondary-subtle"
        style="width: calc(25% - 1rem)"
        v-for="platform in platforms"
        :key="platform.id"
      >
        <div class="card-body">
          <div class="h1">{{ platform.icon }}</div>
          <h3>{{ platform.name }}</h3>

          <router-link class="btn btn-sm btn-dark" :to="`/platform/${platform.id}`">
            Détail
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { platforms } from '@/seeds/datas'
</script>
