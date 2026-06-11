import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",
  user: "charConn",
  password: "12345678",
  database: "charConn",
  waitForConnections: true,
  connectionLimit: 10,
});

export default pool;
