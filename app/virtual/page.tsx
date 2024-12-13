"use client";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import {
  LoaderPinwheel,
  Gamepad2,
  Table,
  Volleyball,
  Joystick,
  Monitor,
  ArrowBigDown,
  WifiIcon,
} from "lucide-react";

function Virtual() {
  const pathname = usePathname();

  // Data for Virtual EPL Section
  const virtualSports = [
    { src: "/epl.png", alt: "EPL", label: "Sport Virtual EPL" },
    { src: "/euros.png", alt: "La Liga", label: "Sport Virtual Euros" },
    {
      src: "/bayern.png",
      alt: "Bundesliga",
      label: "Sport Virtual Bundesliga",
    },
    { src: "/wc.png", alt: "Serie A", label: "Sport Virtual World cup" },
    { src: "/basket.png", alt: "Ligue 1", label: "Sport Virtual Basketball" },
  ];

  return (
    <div className="bg-black min-h-screen">
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

      <div className="flex  overflow-x-auto gap-4 px-4 mt-6">
        {[
          { icon: LoaderPinwheel, label: "Soccer" },
          { icon: Gamepad2, label: "V-Soccer" },
          { icon: LoaderPinwheel, label: "Basketball" },
          { icon: Table, label: "Table Tennis" },
          { icon: Volleyball, label: "Volleyball" },
          { icon: Monitor, label: "Cricket" },
          { icon: Joystick, label: "Baseball" },
          { icon: Gamepad2, label: "ESports" },
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
      {/* Virtual EPL Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 px-4 mt-8">
        {virtualSports.map((sport, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 bg-[#252525] rounded-lg shadow-md hover:shadow-lg transition hover:bg-[#2F2F2F]"
          >
            <Image
              src={sport.src}
              width={40}
              height={40}
              alt={sport.alt}
              className="border border-booka p-2 rounded-lg"
            />
            <p className="text-gray-200 text-xs text-center mt-2">
              {sport.label}
            </p>
          </div>
        ))}
      </div>

      {/* Odds Section */}
      <div className="flex items-center justify-between w-full px-4 py-3 mt-6 bg-[#1A1A1A] rounded-lg shadow-md">
        {["1x2", "Over/Under", "GG/NG", "Double Chance"].map((label, index) => (
          <p
            key={index}
            className={cn(
              "text-xs py-2 px-4 rounded-lg transition cursor-pointer",
              index === 0
                ? "bg-yellow-400 text-black font-bold"
                : "bg-[#303030] text-gray-400 hover:bg-gray-700 hover:text-white"
            )}
          >
            {label}
          </p>
        ))}
      </div>

      {/* Matchday Section */}
      <div className="bg-[#343434] flex items-center gap-x-3 justify-center py-2 mt-4 shadow-sm">
        <p className="text-white font-medium text-sm">Match Day 17</p>
        <span className="text-black bg-white py-1 px-3 text-sm font-bold rounded-md">
          00:38
        </span>
      </div>

      {/* Match Odds */}
      <div className="border-b border-gray-600 text-white flex flex-col p-4">
        <div className="flex justify-between items-center mb-2">
          <div>
            <p className="text-xs flex items-center gap-x-2">
              8 <ArrowBigDown className="text-red-500" /> Bournemouth
            </p>
            <p className="text-xs flex items-center gap-x-2 mt-1">
              9 <ArrowBigDown className="text-red-500" /> Manchester Blue
            </p>
          </div>
          <div className="flex gap-x-2">
            <p className="bg-[#343434] text-booka px-3 py-2 rounded-md text-xs">
              1.35
            </p>
            <p className="bg-[#343434] text-booka px-3 py-2 rounded-md text-xs">
              1.35
            </p>
            <p className="bg-[#343434] text-booka px-3 py-2 rounded-md text-xs">
              1.35
            </p>
          </div>
          <WifiIcon className="text-booka" size={20} />
        </div>
        <p className="text-gray-400 text-xs text-right">+33 more</p>
      </div>
      <div className="border-b border-gray-600 text-white flex flex-col p-4">
        <div className="flex justify-between items-center mb-2">
          <div>
            <p className="text-xs flex items-center gap-x-2">
              8 <ArrowBigDown className="text-red-500" /> Bournemouth
            </p>
            <p className="text-xs flex items-center gap-x-2 mt-1">
              9 <ArrowBigDown className="text-red-500" /> Manchester Blue
            </p>
          </div>
          <div className="flex gap-x-2">
            <p className="bg-[#343434] text-booka px-3 py-2 rounded-md text-xs">
              1.35
            </p>
            <p className="bg-[#343434] text-booka px-3 py-2 rounded-md text-xs">
              1.35
            </p>
            <p className="bg-[#343434] text-booka px-3 py-2 rounded-md text-xs">
              1.35
            </p>
          </div>
          <WifiIcon className="text-booka" size={20} />
        </div>
        <p className="text-gray-400 text-xs text-right">+33 more</p>
      </div>
      <div className="border-b border-gray-600 text-white flex flex-col p-4">
        <div className="flex justify-between items-center mb-2">
          <div>
            <p className="text-xs flex items-center gap-x-2">
              8 <ArrowBigDown className="text-red-500" /> Bournemouth
            </p>
            <p className="text-xs flex items-center gap-x-2 mt-1">
              9 <ArrowBigDown className="text-red-500" /> Manchester Blue
            </p>
          </div>
          <div className="flex gap-x-2">
            <p className="bg-[#343434] text-booka px-3 py-2 rounded-md text-xs">
              1.35
            </p>
            <p className="bg-[#343434] text-booka px-3 py-2 rounded-md text-xs">
              1.35
            </p>
            <p className="bg-[#343434] text-booka px-3 py-2 rounded-md text-xs">
              1.35
            </p>
          </div>
          <WifiIcon className="text-booka" size={20} />
        </div>
        <p className="text-gray-400 text-xs text-right">+33 more</p>
      </div>
      <div className="border-b border-gray-600 text-white flex flex-col p-4">
        <div className="flex justify-between items-center mb-2">
          <div>
            <p className="text-xs flex items-center gap-x-2">
              8 <ArrowBigDown className="text-red-500" /> Bournemouth
            </p>
            <p className="text-xs flex items-center gap-x-2 mt-1">
              9 <ArrowBigDown className="text-red-500" /> Manchester Blue
            </p>
          </div>
          <div className="flex gap-x-2">
            <p className="bg-[#343434] text-booka px-3 py-2 rounded-md text-xs">
              1.35
            </p>
            <p className="bg-[#343434] text-booka px-3 py-2 rounded-md text-xs">
              1.35
            </p>
            <p className="bg-[#343434] text-booka px-3 py-2 rounded-md text-xs">
              1.35
            </p>
          </div>
          <WifiIcon className="text-booka" size={20} />
        </div>
        <p className="text-gray-400 text-xs text-right">+33 more</p>
      </div>
      <div className="border-b border-gray-600 text-white flex flex-col p-4">
        <div className="flex justify-between items-center mb-2">
          <div>
            <p className="text-xs flex items-center gap-x-2">
              8 <ArrowBigDown className="text-red-500" /> Bournemouth
            </p>
            <p className="text-xs flex items-center gap-x-2 mt-1">
              9 <ArrowBigDown className="text-red-500" /> Manchester Blue
            </p>
          </div>
          <div className="flex gap-x-2">
            <p className="bg-[#343434] text-booka px-3 py-2 rounded-md text-xs">
              1.35
            </p>
            <p className="bg-[#343434] text-booka px-3 py-2 rounded-md text-xs">
              1.35
            </p>
            <p className="bg-[#343434] text-booka px-3 py-2 rounded-md text-xs">
              1.35
            </p>
          </div>
          <WifiIcon className="text-booka" size={20} />
        </div>
        <p className="text-gray-400 text-xs text-right">+33 more</p>
      </div>
      <div className="border-b border-gray-600 text-white flex flex-col p-4">
        <div className="flex justify-between items-center mb-2">
          <div>
            <p className="text-xs flex items-center gap-x-2">
              8 <ArrowBigDown className="text-red-500" /> Bournemouth
            </p>
            <p className="text-xs flex items-center gap-x-2 mt-1">
              9 <ArrowBigDown className="text-red-500" /> Manchester Blue
            </p>
          </div>
          <div className="flex gap-x-2">
            <p className="bg-[#343434] text-booka px-3 py-2 rounded-md text-xs">
              1.35
            </p>
            <p className="bg-[#343434] text-booka px-3 py-2 rounded-md text-xs">
              1.35
            </p>
            <p className="bg-[#343434] text-booka px-3 py-2 rounded-md text-xs">
              1.35
            </p>
          </div>
          <WifiIcon className="text-booka" size={20} />
        </div>
        <p className="text-gray-400 text-xs text-right">+33 more</p>
      </div>
    </div>
  );
}

export default Virtual;
