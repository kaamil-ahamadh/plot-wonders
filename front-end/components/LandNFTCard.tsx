"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { byteArrayToHexString } from "@/utils";

type LandNFTCard = {
  data: any;
};

const LandNFTCard = ({ data }: LandNFTCard) => {
  const router = useRouter();

  const [like, setLike] = useState(false);

  function handleClick() {
    // const hexId = byteArrayToHexString(data.id);
    router.push(`land_details/${data.id}`);
  }

  if (data) {
    return (
      <div
        className="sm:w-[288px] max-w-[300px] rounded-[15px] bg-[#041938]
    cursor-pointer hover:scale-105 mt-6"
        onClick={handleClick}
      >
        <div className="flex flex-col p-4">
          <Image
            src={`/land_nfts/${data.category}_land.jpeg`}
            alt="Land"
            width={450}
            height={450}
            className="rounded-3xl"
          />
          <div className="block mt-6">
            <h3
              className="font-bold text-[16px] text-cyan-300 text-left 
          leading-[26px]"
            >
              {data.name}
            </h3>
            <p
              className="mt-[5px] font-normal text-[12px] text-cyan-200 
          text-left leading-[18px]"
            >
              {data.description} {data.category}
            </p>
          </div>

          {/* <div className="flex items-center mt-[20px] gap-[12px]">
            <div className="font-normal text-[12px] text-cyan-300 truncate">
              Owner Wallet Address: 0x...
            </div>
          </div> */}
        </div>
      </div>
    );
  }
};

export default LandNFTCard;
