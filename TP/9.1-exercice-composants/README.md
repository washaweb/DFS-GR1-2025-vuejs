# 🧪 Chapitre 10 : Composants — "Collection de cartes"

## 🎯 Objectif pédagogique

Dans cet exercice, tu vas :

- Créer un composant personnalisé et réutilisable
- Passer des données via des **props**
- Utiliser `v-for` pour afficher une liste de composants

Projet fun : **"Collection de cartes"** 🎴  
Afficher une galerie de jeux vidéo sous forme de cartes avec image, nom, genre et note.

- Crée un composant game-card pour afficher un jeu
- Crée une liste de jeux (min 3 jeux) en utilisant le composant créé
- Voici les caractéristiques d'un jeu exemple :

```js
{
  titre: 'Elden Ring',
  image: 'https://upload.wikimedia.org/wikipedia/en/b/b9/Elden_Ring_Box_art.jpg',
  genre: 'Action RPG',
  note: 9
}
```

Etape bonus:

- Ajouter un bouton dans le composant GameCard qui permet de déclencher un événement personnalisé 'ajouter aux favoris'.
- Dans le parent, écouter l'évenement personnalisé et ajouter le jeu dans un tableau de favoris lorsqu'il est déclenché.

## Exercice secondaire: global component

Créer un composant button pour remplacer tous les boutons de notre application

Le composant bouton devra :

- utiliser 2 props `iconLeft` et `iconRight` pour permettre d'ajouter un icone à gauche ou à droite du texte
- utiliser 1 prop `variant` qui permettra de modifier la variante de style du bouton `primary, info, success, warning, danger, light, dark...`
- utiliser 1 prop `size` qui permettra de modifier la taille du bouton `sm, md, lg`
- utiliser un slot pour le texte du bouton

l'utilisation finale devra ressembler à ça :

```vue
<BButton variant="primary" size="sm" iconLeft="envelope">Mon texte de bouton</BButton>
```

bonus : en vous basant sur la documentation de vue, déclarez l'import de votre nouveau composant `BButton` de manière globale dans votre application.
