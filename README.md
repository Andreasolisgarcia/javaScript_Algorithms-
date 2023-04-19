# README

Ceci est un ensemble de défis de programmation qui impliquent de résoudre différents problèmes en utilisant différentes algorithmes et des contraintes de complexité temporelle. Les défis sont décrits ci-dessous.

## Énoncés des problèmes

### Sujet 1

Étant donné une liste de nombres entiers et un nombre cible k, écrire une méthode qui renvoie un booléen indiquant s'il existe deux nombres dans la liste qui ajoutent jusqu'à k.

Par exemple, si la liste est [10, 15, 3, 7] et que k est 17, la fonction doit renvoyer vrai car 10 + 7 = 17. Si la liste est [1, 8, 10, 21] et que k est 19, la fonction doit renvoyer faux car il n'y a pas deux nombres dans la liste qui ajoutent jusqu'à 19.

### Sujet 2

Nous allons vous donner une liste contenant la hauteur (en étages) d'immeubles appartenant à une rue, d'est en ouest. Un agent immobilier voudrait que vous écriviez un algorithme qui renvoie combien de bâtiments de cette rue ont au moins un appartement avec une vue sur le soleil couchant (à l'ouest), afin d'évaluer correctement la valeur des bâtiments de la rue.

Par exemple, avec la liste [3, 7, 8, 3, 6, 1], la fonction doit renvoyer 3, car les immeubles ayant des hauteurs de 8, 6 et 1 ont tous au moins un appartement avec vue sur l'ouest. Ou encore, la liste [1, 4, 5, 8] doit renvoyer 1 car seul le dernier bâtiment a au moins un appartement avec vue sur l'ouest.

## Exercices

### Exercice 1

Résolvez le sujet 1 en utilisant une complexité temporelle O(n^2), c'est-à-dire que votre programme devra comparer chaque élément entre eux en utilisant deux boucles imbriquées.

### Exercice 2

Résolvez le sujet 2 en utilisant une complexité temporelle O(n^2), c'est-à-dire que votre programme devra comparer chaque élément entre eux en utilisant deux boucles imbriquées.

### Exercice 3

Résolvez le sujet 1 en utilisant une complexité temporelle O(n), c'est-à-dire que votre programme pourra parcourir plusieurs fois chaque élément de la liste (mais pas avec des boucles imbriquées!).

### Exercice 4

Résolvez le sujet 2 en utilisant une complexité temporelle O(n), c'est-à-dire que votre programme pourra parcourir plusieurs fois chaque élément de la liste (mais pas avec des boucles imbriquées!).

### Exercice 5

Résolvez le sujet 1 en ne faisant qu'un seul passage sur votre liste. Si vous réussissez cet exercice, sachez qu'il a été posé lors d'un entretien chez Google. Vous pouvez postuler chez Google. La classe, non ?

### Exerc6

Résolvez le sujet 2 en ne faisant qu'un seul passage sur votre liste.