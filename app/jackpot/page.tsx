"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

function JackPot() {
  const pathname = usePathname();

  // Jackpot games data
  const jackpotGames = [
    {
      teamA: "Manchester United",
      teamB: "Arsenal",
      odds: { teamA: 2.5, draw: 3.2, teamB: 2.8 },
    },
    {
      teamA: "Barcelona",
      teamB: "Real Madrid",
      odds: { teamA: 2.1, draw: 3.5, teamB: 3.0 },
    },
    {
      teamA: "Juventus",
      teamB: "Inter Milan",
      odds: { teamA: 2.8, draw: 3.1, teamB: 2.6 },
    },
  ];

  return (
    <div className="bg-black min-h-screen p-5">
      {/* Navigation */}
      <div className="w-full overflow-x-auto text-white py-2">
        <div className="flex space-x-4 px-4">
          {[
            { name: "Home", path: "/" },
            { name: "Live", path: "/live" },
            { name: "Sports", path: "/sports" },
            { name: "Virtual", path: "/virtual" },
            { name: "My Matches", path: "/my-matches" },
            { name: "Jackpot", path: "/jackpot" },
          ].map((item, index) => (
            <Link key={index} href={item.path} passHref>
              <h2
                className={cn(
                  "whitespace-nowrap px-4 py-2 rounded hover:text-yellow-400 transition",
                  pathname === item.path
                    ? "text-yellow-400 font-bold"
                    : "text-white"
                )}
              >
                {item.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>

      {/* Jackpot Section */}
      <div className="mt-6">
        <h1 className="text-yellow-400 text-2xl font-bold mb-4">
          Jackpot Games
        </h1>
        <div className="space-y-4">
          {jackpotGames.map((game, index) => (
            <div
              key={index}
              className="bg-[#343434] p-4 rounded-lg text-white shadow-md"
            >
              <div className="flex justify-between items-center">
                {/* Teams */}
                <div>
                  <p className="text-lg font-semibold">{game.teamA}</p>
                  <p className="text-gray-400 text-sm">vs</p>
                  <p className="text-lg font-semibold">{game.teamB}</p>
                </div>
                {/* Odds */}
                <div className="flex gap-4">
                  <p className="bg-[#505050] px-3 py-1 rounded-md text-yellow-400">
                    {game.odds.teamA}
                  </p>
                  <p className="bg-[#505050] px-3 py-1 rounded-md text-yellow-400">
                    {game.odds.draw}
                  </p>
                  <p className="bg-[#505050] px-3 py-1 rounded-md text-yellow-400">
                    {game.odds.teamB}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default JackPot;
