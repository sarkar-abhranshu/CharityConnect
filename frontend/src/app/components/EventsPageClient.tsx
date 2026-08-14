"use client";

import { useEffect, useState } from "react";
import EventCard from "./EventCard";
import EventCarousel from "./EventCarousel";
import { Event } from "../events/page";

function seededShuffle<T>(array: T[], seed: number): T[] {
  const shuffled = [...array];
  let currentSeed = seed;

  const seededRandom = () => {
    currentSeed = (currentSeed * 9301 + 49297) % 233280;
    return currentSeed / 233280;
  };

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(seededRandom() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

export default function EventsPageClient({ events }: { events: Event[] }) {
  const [shuffledEvents, setShuffledEvents] = useState<Event[]>([]);

  useEffect(() => {
    // checks if shuffle seed in sessionStorage
    let seed = sessionStorage.getItem("eventShuffleSeed");

    if (!seed) {
      // generates new seed for session based on date
      seed = Date.now().toString();
      sessionStorage.setItem("eventShuffleSeed", seed);
    }

    // uses seed to get shuffled list of events per session
    const shuffled = seededShuffle(events, parseInt(seed));
    setShuffledEvents(shuffled);
  }, [events]);

  if (shuffledEvents.length === 0) {
    return (
      <div className="min-hmin-h-screen bg-gray-50">
        <main className="max-w-6xl mx-auto px-4 py-12">
          <div className="text-center text-gray-500">Loading events...</div>
        </main>
      </div>
    );
  }

  const carouselEvents = shuffledEvents.slice(0, 4);
  const cardEvents = shuffledEvents.slice(4, 8);

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-6xl mx-auto px-4 py-12">
        {carouselEvents.length > 0 && (
          <EventCarousel events={carouselEvents} />
        )}

        {cardEvents.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {cardEvents.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
