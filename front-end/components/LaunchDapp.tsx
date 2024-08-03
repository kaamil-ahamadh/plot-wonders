"use client";

import { useRouter } from "next/navigation";

type LaunchDappProps = {
  label: string;
};

const LaunchDapp = ({ label }: LaunchDappProps) => {
  const router = useRouter();

  return (
    <div className="flexCenter w-full flex-col pb-[100px]">
      <div
        className="mt-6 btn animate-bounce ease-linear 
                delay-1000 duration-1000"
        onClick={() => router.push("/home")}
      >
        {label}
      </div>
    </div>
  );
};

export default LaunchDapp;
