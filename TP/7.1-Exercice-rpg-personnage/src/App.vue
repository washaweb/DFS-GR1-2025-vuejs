<template>
  <div class="container">
    <h1>🛡️ Créateur de personnage</h1>
    <div class="row">
      <div class="col-6">
        <section class="creator container">
          <form @submit.prevent>
            <div class="mb-3">
              <label class="form-label" for="name">Nom:</label>
              <input
                id="name"
                name="name"
                class="form-control"
                type="text"
                v-model="form.nom"
                placeholder="Nom du héros"
              />
            </div>

            <div class="mb-3">
              <label class="form-label" for="name">Classe :</label>
              <select class="form-control" v-model="form.classe">
                <option disabled value="">Choisis ta classe</option>
                <option v-for="className in classes" :value="className">{{ className }}</option>
              </select>
            </div>

            <h2>Caractéristiques</h2>
            <p>points disponibles : {{ availablePoints }}</p>
            <div v-for="(stat, index) in form.stats" :key="index">
              <label class="form-label" :for="index">{{ index }} :</label>
              <input
                :name="index"
                :id="index"
                class="form-range"
                type="range"
                v-model.number="form.stats[index]"
                :min="0"
                :max="30"
                :list="'ticks-' + index"
              />
              <datalist :id="'ticks-' + index">
                <option value="0" label="0"></option>
                <option value="10" label="10"></option>
                <option value="20" label="20"></option>
                <option value="30" label="30"></option>
              </datalist>
            </div>

            <h3 class="mt-3">Compétences maîtrisées</h3>

            <p>Compétences à attribuer: {{ availableCompetences }}</p>

            <div v-for="(comp, index) in form.competences" :key="index" class="form-check">
              <label class="form-check-label" :for="index">{{ index.replace('_', ' ') }}</label>
              <input
                :name="index"
                :id="index"
                class="form-check-input"
                type="checkbox"
                v-model="form.competences[index]"
                min="0"
                max="100"
                :disabled="availableCompetences === 0 && !form.competences[index]"
              />
            </div>
          </form>
        </section>
      </div>
      <div class="col-6">
        <section class="carte mt-4 p-3 border rounded bg-light">
          <h2>{{ form.nom || 'Nom du héros' }}</h2>
          <p>Classe : {{ form.classe || 'Non définie' }}</p>
          <p>Force : {{ form.stats.force }}</p>
          <p>Agilité : {{ form.stats.agilite }}</p>
          <p>Charisme : {{ form.stats.charisme }}</p>
          <p>Intelligence : {{ form.stats.intelligence }}</p>

          <template v-if="availableCompetences === 3">
            <p>Aucune compétence attribuée</p>
          </template>
          <template v-else>
            <p>Compétences :</p>
            <ul>
              <li v-if="form.competences.magie">Magie</li>
              <li v-if="form.competences.furtivite">Furtivité</li>
              <li v-if="form.competences.rapidide">Rapidité</li>
              <li v-if="form.competences.crochetage">Crochetage</li>
              <li v-if="form.competences.arme_jet">Armes de Jet</li>
              <li v-if="form.competences.arme_melee">Armes de Mélée</li>
            </ul>
          </template>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
const classes = ref(['Guerrier', 'Mage', 'Voleur'])

const form = ref({
  nom: '',
  classe: '',
  stats: {
    force: 0,
    agilite: 0,
    charisme: 0,
    intelligence: 0,
  },
  competences: {
    magie: false,
    furtivite: false,
    rapidite: false,
    crochetage: false,
    arme_jet: false,
    arme_melee: false,
  },
})

const availablePoints = computed(() => {
  const totalPoints =
    form.value.stats.force +
    form.value.stats.agilite +
    form.value.stats.charisme +
    form.value.stats.intelligence
  // console.log(totalPoints)
  return 100 - totalPoints > 0 ? 100 - totalPoints : 0
})

const availableCompetences = computed(() => {
  const totalCompetences = Object.values(form.value.competences).filter(Boolean).length
  return 3 - totalCompetences
})
</script>

<style scoped>
datalist {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* writing-mode: vertical-lr; */
  width: 100%;
}
</style>
