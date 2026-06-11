import bcrypt from "bcrypt";
import pool from "./db.js";
import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/auth/login", async (req, res) => {
  const { email, password } = req.body;
  const [rows] = await pool.query("SELECT * FROM users WHERE email = ?", [
    email,
  ]);
  if (rows.length === 0) {
    return res.status(401).json({ message: "User not found" });
  }
  const match = await bcrypt.compare(password, rows[0].password);
  if (!match) {
    return res.status(401).json({ message: "Invalid password" });
  }
  res.json({
    success: true,
    user: { id: rows[0].id, username: rows[0].username, role: rows[0].role },
  });
});

app.post("/api/auth/signup", async (req, res) => {
  const { username, email, password, role } = req.body;
  const hashPass = await bcrypt.hash(password, 10);
  const [rows] = await pool.query(
    "INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)",
    [username, email, hashPass, role],
  );
  res.json({
    success: true,
    user: { id: rows.insertId, username, role },
  });
});

app.listen(3001, () => console.log("Server running on http://localhost:3001"));
