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

function Virtual() {
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

      {/* Virtual Sports Section */}
      <div className="flex overflow-x-auto gap-4 px-4 mt-6">
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
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image
              src={"/epl.png"}
              width={40}
              height={40}
              alt="epl"
              className="border border-booka p-2 rounded-lg"
            />
            <p className="text-booka text-xs text-center mt-2">
              Sport Virtual EPL
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Virtual;
