import bcrypt from "bcrypt";
import pool from "@/lib/db";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

const JWT_SECRET = process.env.JWT_SECRET!;

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();
  const [rows]: any = await pool.query("SELECT * FROM users WHERE email = ?", [
    email,
  ]);
  if (rows.length === 0) {
    return NextResponse.json({ message: "User not found" }, { status: 401 });
  }
  const match = await bcrypt.compare(password, rows[0].password);
  if (!match) {
    return NextResponse.json({ message: "Invalid password" }, { status: 401 });
  }

  const token = jwt.sign(
    { id: rows[0].id, email: rows[0].email, role: rows[0].role },
    JWT_SECRET,
    { expiresIn: "7d" },
  );

  return NextResponse.json({
    success: true,
    user: {
      id: rows[0].id,
      username: rows[0].username,
      email: rows[0].email,
      role: rows[0].role,
    },
  });
}
