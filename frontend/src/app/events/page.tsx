import EventsPageClient from "../components/EventsPageClient";
import Header from "../components/Header";
import Footer from "../components/Footer";
import pool from '@/lib/db';

export interface Event {
  id: number;
  title: string;
  image_url: string;
  event_date: string;
  location: string;
  ngo_name: string;
  price: number;
}

export default async function Store() {
  const [rows] = await pool.query(
    `SELECT events.*, users.username as ngo_name
    FROM events
    JOIN users ON events.ngo_id = users.id
    ORDER BY event_date ASC`
  );
  const events = rows as Event[];

  if (!Array.isArray(events)) {
    throw new Error("Failed to fetch events");
  }

  return (
    <>
      <Header />
      <EventsPageClient events={events} />
      <Footer />
    </>
  );
}
