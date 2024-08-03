"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Submitted = () => {
  const router = useRouter();

  return (
    <div className="flex h-screen max-h-screen px-[5%] text-center">
      <div className="success-img">
        <Link href="/">
          <h3 className="text-2xl font-bold mb-6">Plot Wonders</h3>
        </Link>
        <div className="flex flex-col items-center">
          <Image src="/success.gif" height={300} width={280} alt="success" />
          <h2 className="header mb-6 max-w-[600px] text-center">
            Your <span className="text-accent-500 font-bold"> Buy Order </span>{" "}
            has been successfully submitted!
          </h2>
        </div>
        <div className="submission-details">
          <p>Order Submission Details: </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center  mt-6 gap-3">
          <div className="btn" onClick={() => router.push("/")}>
            New Buy Order
          </div>
          <div className="btn" onClick={() => router.push("/")}>
            Go to HomePage
          </div>
        </div>
      </div>
    </div>
  );
};

export default Submitted;
