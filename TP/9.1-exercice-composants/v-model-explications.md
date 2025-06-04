# Explication du v-model

```vue
<!-- parent.vue -->
<Parent>
  <Child v-model="message"></Child>
</Parent>

<Parent>
  <Child :modelValue="message" @update:modelValue="message = $event"></Child>
</Parent>
```

Dans le script du parent

```js
const message = ref('toto')
```

## Composant enfant

```vue
<!-- Child.vue -->
<template>
  <p>{{ messageLocal }}</p>
</template>
```

```js
const messageLocal = defineModel('modelValue')
```
