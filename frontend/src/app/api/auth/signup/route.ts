import bcrypt from "bcrypt";
import pool from "./db.js";
import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";
import "dotenv/config";

const app = express();

const JWT_SECRET = process.env.JWT_SECRET;

app.use(cors());
app.use(express.json());

app.post("/api/auth/signup", async (req, res) => {
  const { username, email, password, role } = req.body;
  const hashPass = await bcrypt.hash(password, 10);
  const [rows] = await pool.query(
    "INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)",
    [username, email, hashPass, role],
  );

  const token = jwt.sign({ id: rows.insertId, email, role }, JWT_SECRET, {
    expiresIn: "7d",
  });
  res.json({
    success: true,
    user: { id: rows.insertId, username, role },
  });
});
