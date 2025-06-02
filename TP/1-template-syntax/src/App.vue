<template>
  <div class="container py-5">
    <h1 class="h2 mb-4 border-bottom pb-2">Mon panier</h1>
    <main>
      <section>
        <article class="card shadow">
          <div class="card-body">
            <h2 class="h4 text-primary">{{ titre }}</h2>
            <div>{{ description }}</div>
            <div>Acheté par {{ lastname }} {{ firstname }}</div>
          </div>
        </article>
      </section>
    </main>
  </div>
</template>

<script setup>
// pas dynamique :
// const name = 'John'

// dynamique:
import { ref } from 'vue'
const firstname = ref('John')
const lastname = ref('Doe')
const titre = ref('Livre')
const description = ref('Un super livre')
</script>
