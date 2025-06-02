<template>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <h1>🧍 Barre de Vie</h1>

        <div
          class="progress mb-3 barre-de-vie"
          role="progressbar"
          aria-label="Stamina bar"
          :aria-valuenow="hp"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div
            class="progress-bar barre-de-vie-progress"
            :style="styleBarre"
            :class="classVie"
          ></div>
        </div>

        <div class="btn-group my-4">
          <button :disabled="hp >= 100" class="btn btn-success" @click="soigner">+ Soigner</button>
          <button :disabled="hp <= 0" class="btn btn-danger" @click="blesser">- Blesser</button>
        </div>

        <p class="h3">PV : {{ hp }}/100</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const hp = ref(100)
const styleBarre = computed(() => `width: ${hp.value}%`)

const classVie = computed(() => {
  if (hp.value > 60) return 'hp-haut'
  else if (hp.value > 30) return 'hp-moyen'
  else if (hp.value === 0) return 'hp-dead'
  else return 'hp-bas'
})

const soigner = () => {
  if (hp.value < 100) hp.value += 10
}
const blesser = () => {
  if (hp.value > 0) hp.value -= 10
}
</script>

<style scoped>
.barre-de-vie,
.barre-de-vie-progress {
  height: 30px;
  border-radius: 5px;
}
.barre-de-vie-progress {
  transition: all 0.3s ease;
}

.hp-haut {
  background-color: #4caf50;
}

.hp-moyen {
  background-color: #ffc107;
}

.hp-bas {
  background-color: #f44336;
}

.hp-dead {
  background-color: #000;
}
</style>
