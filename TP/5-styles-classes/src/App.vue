<template>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <h1>Propriétés réactives</h1>

        <!-- on peut "binder" n'importe quel attribut html, avec v-bind:attr="", raccourci :attr="" -->
        <img :src="imageSource" v-bind:alt="altSource" class="img-fluid" />

        <!-- Pour les classes, plusieurs syntaxes sont possibles -->
        <!-- ex1 : une simle valeur de variable -->
        <p :class="classSource">Exemple de phrase pour la démo</p>
        <!-- ex2 : on peut attribuer des clé: valeurs, sur les classes, la clé étant la classe à attribuer si la valeur est true -->
        <p
          class="text-light px-2"
          :class="{
            'bg-success': isActive,
            'bg-danger': !isActive,
          }"
        >
          Exemple de phrase 2 pour la démo
        </p>
        <!-- on peut aussi utiliser un tableau de classes -->
        <p
          :class="[
            classSource,
            'text-light',
            {
              'bg-success py-4': isActive,
              'bg-danger': !isActive,
            },
          ]"
        >
          exemple 3
        </p>
        <!-- utiliser une condition ternaire -->
        <p :class="isActive ? 'text-success' : 'text-danger'">
          Exemple avec une condition ternaire
        </p>
        <button class="btn btn-primary" @click="isActive = !isActive">Inverser</button>

        <button class="btn btn-secondary" @click="changeImage()">Changer image</button>
      </div>
      <div class="col-6">
        <h2>Les styles</h2>

        <!-- ici les styles sont rendus dynamiquement en fonction d'une condition -->
        <p :style="{ color: isActive ? 'green' : 'red' }">Exemple de style</p>
        <p :style="{ 'font-size': size + 'px', backgroundColor: isActive ? 'green' : 'red' }">
          Text stylé
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const imageSource = ref('/chat.jpg')
const altSource = ref('mon super chat')
const classSource = ref('img-fluid')
const isActive = ref(true)
const size = ref(28)

const changeImage = () => {
  altSource.value = 'mon super ' + imageSource.value === '/chat.jpg' ? 'panda' : 'chat'
  imageSource.value = imageSource.value === '/chat.jpg' ? '/panda.jpg' : '/chat.jpg'
}
</script>
