import Image from "next/image";

import cream1 from "../public/cream1.png";
import cream2 from "../public/cream2.png";

export default function Home() {
  return (
    <>
      <div className="container mx-auto  h-full min-h-screen bg-slate-200 ">
        <div className="md:flex items-center gap-10">
          <div className=" w-full">
            <Image
              src={cream1}
              alt=""
              className="w-full h-[500px] object-contain "
            />
          </div>
          <div className="w-full">
            <Image
              src={cream2}
              alt=""
              className="w-full h-[500px] object-contain "
            />
          </div>
        </div>
        <div className="text-black px-10 my-4 space-y-3">
          <h1 className="text-violet-800 text-3xl md:text-4xl lg:text-5xl font-bold text-center">
            Coming soon...
          </h1>
          <p className="text-black text-xl font-bold">Please contact us</p>
          <p className="text-lg font-semibold">ILeagcy Sdn Bhd</p>
          <span>
            No 16-2-2,Block F,Diamond Square,Jalan Semarak ap 3 off Jalan
            Gombac,53100 Kuala Lumpur,Malaysia
          </span>

          <p className="font-medium">Contact Us</p>
          <span>+60 34819 1760</span>
        </div>
      </div>
    </>
  );
}
