"use client";

import { Grid } from "react-loader-spinner";

const LoadingSpinner = () => {
  return (
    <div className="w-full h-[70vh] sm:h-[100vh] flexCenter">
      <div className="">
        <div className="flexCenter">
          <Grid color="#00BFFF" width={80} height={80} />
        </div>
        <div className="text-[#00BFFF] mt-6 font-bold text-2xl">
          Plot Wonders DApp
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
