# 🧪 Syntaxe des templates et réactivité — Exercice "Générateur de pseudo gamer"

## 🎯 Objectif pédagogique

Dans cet exercice, tu vas :

- Utiliser `{{ }}` pour interpoler des variables
- Afficher des éléments conditionnellement avec `v-if` / `v-else`
- Générer dynamiquement une liste avec `v-for`

Projet fun : **"Générateur de pseudo gamer"** 🎲  
Génère des pseudos en combinant aléatoirement des préfixes et suffixes selon un type de jeu sélectionné.

Composer un formulaire qui permet de réaliser son propre pseudo en choisissant parmis ces options, astuce: utiliser une variable `computed` pour composer le nom final.

Classes de jeu:

```js
{
  fps: ['Sniper', 'Headshot', 'Ghost', 'Reaper'],
  rpg: ['Elwyn', 'Shadowblade', 'Thorin', 'Elandor'],
  str: ['Commandant', 'Tactik', 'Builder', 'ZergRush']
}
```

Suffixe: `suffixes: ['X', '77', '_Pro', 'Master', '666']`
