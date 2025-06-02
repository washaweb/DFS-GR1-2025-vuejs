# Watchers

Les "watchers" sont une fonctionnalité de Vue.js qui vous permet de surveiller les changements sur une propriété de données spécifique dans un composant Vue et d'exécuter des actions en réponse à ces changements. Les watchers sont utiles lorsque vous avez besoin de réagir à des changements spécifiques dans les données de votre application et d'effectuer des opérations telles que des requêtes AJAX, des calculs complexes ou des modifications de l'interface utilisateur.

Voici comment utiliser les watchers dans un composant Vue :

## Définition d'un Watcher

Vous pouvez définir un watcher dans l'option `watch` de votre composant. Chaque entrée de l'objet `watch` est associée à une propriété de données que vous souhaitez surveiller, et la valeur est une fonction qui sera exécutée chaque fois que la valeur de la propriété change.

Exemple :

```javascript
export default {
  data() {
    return {
      message: '',
      messageLength: 0
    };
  },
  watch: {
    message(newValue, oldValue) {
      this.messageLength = newValue.length;
    }
  }
};
```

Dans cet exemple, nous avons défini un watcher pour la propriété `message`. Chaque fois que la valeur de `message` change, la fonction associée au watcher est appelée avec la nouvelle valeur (`newValue`) et l'ancienne valeur (`oldValue`). Dans ce cas, nous mettons à jour la propriété `messageLength` pour refléter la longueur de la nouvelle valeur de `message`.

## Options de Watcher

Vous pouvez également définir un watcher en utilisant une syntaxe plus avancée en passant un objet à la place d'une fonction. Cela vous permet de définir des options supplémentaires pour le watcher, telles que `immediate` pour exécuter la fonction de watcher immédiatement lors de la création du composant, ou `deep` pour surveiller les changements dans les propriétés imbriquées d'un objet.

Exemple :

```javascript
export default {
  data() {
    return {
      user: {
        name: '',
        age: 0
      }
    };
  },
  watch: {
    'user.name': {
      handler(newValue, oldValue) {
        console.log('Nom de l\'utilisateur changé:', newValue);
      },
      immediate: true,
      deep: true
    }
  }
};
```

Dans cet exemple, nous avons défini un watcher pour la propriété `user.name`, en spécifiant les options `immediate` et `deep`. Le watcher sera appelé immédiatement lors de la création du composant et surveillera les changements dans les propriétés imbriquées de `user.name`.

## Utilisation avec la composition API

En composition API, les watchers sont définis en utilisant la fonction `watch`.
Le premier argument de watch peut être différents types de "sources" réactives : ça peut être une ref (y compris des refs calculées), un objet réactif, une fonction accesseur, ou un tableau de différentes sources :

```js
const x = ref(0)
const y = ref(0)

// simple ref
watch(x, (newX) => {
  console.log(`x is ${newX}`)
})

// accesseur
watch(
  () => x.value + y.value,
  (sum) => {
    console.log(`sum of x + y is: ${sum}`)
  }
)

// tableau de différentes sources
watch([x, () => y.value], ([newX, newY]) => {
  console.log(`x is ${newX} and y is ${newY}`)
})

// observer un objet réactif profond
watch(
  () => state.someObject,
  (newValue, oldValue) => {
    // Remarque : `newValue` sera égale à `oldValue` ici
    // *sauf si* state.someObject a été remplacé
  },
  { deep: true }
)
//À partir de la version 3.5, l'option deep peut aussi être un nombre indiquant la profondeur maximale à traverser, 
// c'est-à-dire de combien de niveaux Vue traverse un objet avec des propriétés imbriquées
```

Notez que vous ne pouvez pas observer une propriété d'un objet réactif de cette manière :

```js
const obj = reactive({ count: 0 })

// cela ne fonctionnera pas car on passe un nombre à watch()
watch(obj.count, (count) => {
  console.log(`Count est égal à: ${count}`)
})
```

À la place, utilisez un accesseur :

```js
// à la place, utilisez un accesseur :
watch(
  () => obj.count,
  (count) => {
    console.log(`Count est égal à: ${count}`)
  }
)
```

## Utilisation des Watchers

Les watchers sont utiles lorsque vous avez besoin de réagir à des changements spécifiques dans les données de votre application et d'effectuer des opérations en réponse à ces changements. Vous pouvez utiliser les watchers pour mettre à jour d'autres données, déclencher des actions, ou même communiquer avec des composants externes ou des services API.
Attention toutefois, l'utilisation systématique de watchers alourdi l'exécution du code, il est souvent préférable d'utiliser des computed propetries à la place.

watch fonctionne à la volée par défaut : la fonction de rappel ne sera pas appelée tant que la source observée n'aura pas changé. Mais dans certains cas, on peut souhaiter que cette même logique de rappel soit exécutée de manière précoce - par exemple, on peut vouloir récupérer des données initiales, puis les récupérer de nouveau chaque fois qu'un état pertinent change.

Nous pouvons forcer l'exécution immédiate d'un observateur en passant l'option `immediate: true`

## Effets de bords et gestion asynchrone watchEffect()

Il est commun pour la fonction de l'observateur d'utiliser exactement le même état réactif comme source. Par exemple, considérez le code suivant, qui utilise un observateur pour charger une ressource distante à chaque changement de la ref `todoId` :

```js
const todoId = ref(1)
const data = ref(null)

watch(
  todoId,
  async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
    )
    data.value = await response.json()
  },
  { immediate: true }
)
```

En particulier, remarquez comment l'observateur utilise doublement todoId, une fois comme source, ensuite à nouveau à l'intérieur de la fonction.

Cela peut être simplifié par watchEffect(). watchEffect() nous permet d'effectuer des effets de bord immédiatement tout en traquant automatiquement les dépendances réactives de cet effet. L'exemple précédent peut être réécrit de la sorte :

```js
watchEffect(async () => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
  )
  data.value = await response.json()
})
```

Ici, la fonction sera exécutée immédiatement, il n'y a pas besoin de spécifier immediate : true. Pendant son exécution, elle suivra automatiquement todoId.value comme une dépendance (similaire aux propriétés calculées). Chaque fois que todoId.value change, la fonction sera exécutée à nouveau. Avec watchEffect(), nous n'avons plus besoin de passer explicitement todoId comme source.

Vous pouvez vous référer à cet [exemple](https://fr.vuejs.org/examples/#fetching-data) avec watchEffect et une récupération de données en action.

Pour des exemples comme ceux-ci, avec une seule dépendance, le bénéfice de `watchEffect()` est relativement faible. Mais pour les surveillances qui ont plusieurs dépendances, l'utilisation de `watchEffect()` supprime la charge de maintenir la liste des dépendances manuellement. De plus, si vous devez surveiller plusieurs propriétés dans une structure de données imbriquée, `watchEffect()` peut s'avérer plus efficace qu'un observateur profond, car il ne suivra que les propriétés qui sont utilisées dans la fonction, plutôt que de les suivre toutes de manière récursive.

En lire d'avantage sur la documentation officielle de vue js : 
- https://fr.vuejs.org/guide/essentials/watchers.html#watcheffect

