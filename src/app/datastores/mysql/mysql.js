import mysql from 'mysql'

const pool = mysql.createPool({
    host: '121.40.92.7',
    port: '3306',
    database: 'game_dev',
    user: 'root',
    password: '112358',
})

export default pool
