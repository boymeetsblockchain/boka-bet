"use client";
import { ChevronLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";

function ChangePasswordPage() {
  const router = useRouter();

  const handleSave = () => {
    // Logic to handle password change (e.g., API call)
    console.log("Password change initiated");
    // Navigate back or display success feedback
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
        <h1 className="text-xl font-bold">Change Password</h1>
      </div>

      {/* Input Fields */}
      <div className="space-y-4">
        <Input
          type="password"
          className="border border-booka bg-gray-900 text-white px-3 py-2 rounded-lg"
          placeholder="Old Password"
        />
        <Input
          type="password"
          className="border border-booka bg-gray-900 text-white px-3 py-2 rounded-lg"
          placeholder="New Password"
        />
        <Input
          type="password"
          className="border border-booka bg-gray-900 text-white px-3 py-2 rounded-lg"
          placeholder="Confirm Password"
        />
      </div>
      <div className="flex justify-end items-end my-4 ">
        <Link href={"/login/reset"} className="text-booka ">
          Forgot Password
        </Link>
      </div>
      {/* Save Button */}
      <div className="mt-6">
        <div className="my-5 flex items-center justify-center w-full">
          <Button className="w-full bg-booka">Save Changes </Button>
        </div>
      </div>
    </div>
  );
}

export default ChangePasswordPage;
