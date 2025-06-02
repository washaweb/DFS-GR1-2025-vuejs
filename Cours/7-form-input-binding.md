# Événements de formulaires

Les "input bindings" (ou liaisons d'entrée) dans Vue.js permettent de lier dynamiquement les valeurs des éléments de formulaire à des données dans votre application Vue. Cela permet de créer des interfaces utilisateur réactives où les changements dans les champs de formulaire sont automatiquement reflétés dans les données et vice versa.

## Liaison de Valeur avec des Événements

Pour mettre à jour les données en réponse à des événements de changement sur les éléments de formulaire, vous pouvez écouter les événements correspondants et appeler des méthodes pour mettre à jour les données en conséquence.

### Options API

```vue
<template>
  <input type="text" :modelValue="message" @update:modelValue="updateMessage">
</template>

<script>
export default {
  data() {
    return {
      message: ''
    };
  },
  methods: {
    updateMessage(event) {
      this.message = event.target.value;
    }
  }
};
</script>
```

### Composition API

```vue
<template>
  <input type="text" :modelValue="message" @update:modelValue="updateMessage">
</template>

<script setup>
import { ref } from 'vue'

const message = ref('')

const updateMessage = (event) => {
  message.value = event.target.value
}
</script>
```

Dans cet exemple, nous écoutons l'événement `update:modelValue` qui est déclenché lorsque la valeur de l'input change. Lorsque cela se produit, nous mettons manuellement à jour la valeur de `message` en utilisant `message.value = event.target.value`. Cette syntaxe est verbeuse et peut devenir rapidement fastidieuse pour des composants plus complexes. C'est pourquoi Vue.js fournit également la directive `v-model`.

## Liaison de Valeur avec `v-model`

La manière la plus simple et courante de mettre en œuvre les input bindings est d'utiliser la directive `v-model`. Cette directive crée un lien bidirectionnel entre la valeur de l'élément de formulaire et les données dans votre composant Vue.

### v-model Options API

```vue
<template>
  <input type="text" v-model="message"><br>
  Voici votre message: {{ message }}
</template>

<script>
export default {
  data() {
    return {
      message: ''
    };
  }
};
</script>
```

### v-model Composition API

```vue
<template>
  <input type="text" v-model="message"><br>
  Voici votre message: {{ message }}
</template>

<script setup>
const message = ref('')
</script>
```

Dans cet exemple, `message` est une propriété de données dans votre composant Vue. Lorsque l'utilisateur saisit du texte dans l'input, la valeur de `message` est automatiquement mise à jour en conséquence.
