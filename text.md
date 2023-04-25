## inicar docker

docker-compose up -d postgres
docker-compose up -d pgadmin

docker-compose ps

docker-compose down

docker ps

docker inspect id

##
docker stop postgres
docker rm postgres
## acceder al db con docker

docker-compose exec postgres bash //acceder al contenedor de docker

ls -l //

psql -h localhost -d my_store -U nico // connecion a la db, le pasamos la db y el usuario

\d+ //para ver la estructura de la db "my_store=# \d+"

\q //para salir de la db

exit //para salir del conetenedor

## crear primera talba en pg

CREATE TABLE task (
id serial PRIMARY KEY,
title VARCHAR ( 250 ) NOT NULL,
completed boolean DEFAULT false
);


## mysql y phpmyadmin iniciado con docker

docker-compose up -d mysql
docker-compose up -d phpmyadmin

##
npm i sequelize-cli --save-dev


## para usar la db de mysql con phmyadmin
<!-- cambiar en el .env -->
DB_USER='root'
DB_PORT='33061'
<!-- cambiar en el sequelize.js -->
const URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
dialect: 'mysql',



y la url enves de postgres poner mysql
a
