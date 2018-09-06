## Présentation
Bienvenue,

Voilà un petit serveur qui permet d'utiliser la puissance du projet OSRM dans votre pile technique. Ici j'ai fait une API qui permet à l'utilisateur de questionner le serveur pour obtenir un trajet entre différents points.

Source des données : http://download.geofabrik.de/europe/france/languedoc-roussillon.html

~ Pour le moment se serveur n'est capable de gérer que la partie "languedoc roussillon" ~

### Projet OSRM OFFICIEL

https://github.com/Project-OSRM/osrm-backend

https://github.com/Project-OSRM/osrm-backend/blob/master/docs/nodejs/api.md

### SETUP:

Docker Container:
- Debian:jessie
- NodeJs 4.x.x (Le module OSRM ne marche pas avec une autre version de nodejs pour le moment)
- wget, curl, nano...

## Installation

## 1 / Monté l'image

```
$ sudo docker build . -t "<yourname>/osrm-nodejs-machine"
```

## 2 / Lancer le container

```
$ sudo docker run -it -p 3000:3000 <yourname>/osrm-nodejs-machine
```

### / ! \ Nouveau fichier pbf ?

```
node_modules/osrm/lib/binding/osrm-extract data.osm.pbf -p node_modules/osrm/profiles/car.lua
```

```
node_modules/osrm/lib/binding/osrm-contract data.osrm
```


### Utilisation

GET http://domain.com:3000/osrm/route

## TODO

[x] Distribuer à la demande un trajet entre plusieurs points -> GET /routes/
[] Enregistrer des balades
[] L'utilisateur doit se logger pour créer une balades
[] PWA ACTIONS
