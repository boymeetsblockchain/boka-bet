"use client";
import { ChevronLeft, Home, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

function WithDrawpage() {
  const router = useRouter();
  return (
    <div className="px-5 bg-black h-screen text-white space-y-6">
      {/* Header */}
      <div className="flex items-center gap-x-2 py-4">
        <ChevronLeft
          className="cursor-pointer w-6 h-6"
          onClick={() => router.back()}
        />
        <h1 className="text-xl font-bold">Withdraw</h1>
      </div>

      {/* Input Section */}
      <div>
        <Input
          className="border border-booka bg-gray-900 px-3 py-2 rounded-lg text-white placeholder:text-gray-500 mb-6"
          placeholder="Enter Amount (N)"
        />
      </div>

      {/* Bank Selection */}
      <div className="space-y-4">
        <p className="text-sm font-medium text-gray-400">Select Bank</p>

        {/* Bank Card 1 */}
        <div className="h-20 flex items-center justify-between p-3 bg-[#343434] rounded-lg">
          <Home className="text-booka w-8 h-8" />
          <div className="flex-1 mx-3">
            <p className="text-white font-medium">Chimezie Nweke</p>
            <p className="text-gray-400">Union Bank - 9478697223</p>
          </div>
          <Trash2 className="text-destructive cursor-pointer w-6 h-6" />
        </div>

        {/* Bank Card 2 */}
        <div className="h-20 flex items-center justify-between p-3 bg-[#343434] rounded-lg">
          <Home className="text-booka w-8 h-8" />
          <div className="flex-1 mx-3">
            <p className="text-white font-medium">Chimezie Nweke</p>
            <p className="text-gray-400">Access Bank - 9478697223</p>
          </div>
          <Trash2 className="text-destructive cursor-pointer w-6 h-6" />
        </div>
      </div>

      {/* Add Button */}
      <div className="my-5 flex items-center justify-center w-full">
        <Button
          className="w-full bg-transparent border border-booka text-white px-4 py-3 rounded-lg"
          onClick={() => router.push("/dashboard/add-bank")}
        >
          Add Bank
        </Button>
      </div>
    </div>
  );
}

export default WithDrawpage;
