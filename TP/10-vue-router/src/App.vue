<template>
  <MainHeader />
  <main>
    <RouterView />
  </main>
  <MainFooter />
</template>

<script setup>
import MainHeader from './components/layout/MainHeader.vue'
import MainFooter from './components/layout/MainFooter.vue'
</script>
