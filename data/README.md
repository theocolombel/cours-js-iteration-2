# Données du projet

## Données pour l'administration des objets

Les données des différents objets sont stockées en un fichier au format json intitulé ```data.json``` à importer dans le projet.

### Communication

Les modes de communication supportés sont regroupés dans une liste accessible par la clé "communication".

Détail : 

```yaml
"communication": [
    "wifi", "lorawan"
]
```

### Format des données mesurées

Les capteurs permettent de collecter des points de mesure dont le format est détaillé dans le fichier et accessibles par la clé "data_formats"

Exemple de format de données :

```yaml
"temperature":{
    "data_type": "number",
    "unit": "°C"
}
```

### Types d'objets

Afin de regrouper les données communes à plusieurs objets, ceux-ci sont ratachés à des types d'objets accessibles dans le fichier par la clé "types"

Exemple de types d'objets :

```yaml
"raspberry_TH":{
    "sensors": [
        "humidity", "temperature"
    ],
    "description": "Capteur de température et d'humidité basé sur Raspberry Pi 4",
    "default_image": "raspberry-pi-4.jpg",
    "communication": "wifi"
}
```

### Liste des objets


Exemple de descriptif d'objets :

Chaque objet est décrit dans le fichier dans le tableau accessible par la clé "objects"

Exemple d'objet :

```yaml
{
    "serial": "OBJ_001",
    "type": "raspberry_TH",
    "image": "raspberry-pi-4.jpg",
    "description": "Capteur de température et d'humidité de la salle de cours du Campus de Chambéry",
    "location": "45.644065, 5.867810",
    "refresh": 5,
    "status": true,
    "provisionning":{
        "date": "2020-03-20",
        "operator": "JPA"
    }
}
```