<template>
  <main class="container">
    <div class="row">
      <section class="col-6">
        <h2>Game Meteo</h2>
        <div class="card" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title">Ville: {{ selectedTown.name }}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">
              {{ selectedTown.temperature }}&nbsp;°
            </h6>
            <p class="card-text">Prévisions météo</p>
            <ul class="list-group list-group-flush">
              <li
                class="list-group-item"
                v-for="(item, index) in selectedTown.previsions"
                :key="index"
              >
                {{ item.day }} : {{ item.weather }}
              </li>
            </ul>
          </div>
          <div class="card-footer">
            <a href="#" @click="selectedIndex = 0" class="card-link">Marseille</a>
            <a href="#" @click="selectedIndex = 1" class="card-link">Lille</a>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'

const towns = [
  {
    name: 'Marseille',
    temperature: 27,
    previsions: [
      { day: 'Lundi', weather: 'Soleil' },
      { day: 'Mardi', weather: 'Soleil' },
      { day: 'Mercredi', weather: 'Soleil' },
    ],
  },
  {
    name: 'Lille',
    temperature: 12,
    previsions: [
      { day: 'Lundi', weather: 'Nuageux' },
      { day: 'Mardi', weather: 'Nuageux' },
      { day: 'Mercredi', weather: 'Pluie' },
    ],
  },
]
const selectedIndex = ref(0)
const selectedTown = computed(() => {
  return towns[selectedIndex.value]
})
</script>
