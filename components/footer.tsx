import { ChevronDown, Headphones, PhoneCall } from "lucide-react";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="p-5 bg-black space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <Image src={"/logo.png"} width={100} height={100} alt="logo" />
        <p className="text-white font-bold text-lg">General</p>
      </div>

      {/* About Section */}
      <div className="flex justify-between items-start">
        <p className="text-gray-300 text-sm max-w-md">
          Bokabet is a revolutionary web-app that allows users to bet on their
          favorite sports teams and players with ease. Designed with the user in
          mind, Bokabet provides a seamless and intuitive betting experience
          that's accessible from anywhere, at any time.
        </p>
        <ul className="text-gray-300 text-xs space-y-2">
          <li className="hover:underline cursor-pointer">How to Play</li>
          <li className="hover:underline cursor-pointer">About Us</li>
          <li className="hover:underline cursor-pointer">Contact Us</li>
        </ul>
      </div>

      {/* Country and Customer Service Section */}
      <div className="flex flex-row-reverse justify-between items-center">
        <div className="flex items-center gap-x-3">
          <Image src={"/9ja.png"} width={50} height={50} alt="Nigeria flag" />
          <p className="text-white">Nigeria</p>
          <ChevronDown color="white" />
        </div>
        <p className="text-white font-bold text-lg">Customer Service</p>
      </div>

      {/* Help and Contact Section */}
      <div className="flex flex-col space-y-3">
        <div className="flex items-center gap-x-2">
          <Headphones className="text-booka" />
          <p className="text-gray-300">24/7 Online Help</p>
        </div>
        <div className="flex items-center gap-x-2">
          <PhoneCall className="text-booka" />
          <p className="text-gray-300">Call Us: 0801837873, 0902875397</p>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="flex items-center justify-center gap-x-5">
        <Image
          src={"/logos.png"}
          width={100}
          height={100}
          alt="Facebook"
          className="cursor-pointer"
        />
      </div>

      {/* Footer Note */}
      <div className="flex items-center justify-center">
        <p className="text-gray-400 text-sm">
          2024 © Bokabet All Rights Reserved
        </p>
      </div>
    </footer>
  );
};
