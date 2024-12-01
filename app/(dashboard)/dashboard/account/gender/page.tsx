"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";

function GenderPage() {
  const [gender, setGender] = useState("Male"); // Default gender
  const router = useRouter();

  const handleSave = () => {
    // Logic to save the gender (e.g., API call)
    console.log("Gender selected:", gender);
    // Navigate back to the dashboard or show a confirmation message
    router.push("/dashboard");
  };

  return (
    <div className="px-5 bg-black h-screen text-white space-y-6">
      {/* Header */}
      <div className="flex items-center gap-x-2">
        <ChevronLeft
          className="cursor-pointer w-6 h-6"
          onClick={() => router.back()}
        />
        <h1 className="text-xl font-bold"> Gender</h1>
      </div>

      {/* Gender Options */}
      <div className="space-y-4">
        <div
          className={`flex items-center justify-between p-4 rounded-lg cursor-pointer ${
            gender === "Male" ? "bg-gray-700" : "bg-gray-800 hover:bg-gray-700"
          }`}
          onClick={() => setGender("Male")}
        >
          <span className="text-white">Male</span>
          <input
            type="radio"
            checked={gender === "Male"}
            onChange={() => setGender("Male")}
            className="form-radio text-pink-600"
          />
        </div>

        <div
          className={`flex items-center justify-between p-4 rounded-lg cursor-pointer ${
            gender === "Female"
              ? "bg-gray-700"
              : "bg-gray-800 hover:bg-gray-700"
          }`}
          onClick={() => setGender("Female")}
        >
          <span className="text-white">Female</span>
          <input
            type="radio"
            checked={gender === "Female"}
            onChange={() => setGender("Female")}
            className="form-radio text-pink-600"
          />
        </div>

        <div
          className={`flex items-center justify-between p-4 rounded-lg cursor-pointer ${
            gender === "Other" ? "bg-gray-700" : "bg-gray-800 hover:bg-gray-700"
          }`}
          onClick={() => setGender("Other")}
        >
          <span className="text-white">Other</span>
          <input
            type="radio"
            checked={gender === "Other"}
            onChange={() => setGender("Other")}
            className="form-radio text-pink-600"
          />
        </div>
      </div>

      {/* Save Button */}
      <div className="mt-6">
        <button
          className="w-full bg-gradient-to-r from-pink-700 to-red-600 text-white py-3 rounded-lg font-bold hover:opacity-90"
          onClick={handleSave}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default GenderPage;
