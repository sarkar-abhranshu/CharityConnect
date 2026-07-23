import pool from "./db.js";
import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();

app.use(cors());
app.use(express.json());]

app.get("/api/events", async (req, res) => {
  const [rows] = await pool.query(
    `SELECT events.*, users.username AS ngo_name
    FROM events
    JOIN users ON events.ngo_id = users.id
    ORDER BY event_date ASC`,
  );
  res.json(rows);
});

app.listen(3001, () => console.log("Server running on http://localhost:3001"));
