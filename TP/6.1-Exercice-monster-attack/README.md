# 🧪 Chapitre 6 (alt) : Gestion des événements — "Mini clicker game"

## 🎯 Objectif pédagogique

Dans cet exercice, tu vas :

- Gérer les clics et les survols avec `@click`, `@mouseover`, etc.
- Ajouter un gestionnaire d’événements clavier (`keydown`)
- Créer une interaction simple et réactive

Projet fun : **"Mini clicker game"** 🕹️  
Clique sur le monstre pour lui infliger des dégâts. Une attaque spéciale peut être déclenchée avec la barre espace.

- au clic sur le monstre, lui infliger 1 point de dégat et indiquer le message: "Attaque normale !"
- un appuis sur la barre d'espace lui inflige une attaque spéciale de 10 points de vie, + message "Attaque spéciale !"
- au survol, le monstre vous repère et le message indiqué est "👀 Il vous a repéré !"
- utilisez le cycles de vie de votre composant pour ajouter les écouteurs d'événement au clavier
- n'oubliez pas d'enlever les écouteurs si le composant est détruit.

Exercice bonus :

- Créer un compteur, et un champ de saisie de type number pour incrémenter, décrémenter le compteur.
- Lorsque j'utilise les flèches du clavier (haut/bas) sur le champ de saisie, avec la touche "shift" enfoncée, je veux que le compteur s'incrément/décrémente par 100 plutôt que par 1.

astuce: utiliser les transformateur d'événement et neutraliser le comportement par défaut qui incrémente par 1.
