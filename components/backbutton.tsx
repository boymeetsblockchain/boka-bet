import { ChevronLeft } from "lucide-react";
import Image from "next/image";

export const BackButton = () => {
  return (
    <div className="flex items-center px-4 py-2 gap-x-40 mx-auto  justify-between rounded-md">
      <div className="flex items-center cursor-pointer">
        <ChevronLeft color="white" size={24} />
        {/* <span className="text-white text-sm ml-2">Back</span> */}
      </div>
      <div>
        <Image
          src={"/logo.png"}
          width={100}
          height={100}
          alt="logo"
          className="rounded-full"
        />
      </div>
      <div className="w-6"></div> {/* Empty space for alignment */}
    </div>
  );
};
