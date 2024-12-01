"use client";
import { ChevronLeft, Facebook, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"; // Assuming you have a reusable Textarea component
import { useRouter } from "next/navigation";

function CustomerService() {
  const router = useRouter();

  return (
    <div className="px-5 bg-black h-screen text-white space-y-6">
      {/* Header */}
      <div className="flex items-center gap-x-2 py-4">
        <ChevronLeft
          className="cursor-pointer w-6 h-6"
          onClick={() => router.back()}
        />
        <h1 className="text-xl font-bold">Customer Service</h1>
      </div>

      {/* Connect Options */}
      <div className="space-y-4">
        <Button className="w-full bg-blue-600 text-white flex items-center justify-center gap-x-2">
          <Facebook className="w-5 h-5" />
          Connect via Facebook
        </Button>
        <Button className="w-full bg-red-500 text-white flex items-center justify-center gap-x-2">
          <Mail className="w-5 h-5" />
          Connect via Google
        </Button>
      </div>

      {/* Email and Query Form */}
      <div className="space-y-4">
        <Input
          className="bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg placeholder:text-gray-400"
          placeholder="Your Email"
        />
        <Textarea
          className="bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-lg placeholder:text-gray-400"
          placeholder="Type your message..."
          rows={6}
        />
        <Button className="w-full bg-booka text-white flex items-center justify-center gap-x-2">
          <Send className="w-5 h-5" />
          Send
        </Button>
      </div>
    </div>
  );
}

export default CustomerService;
