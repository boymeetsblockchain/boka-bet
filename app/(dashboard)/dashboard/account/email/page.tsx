"use client";
import { ChevronLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

function EmailPage() {
  const router = useRouter();
  return (
    <div className="px-5 bg-black h-screen text-white space-y-6">
      {/* Header */}
      <div className="flex items-center gap-x-2">
        <ChevronLeft
          className="cursor-pointer w-6 h-6"
          onClick={() => router.back()}
        />
        <h1 className="text-xl font-bold"> Email</h1>
      </div>
      <div>
        <Input
          className="border border-booka bg-gray-900  px-3 py-2 rounded-lg"
          placeholder="Add an Email "
        />
        <div className="my-5 flex items-center justify-center w-full">
          <Button className="w-full bg-booka">Add </Button>
        </div>
      </div>
    </div>
  );
}
export default EmailPage;
