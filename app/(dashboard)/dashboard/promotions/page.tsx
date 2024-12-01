"use client";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

function PromotionPage() {
  const router = useRouter();
  return (
    <div className="px-5 bg-black h-screen text-white space-y-6">
      {/* Header */}
      <div className="flex items-center gap-x-2 py-4">
        <ChevronLeft
          className="cursor-pointer w-6 h-6"
          onClick={() => router.back()}
        />
        <h1 className="text-xl font-bold">Promo List</h1>
      </div>

      {/* Promo Content */}
      <div className="flex flex-col items-center space-y-4">
        <div className="w-full h-64 relative rounded-lg overflow-hidden border border-gray-700">
          <Image
            src="/prom.png"
            alt="promo"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <h1 className="text-booka text-lg font-semibold text-center cursor-pointer hover:underline">
          Learn More
        </h1>
      </div>
      <div className="flex flex-col items-center space-y-4">
        <div className="w-full h-64 relative rounded-lg overflow-hidden border border-gray-700">
          <Image
            src="/prom.png"
            alt="promo"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <h1 className="text-booka text-lg font-semibold text-center cursor-pointer hover:underline">
          Learn More
        </h1>
      </div>
    </div>
  );
}
export default PromotionPage;
