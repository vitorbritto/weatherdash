"use client";

import WeatherCard from "@/components/WeatherCard";
import FavoriteLocations from "@/components/FavoriteLocations";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-base-300 p-8">
      <div className="container mx-auto space-y-8">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
              />
            </svg>
          </div>
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-500 text-transparent bg-clip-text">
              WeatherDash
            </h1>
            <p className="text-sm opacity-70">
              Your Personal Weather Dashboard
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <WeatherCard />
          <FavoriteLocations />
        </div>
      </div>
    </main>
  );
}
