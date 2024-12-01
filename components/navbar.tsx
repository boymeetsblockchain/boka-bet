"use client";
import Image from "next/image";
import { User, DollarSign, LucideCassetteTape, Film } from "lucide-react";
import { useRouter } from "next/navigation";

export const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-black text-white shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <Image src="/logo.png" alt="Logo" width={40} height={40} />
      </div>

      {/* Icons */}
      <div className="flex items-center gap-x-6">
        {/* Bets Icon */}
        <button className="flex items-center flex-col  gap-y-4 ">
          <Film size={24} color="#f8a950" />
          <span className="hidden sm:inline text-booka">My Bets</span>
        </button>
        {/* User Icon */}
        <button
          className="flex items-center flex-col  gap-y-4 "
          onClick={() => router.push("/dashboard")}
        >
          <User size={24} fill="#f8a950" color="#f8a950" />
          <span className="hidden sm:inline text-booka">N 0</span>
        </button>
      </div>
    </nav>
  );
};
