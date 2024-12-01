"use client";
import { ChevronLeft, MessageCircle } from "lucide-react";
import { useRouter } from "next/navigation";

function MessagePage() {
  const router = useRouter();

  // Dummy messages data
  const messages = [
    {
      id: 1,
      sender: "Admin",
      subject: "Welcome to the Platform",
      date: "2024-12-01",
      content:
        "Thank you for joining our platform. We are excited to have you!",
    },
    {
      id: 2,
      sender: "Support",
      subject: "Account Verification",
      date: "2024-11-30",
      content: "Please verify your account to access all features.",
    },
    {
      id: 3,
      sender: "Promotions",
      subject: "Exclusive Offer!",
      date: "2024-11-29",
      content: "Enjoy a 20% bonus on your next deposit.",
    },
  ];

  return (
    <div className="px-5 bg-black h-screen text-white space-y-6">
      {/* Header */}
      <div className="flex items-center gap-x-2 py-4">
        <ChevronLeft
          className="cursor-pointer w-6 h-6"
          onClick={() => router.back()}
        />
        <h1 className="text-xl font-bold">Messages</h1>
      </div>

      {/* Message List */}
      <div className="space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className="bg-gray-800 p-4 rounded-lg space-y-2 cursor-pointer hover:bg-gray-700"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-2">
                <MessageCircle className="text-booka w-5 h-5" />
                <p className="font-bold">{message.sender}</p>
              </div>
              <p className="text-gray-400 text-sm">{message.date}</p>
            </div>
            <p className="font-bold text-lg">{message.subject}</p>
            <p className="text-gray-400 text-sm">{message.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MessagePage;
