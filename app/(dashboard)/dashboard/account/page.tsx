"use client";

import { Button } from "@/components/ui/button";
import {
  EyeOff,
  Phone,
  VenetianMask,
  MapPin,
  Key,
  Paperclip,
  Mail,
  AtSign,
  Film,
  LoaderPinwheel,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useRouter } from "next/navigation";

function DashBoardPage() {
  const router = useRouter();

  const options = [
    {
      label: "Sports Bet History",
      icon: <LoaderPinwheel className="text-booka w-6 h-6" />,
    },
    {
      label: "My Transaction History",
      icon: <Film className="text-booka w-6 h-6" />,
    },
    { label: "Messages", icon: null },
    { label: "Promotions", icon: null },
    { label: "Customer Service", icon: null },
  ];

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <div className="px-5 bg-black h-screen text-white space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1
          className="text-white inline-flex items-center gap-x-2 cursor-pointer"
          onClick={() => handleNavigation("/dashboard/account/account")}
        >
          <ChevronLeft className="w-5 h-5" />
          My Account
        </h1>
      </div>

      {/* Information Section */}
      <div className="space-y-4">
        {/* Phone Number */}
        <div className="flex items-center justify-between">
          <div className="inline-flex gap-x-4">
            <Phone className="text-booka" />
            <h2>Phone Number</h2>
          </div>
          <h4 className="text-gray-400">906410**483</h4>
        </div>

        {/* Username */}
        <div className="flex items-center justify-between">
          <div className="inline-flex gap-x-4">
            <AtSign className="text-booka" />
            <h2>Username</h2>
          </div>
          <h4 className="text-gray-400">Chisom 23</h4>
        </div>

        {/* Gender */}
        <div
          className="flex items-center justify-between cursor-pointer hover:bg-gray-700 p-2 rounded-lg"
          onClick={() => handleNavigation("/dashboard/account/gender")}
        >
          <div className="inline-flex gap-x-4">
            <VenetianMask className="text-booka" />
            <h2>Gender</h2>
          </div>
          <div className="inline-flex items-center gap-x-2">
            <h4 className="text-gray-400">Male</h4>
            <ChevronRight />
          </div>
        </div>

        {/* Email */}
        <div
          className="flex items-center justify-between cursor-pointer hover:bg-gray-700 p-2 rounded-lg"
          onClick={() => handleNavigation("/dashboard/account/email")}
        >
          <div className="inline-flex gap-x-4">
            <Mail className="text-booka" />
            <h2>Email</h2>
          </div>
          <div className="inline-flex items-center gap-x-2">
            <h4 className="text-gray-400">Add an Email</h4>
            <ChevronRight />
          </div>
        </div>

        {/* Address */}
        <div
          className="flex items-center justify-between cursor-pointer hover:bg-gray-700 p-2 rounded-lg"
          onClick={() => handleNavigation("/dashboard/account/address")}
        >
          <div className="inline-flex gap-x-4">
            <MapPin className="text-booka" />
            <h2>Address</h2>
          </div>
          <div className="inline-flex items-center gap-x-2">
            <h4 className="text-gray-400">Add an Address</h4>
            <ChevronRight />
          </div>
        </div>

        {/* Change Login Password */}
        <div
          className="flex items-center justify-between cursor-pointer hover:bg-gray-700 p-2 rounded-lg"
          onClick={() => handleNavigation("/dashboard/account/change-password")}
        >
          <div className="inline-flex gap-x-4">
            <Key className="text-booka" />
            <h2>Change Login Password</h2>
          </div>
          <ChevronRight />
        </div>

        {/* Linked Accounts */}
        <div
          className="flex items-center justify-between cursor-pointer hover:bg-gray-700 p-2 rounded-lg"
          onClick={() => handleNavigation("/dashboard/account/pin")}
        >
          <div className="inline-flex gap-x-4">
            <Paperclip className="text-booka" />
            <h2>WithDrawal Pin</h2>
          </div>
          <ChevronRight />
        </div>
      </div>
    </div>
  );
}

export default DashBoardPage;
