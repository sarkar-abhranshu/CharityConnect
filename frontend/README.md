# Charity Connect

A web platform that connects people with charitable events and NGOs. Browse events, discover causes, and support communities — all in one place.

> **Current status:** Early development — core browsing and authentication are live; more features coming.

---

## Features

- **Landing page** — Hero section with a call-to-action to join or donate
- **User authentication** — Sign up and log in with email/password; JWT-based sessions stored in `localStorage`
- **Event store** — Browse charity events hosted by NGOs, displayed in a responsive grid with details (image, title, date, location, NGO name, price)
- **Responsive design** — Works on desktop and mobile with a collapsible navigation menu
- **API routes** — POST /api/auth/signup, POST /api/auth/login, GET /api/events

### Pages

| Route | Description |
|---|---|
| / | Landing page |
| /login | Sign in |
| /signup | Create an account |
| /store | Browse charity events |

---

## How to Use

1. Open the app in your browser
2. Browse the landing page to learn about the platform
3. Click **JOIN US (DONATE)** or the user icon to get started
4. Sign up at `/signup` with a username, email, and password
5. Log in at `/login` to receive a session token
6. Browse available charity events at `/store`

---

## Local Development

### Prerequisites

- **Node.js** 18+ and npm
- A **MySQL-compatible database** (default: `charConn`)

### Setup

1. Clone the repo and navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file with your database credentials and a JWT secret:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:3000
   DB_HOST=your-db-host
   DB_USER=your-db-user
   DB_PASSWORD=your-db-password
   DB_NAME=charConn
   JWT_SECRET=your-secure-secret
   ```

4. Set up the required tables in your database:
   ```sql
   CREATE TABLE users (
     id INT AUTO_INCREMENT PRIMARY KEY,
     username VARCHAR(255),
     email VARCHAR(255),
     password VARCHAR(255),
     role VARCHAR(50) DEFAULT 'user'
   );

   CREATE TABLE events (
     id INT AUTO_INCREMENT PRIMARY KEY,
     title VARCHAR(255),
     image_url VARCHAR(500),
     event_date DATE,
     location VARCHAR(255),
     ngo_id INT,
     price DECIMAL(10, 2),
     FOREIGN KEY (ngo_id) REFERENCES users(id)
   );
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open http://localhost:3000

### Commands

| Command | Description |
|---|---|
| `npm run dev` | Start dev server (hot reload) |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## Tech Stack

**Next.js 16** · **React 19** · **TypeScript** · **Tailwind CSS 4** · **MySQL** · **JWT** · **bcrypt**

---

Built with care for a better world.