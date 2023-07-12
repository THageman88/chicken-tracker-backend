const Pool = require ("pg").Pool;

const pool = new Pool({
    user: "timhageman",
    password: "TacoLove1*",
    host:"localhost",
    port: 5432,
    database: "chicken_tracker"
})

module.exports = pool;