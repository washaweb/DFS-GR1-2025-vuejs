<template>
  <div class="container pt-4">
    <h1>Gestion des événements</h1>
    <div class="row">
      <div class="col-md-6 mb-3">
        <h2>Compteur : {{ count }}</h2>

        <div class="btn-group">
          <!-- ici la logique est directement dans le template -->
          <button class="btn btn-primary" @click="count++">Incrémenter</button>
          <!-- ici la logique est dans le controleur du composant -->
          <button class="btn btn-primary" @click="decrement">Décrémenter</button>
        </div>

        <h2>Formulaire exemple</h2>

        <form action="" @submit.prevent="onSubmit">
          <div class="alert alert-danger" role="alert" v-if="formError">Il y a des erreurs</div>

          <div class="alert alert-success" role="alert" v-if="formSuccess">
            Votre formulaire a bien été envoyé
          </div>

          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input
              @input="testForm"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errorName }"
              id="name"
              v-model="inputName"
            />
          </div>
          <div class="d-flex gap-3 mb-3">
            <button type="reset" @click="onReset" class="btn btn-secondary">Reset</button>
            <button type="submit" class="btn btn-primary">Envoyer</button>
          </div>
        </form>

        <div class="box-container">
          <div class="box" :style="`left: ${x}px;top: ${y}px;`"></div>
        </div>
      </div>
      <div class="col-8 col-md-4 mb-3">
        <div class="card">
          <img
            :src="product.variants[selectedVariantID].image"
            class="card-img-top img-fluid"
            :alt="product.name"
          />
          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <div class="d-flex">
              <p class="card-text flex-grow-1">
                {{ product.variants[selectedVariantID].price }}&nbsp;€
              </p>
              <div
                class="colorPreview"
                :style="{ backgroundColor: product.variants[selectedVariantID].color }"
              ></div>
            </div>
          </div>
          <div class="card-footer d-flex gap-2">
            <img
              v-for="(variant, index) in product.variants"
              :src="variant.image"
              height="50"
              @mouseenter="selectedVariantID = index"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'

// logique compteur
const count = ref(0)
const x = ref(0)
const y = ref(0)

// methode utilisée dans le template
const decrement = () => {
  count.value--
}

// logique produit
const selectedVariantID = ref(0)
const product = reactive({
  name: 'Ordinateur',
  id: 2321,
  variants: [
    {
      id: 2345,
      color: 'green',
      image: 'https://picsum.photos/600/400?image=1',
      price: 2350,
    },
    {
      id: 2341,
      color: 'orange',
      image: 'https://picsum.photos/600/400?image=2',
      price: 2650,
    },
  ],
})

// logique formulaire
const inputName = ref('')
const errorName = ref(false)
const formError = ref(false)
const formSuccess = ref(false)

const testForm = (event) => {
  const val = event.target.value
  console.log(val)
  errorName.value = val.length < 3
}

// fonction de souumission du formulaire
const onSubmit = () => {
  console.log('submit')
  formError.value = !inputName.value.length || errorName.value
  formSuccess.value = !formError.value
}

const onReset = () => {
  inputName.value = ''
  errorName.value = false
  formError.value = false
  formSuccess.value = false
}

// événement déclenché lors d'une frappe clavier (par l'EventListener)
const moveBox = (event) => {
  console.log(event.key)
  if (event.key === 'ArrowRight') x.value = x.value < 400 ? x.value + 10 : x.value
  if (event.key === 'ArrowLeft') x.value = x.value > 0 ? x.value - 10 : x.value
  if (event.key === 'ArrowDown') y.value = y.value < 300 ? y.value + 10 : y.value
  if (event.key === 'ArrowUp') y.value = y.value > 0 ? y.value - 10 : y.value
}

// au chargement du composant, on initialise notre écouteur d'événement keyup
onMounted(() => {
  window.addEventListener('keyup', moveBox)
})

// au déchargement du composant, il faut bien penser à retirer l'écouteur d'événement en place
onUnmounted(() => {
  window.removeEventListener('keyup', moveBox)
})
</script>

<style scoped>
.colorPreview {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #fbfbfb;
}

.box-container {
  width: 100%;
  height: 400px;
  background-color: #ccc;
  position: relative;
}

.box {
  width: 40px;
  height: 40px;
  background-color: #ff0000;
  position: absolute;
}
</style>
