# Utiliser vuejs

Pour initialiser un projet vuejs, tout comme vite, nous allons utiliser npm :

```sh
  npm create vue@latest
```

S'en suit un assistant qui vous demande de configurer votre projet:

```sh
   Nom du projet : … <votre-nouveau-projet>
  ✔ Ajouter TypeScript ? … Non / Oui › Non
  ✔ Ajouter le support de JSX ? … Non / Oui › Non
  ✔ Ajouter Vue Router pour le développement d'applications _single page_ ? … Non / Oui › Non
  ✔ Ajouter Pinia pour la gestion de l'état ? … Non / Oui › Non
  ✔ Ajouter Vitest pour les tests unitaires ? … Non / Oui › Non
  ✔ Ajouter une solution de test de bout en bout (e2e) ? › Non
  ✔ Ajouter ESLint pour la qualité du code ? … Non / Oui › Oui
  ✔ Ajouter Prettier pour le formatage du code ? … Non / Oui
```

Enfin l'assistant nous dit que nous devons exécuter ces commandes:

```sh
  cd <votre-nouveau-projet>
  npm install
  npm run format
  npm run dev
```

Le projet se lance alors à l'adresse : `http://localhost:5173/`

Dès que vous êtes prêts à livrer votre application en production, exécutez la commande suivante :

```sh
  npm run build
```
