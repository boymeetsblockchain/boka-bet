"use client";
import {
  ArrowUpRightSquare,
  ChevronLeft,
  ChevronRight,
  CreditCard,
} from "lucide-react";
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
        <h1 className="text-xl font-bold">Deposit</h1>
      </div>
      <div>
        <div
          className="flex items-center justify-between p-3"
          onClick={() => router.push("/dashboard/deposit/card")}
        >
          <div className="flex gap-x-4">
            <CreditCard className="text-booka" />
            <p>Card</p>
          </div>
          <ChevronRight />
        </div>
        <div className="flex items-center justify-between p-3">
          <div className="flex gap-x-4">
            <ArrowUpRightSquare className="text-booka" />
            <p>Bank Transfer</p>
          </div>
          <ChevronRight />
        </div>
      </div>
    </div>
  );
}

export default DepositPage;
