import pool from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  const [rows] = await pool.query(
    `SELECT events.*, users.username AS ngo_name
    FROM events
    JOIN users ON events.ngo_id = users.id
    ORDER BY event_date ASC`,
  );
  return NextResponse.json(rows);
}
