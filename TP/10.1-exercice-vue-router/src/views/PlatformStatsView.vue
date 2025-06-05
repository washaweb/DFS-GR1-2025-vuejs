<template>
  <div class="container my-4">
    <h2 class="h4">Plateforme {{ platformName }} stats</h2>
    <p>statistiques ici</p>
    <button class="btn btn-dark" @click="$router.go(-1)">Retour</button>
  </div>
</template>

<script setup>
import { platforms } from '@/seeds/datas'
import { useRoute, useRouter } from 'vue-router'
const $route = useRoute()
const $router = useRouter()

const platformId = $route.params.platformId
const platformName = platforms.find((platform) => platform.id === platformId)?.name
</script>
