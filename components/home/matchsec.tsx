import { ChartSpline, Volleyball } from "lucide-react";
import Link from "next/link";

export const MatchSec = () => {
  const clubs = [
    "Arsenal",
    "Chelsea",
    "Manchester United",
    "Liverpool",
    "Real Madrid",
    "Barcelona",
    "Bayern Munich",
    "Juventus",
    "PSG",
    "Inter Milan",
  ];

  // Function to get two random, unique clubs
  const getRandomClubs = () => {
    const shuffled = clubs.sort(() => 0.5 - Math.random());
    return [shuffled[0], shuffled[1]];
  };

  return (
    <div className="text-white font-sans">
      {/* Match Header */}
      <div className=" text-white px-4 py-2 flex justify-between items-center rounded-t-lg shadow-md">
        <p className="text-sm font-semibold">30/09 Sunday</p>
        <div className="flex items-center gap-4">
          <p className="bg-booka text-black px-3 py-1 rounded-md font-bold cursor-pointer hover:bg-yellow-400 transition">
            1
          </p>
          <p className="bg-gray-700 px-3 py-1 rounded-md font-semibold text-gray-300 cursor-pointer hover:bg-gray-600 transition">
            x
          </p>
          <p className="bg-gray-700 px-3 py-1 rounded-md font-semibold text-gray-300 cursor-pointer hover:bg-gray-600 transition">
            2
          </p>
        </div>
      </div>

      {/* Match Details */}
      <div className=" px-4 py-3 rounded-b-lg shadow-md">
        {[1, 2].map((_, idx) => {
          const [homeTeam, awayTeam] = getRandomClubs();
          return (
            <div
              key={idx}
              className="border-b border-gray-800 py-4 last:border-b-0"
            >
              {/* Match Title */}
              <div className="flex justify-between items-center mb-3">
                <p className="flex items-center gap-2 text-sm">
                  <span className="text-booka font-bold">31’48”</span> France -
                  Ligue 1
                </p>
                <div className="relative flex items-center gap-1">
                  <ChartSpline className="text-gray-400" />
                  <ChartSpline className="text-gray-400" />
                </div>
              </div>

              {/* Teams and Scores */}
              <div className="flex flex-col gap-2 mb-3">
                <div className="flex gap-x-10 items-center">
                  <p className="text-sm">{homeTeam}</p>
                  <p className="text-booka font-bold text-lg">
                    {Math.floor(Math.random() * 5)}
                  </p>
                </div>
                <div className="flex gap-x-10 items-center">
                  <p className="text-sm">{awayTeam}</p>
                  <div className="flex items-center gap-x-10">
                    <p className="text-booka font-bold text-lg">
                      {Math.floor(Math.random() * 5)}
                    </p>
                    <div className="flex items-center gap-2">
                      {[1.35, 2.45, 3.67].map((value, idx) => (
                        <p
                          key={idx}
                          className="bg-gray-800 text-booka text-xs px-3 py-1 rounded-md font-medium cursor-pointer hover:bg-gray-700 transition"
                        >
                          {value}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Stats */}
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <p className="flex items-center gap-1 cursor-pointer hover:text-white transition">
                  +234 <span>{">"}</span>
                </p>
                <Volleyball className="text-booka" />
                <p className="font-bold text-booka">43</p>
              </div>
            </div>
          );
        })}
        <Link
          href={"/events"}
          className="text-center flex items-center justify-center p-2 text-sm border-b border-white"
        >
          All Event{"(s)"}
        </Link>
      </div>
    </div>
  );
};
