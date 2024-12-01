"use client";

import React, { useEffect, useState } from "react";

// Define types for API response
interface Outcome {
  name: string;
  price: number;
}

interface Market {
  key: string;
  last_update: string;
  outcomes: Outcome[];
}

interface Bookmaker {
  key: string;
  title: string;
  last_update: string;
  markets: Market[];
}

interface Match {
  id: string;
  sport_key: string;
  sport_title: string;
  commence_time: string;
  home_team: string;
  away_team: string;
  bookmakers: Bookmaker[];
}

export default function Home() {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchOdds = async () => {
      try {
        const response = await fetch(
          "https://api.the-odds-api.com/v4/sports/soccer_epl/odds/?apiKey=30e2b52ef54ee54aab41faa72c03cd79&regions=uk&markets=h2h&oddsFormat=decimal&dateFormat=iso"
        );
        const data: Match[] = await response.json();
        setMatches(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchOdds();
  }, []);

  if (loading) {
    return (
      <div className="h-screen bg-black text-white flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen text-white p-5">
      <h1 className="text-3xl font-bold mb-8 booka">Soccer Betting Odds</h1>
      <div className="grid grid-cols-1 gap-6">
        {matches.map((match) => (
          <div
            key={match.id}
            className="bg-gray-800 p-5 rounded-lg shadow-md border border-gray-600"
          >
            {/* Match Information */}
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-lg font-bold">
                  {match.home_team} vs {match.away_team}
                </h2>
                <p className="text-gray-400 text-sm">
                  {new Date(match.commence_time).toLocaleString()} -{" "}
                  {match.sport_title}
                </p>
              </div>
              <div className="text-booka text-xs font-medium">
                Live <span className="animate-pulse">●</span>
              </div>
            </div>

            {/* Betting Odds */}
            <div className="space-y-4">
              {match.bookmakers.map((bookmaker) => (
                <div key={bookmaker.key} className="bg-gray-700 p-4 rounded-md">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-sm font-bold">{bookmaker.title}</h3>
                    <span className="text-gray-400 text-xs">
                      Updated:{" "}
                      {new Date(bookmaker.last_update).toLocaleTimeString()}
                    </span>
                  </div>

                  <div className="flex justify-between items-center space-x-2">
                    {bookmaker.markets[0]?.outcomes.map((outcome) => (
                      <button
                        key={outcome.name}
                        className="flex-1 text-center py-2 rounded-md bg-gray-900 border border-gray-700 hover:bg-gray-600"
                      >
                        <span className="block text-sm">{outcome.name}</span>
                        <span
                          className={`block text-lg font-bold ${
                            outcome.price > 0
                              ? "text-green-500"
                              : "text-red-500"
                          }`}
                        >
                          {outcome.price > 0
                            ? `+${outcome.price}`
                            : outcome.price}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
