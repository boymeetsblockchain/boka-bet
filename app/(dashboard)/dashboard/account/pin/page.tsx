"use client";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";

function WithdrawalPin() {
  const router = useRouter();

  return (
    <div className="px-5 bg-black h-screen text-white space-y-8">
      {/* Header */}
      <div className="flex items-center gap-x-2">
        <ChevronLeft
          className="cursor-pointer w-6 h-6"
          onClick={() => router.back()}
        />
        <h1 className="text-xl font-bold">Withdrawal PIN</h1>
      </div>

      <div className="flex items-center justify-center w-full mx-auto flex-col gap-y-4">
        {/* Enter PIN */}
        <div className="space-y-4 ">
          <h2 className="text-gray-300">
            Enter a 4-digit code you won’t forget
          </h2>
          <InputOTP maxLength={4} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
            <InputOTPGroup className="flex justify-center space-x-4">
              {Array.from({ length: 4 }).map((_, index) => (
                <InputOTPSlot
                  key={index}
                  index={index}
                  className="w-12 h-12 bg-white  text-black text-center text-xl rounded-lg border border-gray-700 focus:ring-2 focus:ring-pink-600"
                />
              ))}
            </InputOTPGroup>
          </InputOTP>
        </div>

        {/* Confirm PIN */}
        <div className="space-y-4">
          <h2 className="text-gray-300">Re-enter the code to confirm</h2>
          <InputOTP maxLength={4} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
            <InputOTPGroup className="flex justify-center space-x-4">
              {Array.from({ length: 4 }).map((_, index) => (
                <InputOTPSlot
                  key={index}
                  index={index}
                  className="w-12 h-12 bg-white  text-black text-center text-xl rounded-lg border border-gray-700 focus:ring-2 focus:ring-pink-600"
                />
              ))}
            </InputOTPGroup>
          </InputOTP>
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-center ">
          <Button className="w-full bg-booka text-white font-bold rounded-lg hover:opacity-90">
            Save PIN
          </Button>
        </div>
      </div>
    </div>
  );
}

export default WithdrawalPin;
