import EventCard from "../components/EventCard";
import Image from "next/image";

export default async function Store() {
  const res = await fetch("http://localhost:3001/api/events", {
    cache: "no-store",
  });
  const events = await res.json();
  const [featured, ...rest] = events;

  return (
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
  );
}
