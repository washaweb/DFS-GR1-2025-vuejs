<template>
  <div class="container pt-4">
    <div class="row">
      <div class="col-md-8">
        <h1>Liste de jeux</h1>
        <div class="grid-game my-3" v-if="games && games.length > 0">
          <GameCard
            v-for="game in games"
            :key="game.id"
            :game="game"
            :isFav="isGameInFavs(game)"
            @editFav="onEditFav(game)"
          />
        </div>

        <div class="text-center" v-else>
          <p>Pas de jeux disponible pour le moment.</p>
        </div>

        <!-- debug -->
        <pre>{{ gameStatsByGenre }}</pre>
      </div>
      <div class="col-md-4">
        <BButton
          iconLeft="user"
          variant="dark"
          class="w-100 mb-3"
          @click="$router.push('/profile')"
        >
          Profil utilisateur
        </BButton>

        <h2>Graphique des genres</h2>

        <v-chart class="chart" style="max-height: 400px" :option="option" autoresize />

        <pre>{{ user }}</pre>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, provide } from 'vue'
import { onBeforeMount } from 'vue'
import { useGameStore } from '@/stores/game'
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'
import GameCard from '@/components/GameCard.vue'
// import { onMounted } from 'vue'
const gameStore = useGameStore()
const userStore = useUserStore()
const { games, gameStatsByGenre } = storeToRefs(gameStore)
const { user } = storeToRefs(userStore)
// const { getGames } = gameStore
const { isGameInFavs, removeUserFav, addUserFav } = userStore
const { getUserById } = userStore

const onEditFav = async (game) => {
  if (isGameInFavs(game)) {
    await removeUserFav(game)
  } else {
    await addUserFav(game)
  }
}
onBeforeMount(async () => {
  // await getGames()
  await getUserById(1)
})

// bonus ajout d'un echart
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { PieChart } from 'echarts/charts'
import { TitleComponent, TooltipComponent, LegendComponent } from 'echarts/components'
import VChart, { THEME_KEY } from 'vue-echarts'

use([CanvasRenderer, PieChart, TitleComponent, TooltipComponent, LegendComponent])

provide(THEME_KEY, 'light')

const option = ref({
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)',
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    data: gameStatsByGenre.value.map((item) => item.name),
  },
  series: [
    {
      name: 'Jeux par genre',
      type: 'pie',
      radius: '55%',
      center: ['50%', '50%'],
      data: gameStatsByGenre.value,
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },
  ],
})
</script>

<style scoped>
.grid-game {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}
</style>
