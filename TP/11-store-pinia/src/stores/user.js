import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const users = ref([])
  const user = ref(null)

  const userFullName = computed(() => {
    if (user.value) {
      return `${user.value.name} (${user.value.username})`
    }
    return ''
  })

  const usersCount = computed(() => {
    return users.value?.length || 0
  })

  const getUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    users.value = data
  }

  const getUser = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await response.json()
    user.value = data
  }

  const addUser = async (user) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
    const data = await response.json()
    users.value.push(data)
  }

  const updateUser = async (id, user) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
    const data = await response.json()
    const index = users.value.findIndex((u) => u.id === id)
    users.value[index] = data
  }

  const deleteUser = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'DELETE',
    })
    const data = await response.json()
    const index = users.value.findIndex((u) => u.id === id)
    users.value.splice(index, 1)
  }

  return {
    users,
    user,
    userFullName,
    usersCount,
    getUsers,
    getUser,
    addUser,
    updateUser,
    deleteUser,
  }
})
