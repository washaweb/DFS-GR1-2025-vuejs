<template>
  <div class="container">
    <h1>Liste des utilisateurs ({{ usersCount }})</h1>

    <!-- ici on attends que le store soit chargé avec un v-if qui vérifie la liste des utilisateurs -->
    <div class="user-list d-flex flex-wrap gap-2 my-4" v-if="users && users.length > 0">
      <!-- enfin, on boucle sur les données du store -->
      <div v-for="user in users" :key="user.id" class="card" style="width: 18rem">
        <div class="card-body">
          <p class="fw-bold">
            {{ user.name }}<br />
            {{ user.username }}<br />
            {{ user.email }}<br />
          </p>

          <p>{{ user.address.zipcode }} {{ user.address.city }}</p>
        </div>
      </div>
    </div>
    <div v-else>
      <p>Aucun utilisateur trouvé</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
// on importe le store
import { useUserStore } from '@/stores/user'

// on est obligé d'utiliser storeToRefs pour récupérer les données du store sans perdre la réactivité
import { storeToRefs } from 'pinia'
// on installe le store
const userStore = useUserStore()
// on récupère les données du store de manière réactive et déscructurée
const { users, usersCount } = storeToRefs(userStore)
// les méthodes sont déstructurées directement depuis le store (sans utiliser storeToRefs)
const { getUsers } = userStore

// au chargement du composant, on appelle la méthode getUsers depuis le store, afin de récupérer les données
onMounted(async () => {
  // ici c'est un appel à une API, donc une fonction asynchrone
  await getUsers()
})
</script>
