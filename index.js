const jsonServer = require('json-server')

//Creacion del server
const server = jsonServer.create();

//Rutas de informacion
const router = jsonServer.router("db.json");

//Puntos de entrada
const middlewares = jsonServer.server.defaults();

//Puerto a utilizar
const port = process.env.PORT || 4000;

//usar los server
server.use(middlewares);

server.use(router);

server.listen(port);
