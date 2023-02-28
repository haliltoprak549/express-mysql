import mysql from 'mysql';
import { HOST, USER, PASSWORD, DB } from './db.config.js';

export let conn = mysql.createConnection({
    host: HOST,
    user: USER,
    password: PASSWORD,
    database: DB
});

conn.connect(error => {
    if (error) throw error;
    console.log('Database is connected successfully !');
});