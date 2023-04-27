# [Star Wars API](https://star-wars-api.up.railway.app)🚀

## Desafío Técnico API REST STAR WARS

Este proyecto consiste en una API REST que utiliza NodeJS y Mongoose para conectarse a una base de datos y realizar operaciones CRUD en tres colecciones diferentes: Films, Planets y Starships. La aplicación está desplegada en Railway, y utiliza MongoDB Atlas como base de datos en la nube. Documentación realizada con Swagger [aquí](https://star-wars-api.up.railway.app/v1/docs).

## Instalación

Para instalar las dependencias necesarias, se debe ejecutar el siguiente comando:

```
npm install
```
(Solicitar Link de database Mongo DB Atlas) 

## Ejecución

Para correr la aplicación, se debe ejecutar el siguiente comando:

```
npm run start
```

## Endpoints

### - Films

GET /films: Devuelve todos los registros existentes.

GET /films/{id}: Al recibir una id, busca en la base de datos el film con la id correspondiente y lo devuelve.

POST /films: Crea un film en la base de datos.

PUT /films/{id}: Al recibir una id, busca en la base de datos el film con la id correspondiente, lo actualiza y devuelve el nuevo film actualizado.

DELETE /films/{id}: Al recibir una id, busca en la base de datos el film con la id correspondiente, lo elimina y devuelve un mensaje de éxito.

### - Planets

GET /planets: Devuelve todos los registros existentes.

GET /planets/{id}: Al recibir una id, busca en la base de datos el planeta con la id correspondiente y lo devuelve.

POST /planets: Crea un planeta en la base de datos.

PUT /planets/{id}: Al recibir una id, busca en la base de datos el planeta con la id correspondiente, lo actualiza y devuelve el nuevo planeta actualizado.

DELETE /planets/{id}: Al recibir una id, busca en la base de datos el planeta con la id correspondiente, lo elimina y devuelve un mensaje de éxito.

### - Starships

GET /starships: Devuelve todos los registros existentes.

GET /starships/{id}: Al recibir una id, busca en la base de datos la starship con la id correspondiente y la devuelve.

POST /starships: Crea una starship en la base de datos.

PUT /starships/{id}: Al recibir una id, busca en la base de datos la starship con la id correspondiente, lo actualiza y devuelve la nueva starship actualizada.

DELETE /starships/{id}: Al recibir una id, busca en la base de datos la starship con la id correspondiente, lo elimina y devuelve un mensaje de éxito.
