"use client";
import { Button } from "@/components/ui/button";
import { EyeOff, X, ChevronRight, Film, LoaderPinwheel } from "lucide-react";
import { useRouter } from "next/navigation";

function DashBoardPage() {
  const options = [
    {
      label: "Sports Bet History",
      icon: <LoaderPinwheel className="text-booka w-6 h-6" />,
      link: "/dashboard/history",
    },
    {
      label: "My Transaction History",
      icon: <Film className="text-booka w-6 h-6" />,
      link: "/dashboard/transaction",
    },
    { label: "Messages", icon: null, link: "/dashboard/messages" },
    { label: "Promotions", icon: null, link: "/dashboard/promotions" },
    {
      label: "Customer Service",
      icon: null,
      link: "/dashboard/customer-service",
    },
  ];

  const router = useRouter();

  return (
    <div className="px-5 bg-black h-screen text-white space-y-3">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1
          className="text-white inline-flex cursor-pointer"
          onClick={() => router.push("/dashboard/account")}
        >
          {" "}
          Hi, 08141889944 <ChevronRight />{" "}
        </h1>
        <X className="text-white w-6 h-6" />
      </div>

      {/* Balance Section */}
      <div className="bg-gray-800 p-5 rounded-lg space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-4">
            <h1>My Balance</h1>
            <EyeOff className="text-white w-5 h-5" />
          </div>
          <p>N 0</p>
        </div>

        <div className="flex items-center justify-between">
          <Button
            className="bg-gradient-to-r from-pink-700 to-red-600 text-white px-4 py-2 rounded-md"
            onClick={() => router.push("/dashboard/deposit")}
          >
            Deposit
          </Button>
          <Button
            className="bg-gradient-to-r from-yellow-400 to-yellow-700 text-white px-4 py-2 rounded-md"
            onClick={() => router.push("/dashboard/withdraw")}
          >
            Withdraw
          </Button>
        </div>
      </div>

      {/* Options Section */}
      <div className="space-y-4">
        {options.map((option, index) => (
          <div
            key={index}
            onClick={() => option.link && router.push(option.link)}
            className="flex items-center justify-between p-4 rounded-lg cursor-pointer hover:bg-gray-600"
          >
            <div className="flex items-center gap-x-4">
              {option.icon && option.icon}
              <span className="text-white">{option.label}</span>
            </div>
            <ChevronRight className="text-white w-6 h-6" />
          </div>
        ))}
      </div>

      {/* Logout Button */}
      <div className="flex items-center justify-center w-full my-4">
        <Button className="border-booka border bg-transparent w-1/2 rounded-lg">
          Logout
        </Button>
      </div>
    </div>
  );
}

export default DashBoardPage;
