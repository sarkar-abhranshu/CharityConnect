"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Event } from "../events/page";

export default function EventCarousel({ events }: { events: Event[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = 50;
    const duration = 5000;
    const increment = (interval / duration) * 100;

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + increment;
      });
    }, interval);

    const slideTimer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % events.length);
      setProgress(0);
    }, duration);

    return () => {
      clearInterval(progressTimer);
      clearInterval(slideTimer);
    };
  }, [events.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setProgress(0);
  };

  const gotoNext = () => {
    setCurrentIndex((prev) => (prev + 1) % events.length);
    setProgress(0);
  };

  const gotoPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + events.length) % events.length);
    setProgress(0);
  };

  if (events.length === 0) return null;

  const currentEvent = events[currentIndex];

  return (
    <div className="relative bg-teal-900 text-white rounded-lg overflow-hidden mb-12">
      <div className="grid md:grid-cols-2">
        <div className="relative h-64 md:h-96">
          {events.map((event, index) => (
            <Image
              key={event.id}
              src={event.image_url}
              alt={event.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={`object-cover transition-opacity duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
              priority={index < 2}
              loading={index < 2 ? 'eager' : 'lazy'}
            />
          ))}
        </div>

        <div className="p-8 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-2">{currentEvent.title}</h1>
          <p className="opacity-90 mb-1">
            {new Date(currentEvent.event_date).toLocaleDateString()} .{" "}
            {currentEvent.location}
          </p>
          <p className="opacity-75 mb-4">
            Hosted by {currentEvent.ngo_name}
          </p>
          <span className="inline-block w-fit bg-orange-500 px-4 py-2 rounded font-semibold">
            {currentEvent.price > 0 ? `₹${currentEvent.price}` : "Free"}
          </span>
        </div>
      </div>

      {events.length > 1 && (
        <>
          <button
            onClick={gotoPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
            aria-label="Previous event"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={gotoNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
            aria-label="Next event"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </>
      )}

      {events.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {events.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="relative"
              aria-label={`Go to slide ${index + 1}`}
            >
              {index === currentIndex ? (
                <div className="relative w-8 h-2 flex items-center justify-center">
                  <div className="absolute w-full h-full bg-white/30 rounded-full" />
                  <div
                    className="absolute left-0 h-full bg-white rounded-full transition-all duration-75 ease-linear"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              ) : (
                  <div className="w-2 h-2 rounded-full bg-white/50 hover:bg-white/75 transition-colors" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
