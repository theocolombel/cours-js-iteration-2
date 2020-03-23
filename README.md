# js-module2

Module de formation javascript pour la formation IoT Chambéry

## Etape 1 : Installer le serveur http

### Prérequis 

Le module de formation nécessite les programmes suivants :

* node js et npm (https://blog.teamtreehouse.com/install-node-js-npm-windows).
* VS Code

Clonez le dépot dans VS Code et suivez les instructions.

### Installer le serveur

Dans le dossier du projet, lancez la commande ``` npm install ```

### Lancer le serveur

2 modes de fonctionnement existent pour le serveur :

* ``` npm start ``` : lance le serveur web
* ``` npm test ``` : lance les tests du serveur

## Etape 2 : Créer l'application web

### Arborescence du projet

Le projet suit l'arborescence suivante :

```
|_data                      // Données du projet
|_public                    // Dossier contenant tous les fichiers accessibles
     |_examples             // Dossier contenant des exampels de pages html
     |_static
         |_adminlte         // Dossier contenant les sources du framework Admin LTE
             |_dist
                 |_css
                 |_img
                 |_js
             |_plugins
         |_images           // Dossier contenant les images
         |_js               // Dossier contenant les scripts javascript
     |_test                 // Dossier contenant les tests
|_                          // Racine du projet contenant l'application à lancer
```

### Lancement du serveur

Dans le dossier du projet, lancez la commande ``` npm start ```