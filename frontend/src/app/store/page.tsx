import EventCard from "../components/EventCard";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
  const baseUrl = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000";
    const res = await fetch(`${baseUrl}/api/events`, {
      cache: "no-store",
    });

  if (!res.ok) {
    throw new Error(`API returned ${res.status}: ${res.statusText}`);
  }

  const events: Event[] = await res.json();

  if (!Array.isArray(events)) {
    throw new Error("API response is not an array");
  }
  const [featured, ...rest] = events;

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        <main className="max-w-6xl mx-auto px-4 py-12">
          {featured && (
            <div className="bg-teal-900 text-white rounded-lg overflow-hidden mb-12 grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                <Image
                  src={featured.image_url}
                  alt={featured.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <h1 className="text-3xl font-bold mb-2">{featured.title}</h1>
                <p className="opacity-90 mb-1">
                  {new Date(featured.event_date).toLocaleDateString()} .{" "}
                  {featured.location}
                </p>
                <p className="opacity-75 mb-4">Hosted by {featured.ngo_name}</p>
                <span className="inline-block w-fit bg-orange-500 px-4 py-2 rounded font-semibold">
                  {featured.price > 0 ? `₹${featured.price}` : "Free"}
                </span>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {rest.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
