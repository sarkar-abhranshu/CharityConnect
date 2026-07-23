import bcrypt from "bcrypt";
import pool from "@/lib/db";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

const JWT_SECRET = process.env.JWT_SECRET!;

export async function POST(req: NextRequest) {
  const { username, email, password, role } = await req.json();
  const hashPass = await bcrypt.hash(password, 10);
  const [rows]: any = await pool.query(
    "INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)",
    [username, email, hashPass, role],
  );

  const token = jwt.sign({ id: rows.insertId, email, role }, JWT_SECRET, {
    expiresIn: "7d",
  });

  return NextResponse.json({
    success: true,
    user: { id: rows.insertId, username, role },
  });
}
