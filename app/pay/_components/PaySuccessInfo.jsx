'usec client'

import { CircleCheck } from "lucide-react"; 
import Link from "next/link";

const PaySuccessInfo = () => {
  return (
    <main
      className="w-full min-h-screen flex flex-col"
      style={{
        background: "url(/paySuccessImage.png) no-repeat center center",
        backgroundSize: "cover",
      }}
    >
      <div className="w-24 ml-auto">
      </div>
      <div className="w-2/3 mx-auto pt-16 grid grid-cols-2 grid-rows-[1fr,1fr,auto] gap-4">
        <div className="flex justify-center col-span-2">
          <Link href="/">
          <img src="/hej.png" alt="Logo" className="cursor-pointer" />
          </Link>
        </div>
        <div className="col-span-2 mx-auto justify-center items-center inline-flex">
          <CircleCheck className="w-full h-2/3 text-timberwolf fill-fernGreen" />
        </div>
        <div className="text-center col-span-2  bg-gray-500 rounded-lg border-2">
          <p className="p-5">Payment successful!</p>
          <p className="pb-5 px-5">
            Thank you for your booking. Your adventure is just around the corner! A confirmation has been sent to your email with all the details of your stay.
          </p>
        </div>
      </div>
    </main>
  );
};

export default PaySuccessInfo;