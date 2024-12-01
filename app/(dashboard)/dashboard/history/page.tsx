"use client";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Trophy } from "lucide-react";
import { useRouter } from "next/navigation";

function HistoryPage() {
  const router = useRouter();
  return (
    <div className="px-5 bg-black h-screen text-white space-y-6">
      {/* Header */}
      <div className="flex items-center gap-x-2 py-4">
        <ChevronLeft
          className="cursor-pointer w-6 h-6"
          onClick={() => router.back()}
        />
        <h1 className="text-xl font-bold">Sports Bet History</h1>
      </div>

      {/* Tab Buttons */}
      <div className="flex items-center justify-between space-x-2">
        <Button className="bg-booka text-black px-4 py-2 rounded-lg flex-1">
          Open Bet
        </Button>
        <Button className="bg-[#222222] px-4 py-2 rounded-lg flex-1">
          Bet History
        </Button>
        <Button className="bg-[#222222] px-4 py-2 rounded-lg flex-1">
          All
        </Button>
      </div>

      {/* History Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-gray-700 pb-4">
          {/* Date Section */}
          <div className="text-center font-bold text-xl">
            <p>26</p>
            <p>Aug</p>
          </div>
          {/* Totals */}
          <div className="flex flex-col items-center space-y-1">
            <p className="text-gray-400">Total Stakes</p>
            <p className="text-white">N60</p>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <p className="text-gray-400">Total Returns</p>
            <p className="text-booka">N83.7</p>
          </div>
        </div>

        {/* Match Details */}
        <div className="space-y-2 text-center">
          <p>
            Villarreal <span className="text-booka">vs</span> Alaves
          </p>
          <p>
            Leeds <span className="text-booka">vs</span> Las Palmas
          </p>
          <p>
            Liverpool <span className="text-booka">vs</span> Southampton
          </p>
        </div>

        {/* Action Button */}
        <div className="flex justify-center">
          <Button className="w-full bg-[#222222] flex items-center justify-center gap-x-2 py-3 rounded-lg">
            <Trophy className="text-booka w-5 h-5" />
            <span className="text-booka font-medium">Won</span>
          </Button>
        </div>
      </div>
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-gray-700 pb-4">
          {/* Date Section */}
          <div className="text-center font-bold text-xl">
            <p>26</p>
            <p>Aug</p>
          </div>
          {/* Totals */}
          <div className="flex flex-col items-center space-y-1">
            <p className="text-gray-400">Total Stakes</p>
            <p className="text-white">N60</p>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <p className="text-gray-400">Total Returns</p>
            <p className="text-booka">N83.7</p>
          </div>
        </div>

        {/* Match Details */}
        <div className="space-y-2 text-center">
          <p>
            Villarreal <span className="text-booka">vs</span> Alaves
          </p>
          <p>
            Leeds <span className="text-booka">vs</span> Las Palmas
          </p>
          <p>
            Liverpool <span className="text-booka">vs</span> Southampton
          </p>
        </div>

        {/* Action Button */}
        <div className="flex justify-center">
          <Button className="w-full bg-[#222222] flex items-center justify-center gap-x-2 py-3 rounded-lg">
            <Trophy className="text-booka w-5 h-5" />
            <span className="text-booka font-medium">Won</span>
          </Button>
        </div>
      </div>
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-gray-700 pb-4">
          {/* Date Section */}
          <div className="text-center font-bold text-xl">
            <p>26</p>
            <p>Aug</p>
          </div>
          {/* Totals */}
          <div className="flex flex-col items-center space-y-1">
            <p className="text-gray-400">Total Stakes</p>
            <p className="text-white">N60</p>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <p className="text-gray-400">Total Returns</p>
            <p className="text-booka">N83.7</p>
          </div>
        </div>

        {/* Match Details */}
        <div className="space-y-2 text-center">
          <p>
            Villarreal <span className="text-booka">vs</span> Alaves
          </p>
          <p>
            Leeds <span className="text-booka">vs</span> Las Palmas
          </p>
          <p>
            Liverpool <span className="text-booka">vs</span> Southampton
          </p>
        </div>

        {/* Action Button */}
        <div className="flex justify-center">
          <Button className="w-full bg-[#222222] flex items-center justify-center gap-x-2 py-3 rounded-lg">
            <Trophy className="text-booka w-5 h-5" />
            <span className="text-booka font-medium">Won</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HistoryPage;
