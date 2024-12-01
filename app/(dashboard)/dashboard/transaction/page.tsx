"use client";
import { ChevronLeft, UploadCloud, ArrowDownCircle } from "lucide-react";
import { useRouter } from "next/navigation";

function TransactionPage() {
  const router = useRouter();

  // Dummy transaction data
  const transactions = [
    {
      id: 1,
      type: "Funding",
      amount: 1000,
      date: "2024-12-01",
      icon: <ArrowDownCircle className="text-green-500 w-6 h-6" />,
    },
    {
      id: 2,
      type: "Deposit",
      amount: 500,
      date: "2024-11-30",
      icon: <UploadCloud className="text-red-500 w-6 h-6" />,
    },
    {
      id: 3,
      type: "Funding",
      amount: 2000,
      date: "2024-11-29",
      icon: <ArrowDownCircle className="text-green-500 w-6 h-6" />,
    },
    {
      id: 4,
      type: "Deposit",
      amount: 1500,
      date: "2024-11-28",
      icon: <UploadCloud className="text-red-500 w-6 h-6" />,
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
        <h1 className="text-xl font-bold">Transaction History</h1>
      </div>

      {/* Transaction List */}
      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between bg-gray-800 rounded-lg p-4"
          >
            <div className="flex items-center gap-x-4">
              {transaction.icon}
              <div>
                <p className="font-bold">{transaction.type}</p>
                <p className="text-gray-400 text-sm">{transaction.date}</p>
              </div>
            </div>
            <div className="text-right">
              <p
                className={`font-bold ${
                  transaction.type === "Funding"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                N{transaction.amount}
              </p>
              <span className="text-gray-400 text-sm">Completed</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TransactionPage;
