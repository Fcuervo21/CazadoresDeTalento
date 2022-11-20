import mysql2 from 'mysql2/promise';

export const db = await mysql2.createConnection(
    {
        host: "mysql", 
        user: "root",
        password: "abc123",
        database: "CazDeTal",
        port: "3306"
    }
);