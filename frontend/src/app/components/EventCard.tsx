import Image from "next/image";

type Event = {
  id: number;
  title: string;
  event_date: string;
  location: string;
  ngo_name: string;
  image_url: string;
  price: number;
};

export default function EventCard({ event }: { event: Event }) {
  return (
    <article className="relative rounded-lg overflow-hidden h-80 group">
      <Image
        src={event.image_url}
        alt={event.title}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors" />

      <div className="relative z-10 h-full flex flex-col justify-end p-4 text-white">
        <h3 className="text-lg font-bold">{event.title}</h3>
        <p className="text-sm opacity-90">
          {new Date(event.event_date).toLocaleDateString()} . {event.location}
        </p>
        <p className="text-xs opacity-75 mb-2">Hosted by {event.ngo_name}</p>
        <span className="inline-block w-fit bg-orange-500 text-xs font-semibold px-2 py-1 rounded">
          {event.price > 0 ? `₹${event.price}` : "Free"}
        </span>
      </div>
    </article>
  );
}
