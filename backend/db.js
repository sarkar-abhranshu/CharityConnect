import mysql from "mysql2/promise";
import "dotenv/config";

const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "charConn",
  waitForConnections: true,
  connectionLimit: 10,
  decimalNumbers: true, // mysql2 returns decimals as string otherwise and we want them as numbers only for price
});

export default pool;
