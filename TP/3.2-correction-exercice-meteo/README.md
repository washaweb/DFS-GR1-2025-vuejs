# 🧪 Exercice : Syntaxe des templates VueJS, station Météo

## 🎯 Objectif pédagogique

Dans ce chapitre, nous allons apprendre à :

- Comprendre la syntaxe des templates Vue.js
- Afficher du texte dynamiquement avec `{{ }}`
- Utiliser les directives Vue : `v-bind`, `v-if`, `v-for`, `v-on`
- Manipuler dynamiquement des données dans l’interface

Nous allons créer un petit projet : **Un tableau de bord météo simplifié** ☁️

Voici les données de bases :
villes: "Marseille", Lille"
temperature: 27, 12
previsions Marseille: [
{ jour: "Lundi", temps: "Soleil" },
{ jour: "Mardi", temps: "Soleil" },
{ jour: "Mercredi", temps: "Soleil" },
]
previsions Lille: [
{ jour: "Lundi", temps: "Nuageux" },
{ jour: "Mardi", temps: "Nuageux" },
{ jour: "Mercredi", temps: "Pluie" },
]

Créer un template qui affiche les données météo,
Créer un bouton qui permet d'alterner successivement d'une ville à l'autre.
