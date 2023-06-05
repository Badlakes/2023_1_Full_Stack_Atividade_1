const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5432, // Porta padrão do PostgreSQL é 5432
  user: 'postgres',
  password: '123456',
  database: 'gamer_dat',
});

module.exports = pool;
