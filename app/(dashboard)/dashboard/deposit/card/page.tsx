"use client";
import { ChevronLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

function CardDetailsPage() {
  const router = useRouter();
  return (
    <div className="px-5 bg-black h-screen text-white space-y-6">
      {/* Header */}
      <div className="flex items-center gap-x-2 py-4">
        <ChevronLeft
          className="cursor-pointer w-6 h-6"
          onClick={() => router.back()}
        />
        <h1 className="text-xl font-bold">Card Details</h1>
      </div>

      {/* Cardholder Name */}
      <div>
        <p className="text-sm font-medium text-gray-400 mb-2">
          Cardholder Name
        </p>
        <Input
          className="border border-booka bg-gray-900 px-3 py-2 rounded-lg text-white placeholder:text-gray-500"
          placeholder="Enter cardholder name"
        />
      </div>

      {/* Card Number */}
      <div>
        <p className="text-sm font-medium text-gray-400 mb-2">Card Number</p>
        <Input
          className="border border-booka bg-gray-900 px-3 py-2 rounded-lg text-white placeholder:text-gray-500"
          placeholder="Enter card number"
        />
      </div>

      {/* Expiry Date and CVV */}
      <div className="flex gap-x-4">
        <div className="w-1/2">
          <p className="text-sm font-medium text-gray-400 mb-2">Expiry Date</p>
          <Input
            className="border border-booka bg-gray-900 px-3 py-2 rounded-lg text-white placeholder:text-gray-500"
            placeholder="MM/YY"
          />
        </div>
        <div className="w-1/2">
          <p className="text-sm font-medium text-gray-400 mb-2">CVV</p>
          <Input
            type="password"
            className="border border-booka bg-gray-900 px-3 py-2 rounded-lg text-white placeholder:text-gray-500"
            placeholder="CVV"
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="my-5 flex items-center justify-center w-full">
        <Button className="w-full bg-booka text-white px-4 py-3 rounded-lg">
          Save Card
        </Button>
      </div>
    </div>
  );
}

export default CardDetailsPage;
