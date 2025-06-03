<template>
  <div class="container pt-4">
    <h1>Les composants</h1>
    <h2>Exemple avec un slot</h2>
    <BCard
      title="Mon super titre"
      description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod."
    >
      <template #header> Texte du header </template>
      <template #footer> Texte du footer </template>
      <template #default>
        <p>klsdjfsdklfsdlkfsjklfdjkl</p>
        <p><a href="#">test </a></p>
      </template>
    </BCard>

    <template v-for="user in users" :key="user.id">
      <UserCard @update:email="updateEmail(user.id, $event)" :data="user" />
      <pre>{{ user }}</pre>
    </template>

    <h2>Exemple avec un v-model</h2>
    <MyButton v-model="count" v-model:email="email" />
    <p>count: {{ count }}</p>
    <p>email : {{ email }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import UserCard from './components/UserCard.vue'
import MyButton from './components/MyButton.vue'
import BCard from './components/BCard.vue'

const count = ref(0)
const email = ref('test@test.com')

const users = ref([
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
  },
  {
    id: 3,
    name: 'Bob Johnson',
    email: 'bob@example.com',
  },
])

const updateEmail = (id, email) => {
  // je cherche le user qui correspond à l'id passé en paramètre
  const user = users.value.find((user) => user.id === id)
  // si j'ai trouvé le user, je modifie son email
  if (user) {
    user.email = email
  }
}
</script>
