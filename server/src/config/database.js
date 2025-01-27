import myspl from "mysql2";
import dotenv from "dotenv";

const connection = myspl.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_POST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
})

export default connection;