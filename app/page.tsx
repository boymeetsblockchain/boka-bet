"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LoaderPinwheel, Grid3x3, Fan, FileDigit } from "lucide-react";

import { MatchSec } from "@/components/home/matchsec";

function Heropage() {
  const pathname = usePathname();

  return (
    <div className="bg-black min-h-screen">
      {/* Horizontal Slider */}
      <div className="w-full overflow-x-auto  text-white py-2">
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

      {/* Hero Image */}
      <div className="relative w-full h-40">
        <Image src="/hero.png" layout="fill" objectFit="cover" alt="hero" />
      </div>

      {/* Icons Section */}
      <div className="flex items-center justify-between px-4 mt-6">
        {[
          { icon: Fan, label: "Soccer" },
          { icon: LoaderPinwheel, label: "Today" },
          { icon: FileDigit, label: "Booking Codes" },
          { icon: Grid3x3, label: "More" },
        ].map(({ icon: Icon, label }, index) => (
          <div key={index} className="relative group">
            <div className="flex items-center justify-center w-20 h-20 border-l-2 border-r-2 border-b-2 border-booka rounded-lg bg-transparent">
              <div className="text-center">
                <Icon className="mx-auto text-booka" size={32} />
                <p className="mt-2 text-white font-bold text-xs">{label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Gradient Background Section */}
      <div className="mt-8 px-4 py-6 text-white  flex items-center justify-between gap-x-3 bg-gradient-to-r from-gray-700/30 via-gray-500/50 to-gray-800/20 rounded-lg shadow-lg">
        <p className="text-lg font-bold">Live</p>
        <p className="mt-2  border-b-2 text-booka border-booka">Soccer </p>
        <p className="mt-2 "> V-Soccer </p>
        <p className="mt-2 "> ESports </p>
      </div>
      <div className="flex items-center justify-between w-full p-3 rounded-lg  shadow-md">
        <p className="bg-booka text-black font-bold py-2 px-4 text-xs rounded-lg transition hover:bg-yellow-400 hover:text-black cursor-pointer">
          1x2
        </p>
        <p className="bg-[#303030] text-gray-400 py-2 px-4 text-xs rounded-lg transition hover:bg-gray-700 hover:text-white cursor-pointer">
          Over/Under
        </p>
        <p className="bg-[#303030] text-gray-400 py-2 px-4 text-xs rounded-lg transition hover:bg-gray-700 hover:text-white cursor-pointer">
          GG/NG
        </p>
        <p className="bg-[#303030] text-gray-400 py-2 px-4 text-xs rounded-lg transition hover:bg-gray-700 hover:text-white cursor-pointer">
          Double Chance
        </p>
      </div>
      {/* match component */}
      <div>
        <MatchSec />
      </div>
      <div className="mt-8 px-4 py-6 text-white  flex items-center justify-between gap-x-3 bg-gradient-to-r from-gray-700/30 via-gray-500/50 to-gray-800/20 rounded-lg shadow-lg">
        <p className="text-lg font-bold">Sports</p>
        <p className="mt-2  border-b-2 text-booka border-booka">Soccer </p>
        <p className="mt-2 "> V-Soccer </p>
        <p className="mt-2 "> ESports </p>
      </div>
      <div className="flex items-center justify-between px-4 py-6 ">
        <p className="text-sm text-booka">Highlights</p>
        <p className="text-white text-sm">Today</p>
        <p className="text-white text-sm">Top League</p>
        <p className="text-white text-sm">Countries</p>
      </div>
      <div className="flex items-center justify-between w-full p-3 rounded-lg  shadow-md">
        <p className="bg-booka text-black font-bold py-2 px-4 text-xs rounded-lg transition hover:bg-yellow-400 hover:text-black cursor-pointer">
          1x2
        </p>
        <p className="bg-[#303030] text-gray-400 py-2 px-4 text-xs rounded-lg transition hover:bg-gray-700 hover:text-white cursor-pointer">
          Over/Under
        </p>
        <p className="bg-[#303030] text-gray-400 py-2 px-4 text-xs rounded-lg transition hover:bg-gray-700 hover:text-white cursor-pointer">
          GG/NG
        </p>
        <p className="bg-[#303030] text-gray-400 py-2 px-4 text-xs rounded-lg transition hover:bg-gray-700 hover:text-white cursor-pointer">
          Double Chance
        </p>
      </div>
      <MatchSec />
    </div>
  );
}

export default Heropage;
