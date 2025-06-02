
# 🧪 Chapitre 12 (alt) : Slots — "Système de notifications"

## 🎯 Objectif pédagogique

Dans cet exercice, tu vas :

- Utiliser les **slots** dans un composant personnalisé
- Créer un composant flexible avec des **slots nommés**
- Structurer l’interface de façon modulaire

Projet fun : **"Système de notifications"** 📋  
Créer un composant de type "toast" ou "modal" qui peut recevoir un contenu personnalisé selon le type de message.

---

## 🧱 Étape 1 : Composant `Notification.vue`

### 📄 `src/components/Notification.vue`

```vue
<template>
  <div class="notification">
    <div class="icone">
      <slot name="icone">🔔</slot>
    </div>
    <div class="contenu">
      <h3><slot name="titre">Notification</slot></h3>
      <p><slot>Contenu de la notification.</slot></p>
    </div>
    <button @click="$emit('fermer')">✖</button>
  </div>
</template>

<script>
export default {
  name: 'Notification'
};
</script>

<style scoped>
.notification {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  background: #f0f0f0;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  position: relative;
}
.icone {
  font-size: 2rem;
  margin-right: 1rem;
}
button {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: transparent;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
}
</style>
```

---

## 🧱 Étape 2 : Utilisation dans `App.vue`

### 📄 `src/App.vue`

```vue
<template>
  <div class="container mt-4">
    <Notification v-if="alerteVisible" @fermer="alerteVisible = false">
      <template #icone>⚠️</template>
      <template #titre>Alerte système</template>
      Une action importante doit être confirmée !
    </Notification>

    <Notification v-if="succèsVisible" @fermer="succèsVisible = false">
      <template #icone>✅</template>
      <template #titre>Succès débloqué</template>
      Tu viens de terminer ta quête avec succès.
    </Notification>

    <button @click="alerteVisible = true">Voir alerte</button>
    <button @click="succèsVisible = true">Voir succès</button>
  </div>
</template>

<script>
import Notification from './components/Notification.vue';

export default {
  components: { Notification },
  data() {
    return {
      alerteVisible: false,
      succèsVisible: false
    };
  }
};
</script>
```

---

## 🔍 Ce que nous avons appris

- Créer un composant avec `slot` par défaut et slots nommés
- Injecter dynamiquement du contenu dans les emplacements personnalisés
- Gérer l’affichage conditionnel de composants avec slots

---

## 🎯 Exercices bonus

- Ajouter un slot pour les actions (boutons "OK", "Annuler", etc.)
- Utiliser le composant pour afficher des messages d’erreur réseau
- Ajouter des animations d’apparition/disparition avec CSS ou une transition Vue

---

✅ Tu es maintenant prêt(e) à structurer tes vues avec **Vue Router** 🏠
