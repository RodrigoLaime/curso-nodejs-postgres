const { Client } = require('pg');

async function getConnection() {
  const client = new Client({
    host: 'localhost',
    port: 5433,
    user: 'nico',
    password: 'admin123',
    database: 'my_store'
  });
  //realiza la connecion
  await client.connect();
  // retornar el client para ejecutar consultas
  return client;
}
module.exports = getConnection;
