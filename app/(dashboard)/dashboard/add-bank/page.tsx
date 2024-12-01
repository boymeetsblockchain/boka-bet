"use client";
import { ChevronLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

function DepositPage() {
  const router = useRouter();
  return (
    <div className="px-5 bg-black h-screen text-white space-y-6">
      {/* Header */}
      <div className="flex items-center gap-x-2 py-4">
        <ChevronLeft
          className="cursor-pointer w-6 h-6"
          onClick={() => router.back()}
        />
        <h1 className="text-xl font-bold">Add Bank</h1>
      </div>

      {/* Name Input */}
      <div>
        <p className="text-sm font-medium text-gray-400 mb-2">Your Name</p>
        <Input
          className="border border-booka bg-gray-900 px-3 py-2 rounded-lg text-white placeholder:text-gray-500"
          placeholder="Enter your name"
        />
      </div>

      {/* Bank Selection */}
      <div className="space-y-4">
        <p className="text-sm font-medium text-gray-400">Select Bank</p>
        <select className="w-full px-3 py-2 bg-gray-900 text-white rounded-lg border border-booka focus:outline-none">
          <option value="" disabled selected>
            Select Bank
          </option>
          <option value="access">Access Bank</option>
          <option value="union">Union Bank</option>
          <option value="gtb">GTBank</option>
          <option value="zenith">Zenith Bank</option>
        </select>
      </div>

      {/* Deposit Button */}
      <div className="my-5 flex items-center justify-center w-full">
        <Button className="w-full bg-booka text-white px-4 py-3 rounded-lg">
          Deposit
        </Button>
      </div>
    </div>
  );
}

export default DepositPage;
