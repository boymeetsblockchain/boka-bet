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
} from "lucide-react";
import { LiveMatch } from "@/components/home/match";

function LivePage() {
  const pathname = usePathname();

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

      {/* Hero Image */}
      <div className="relative w-full h-40">
        <Image src="/hero.png" layout="fill" objectFit="cover" alt="hero" />
      </div>

      {/* Virtual Sports Section */}
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
      <div className="bg-[#9A9A9A61] p-5">
        <p className="text-white">Live Now</p>
      </div>
      <div>
        <p className="text-white text-center">
          Simulated reality League - Premier League SRL
        </p>
      </div>
      <div>
        <LiveMatch />
      </div>
    </div>
  );
}

export default LivePage;
