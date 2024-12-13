"use client";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
function MyMatches() {
  const pathname = usePathname();
  return (
    <div className="bg-black min-h-screen p-5">
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
      {/* Tab Selection */}
      <div className="flex gap-x-4 items-center border-b border-gray-600 pb-2">
        <p className="text-yellow-400 font-bold cursor-pointer">All</p>
        <p className="text-gray-400 font-bold cursor-pointer hover:text-white">
          My Bets
        </p>
      </div>

      {/* Matches Section */}
      <div className="mt-6 border-dashed border-white border p-1">
        {/* Match Date */}
        <p className="text-center mb-4 text-blue-600 font-semibold">
          13-May Today
        </p>

        {/* Match Item */}
        <div className="bg-[#343434] border border-dashed border-gray-600 p-4 rounded-lg shadow-md text-white flex justify-between items-center">
          <p className="text-lg font-medium">18:00</p>
          <div className="w-full ml-4">
            {/* League Info */}
            <p className="text-sm text-gray-400 mb-2">
              BELGIUM — Pro League, Championship Round
            </p>
            {/* Team Scores */}
            <div className="flex justify-between items-center">
              <p className="text-white font-semibold">Trapani Calcio</p>
              <p className="text-yellow-400 text-lg font-bold">3</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <p className="text-white font-semibold">Piacenza Calcio</p>
              <p className="text-yellow-400 text-lg font-bold">2</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 border-dashed border-white border p-1">
        <div className="bg-[#343434] border border-dashed border-gray-600 p-4 rounded-lg shadow-md text-white flex justify-between items-center">
          <p className="text-lg font-medium">18:00</p>
          <div className="w-full ml-4">
            {/* League Info */}
            <p className="text-sm text-gray-400 mb-2">
              BELGIUM — Pro League, Championship Round
            </p>
            {/* Team Scores */}
            <div className="flex justify-between items-center">
              <p className="text-white font-semibold">Trapani Calcio</p>
              <p className="text-yellow-400 text-lg font-bold">3</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <p className="text-white font-semibold">Piacenza Calcio</p>
              <p className="text-yellow-400 text-lg font-bold">2</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyMatches;
