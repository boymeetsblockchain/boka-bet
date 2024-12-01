"use client";
import { BackButton } from "@/components/backbutton";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function RegisterPage() {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center text-white px-6">
      {/* Back Button */}
      <div className="w-full max-w-md mt-4">
        <BackButton />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col items-center justify-center w-full max-w-md mt-8">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Select Your Country
        </h2>

        {/* Dropdown for countries */}
        <select
          className="w-full bg-gray-800 border border-gray-600 rounded-lg p-3 text-white focus:ring-2 focus:ring-booka"
          defaultValue=""
        >
          <option value="" disabled>
            Select your country
          </option>
          <option value="us">United States</option>
          <option value="ca">Canada</option>
          <option value="gb">United Kingdom</option>
          <option value="au">Australia</option>
          <option value="ng">Nigeria</option>
          <option value="in">India</option>
        </select>
      </div>

      {/* Continue Section */}
      <div className="w-full max-w-md mb-6 mt-auto">
        {/* Terms & Conditions */}
        <div className="flex items-start mt-6">
          <input
            id="agree"
            type="checkbox"
            className="w-5 h-5 bg-gray-800 border border-gray-600 rounded focus:ring-2 focus:ring-booka"
          />
          <label htmlFor="agree" className="ml-3 text-sm leading-tight">
            I agree to the{" "}
            <span className="text-booka underline">Terms & Conditions</span> and{" "}
            <span className="text-booka underline">Privacy Policy</span>.
          </label>
        </div>

        {/* Continue Button */}
        <Button
          type="button"
          className="w-full bg-booka mt-5 hover:bg-orange-600 text-white py-3 px-4 rounded-lg font-medium transition"
        >
          <Link href={"/register/form"}>Continue</Link>
        </Button>

        {/* Sign In Link */}
        <div className="mt-4 text-center">
          <span>
            Already have an account?{" "}
            <Link href="/login" className="text-booka underline">
              Sign In
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
