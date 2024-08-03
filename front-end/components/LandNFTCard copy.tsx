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
          <div className="flex justify-between flex-wrap mt-[15px] gap-2">
            <div className="flex flex-col">
              <h4 className="font-semibold text-[14px] text-cyan-100 leading-[22px]">
                Amount Collected:
              </h4>
              <p
                className="mt-[3px] font-normal text-[12px] leading-[18px]
             text-cyan-100 sm:max-w-[120px]"
              >
                Raised of
              </p>
            </div>
            <div className="flex flex-col">
              <h4 className="font-semibold text-[14px] text-cyan-100 leading-[22px]">
                Remaining Days:
              </h4>
              <p
                className="mt-[3px] font-normal text-[12px] leading-[18px]
             text-cyan-100 sm:max-w-[120px]"
              >
                Days Left:
              </p>
            </div>
          </div>
          <div className="flex items-center mt-[20px] gap-[12px]">
            <div className="font-normal text-[12px] text-cyan-300 truncate">
              Owner Wallet Address: 0x...
            </div>
          </div>

          <div>
            <div onClick={() => setLike(!like)}>
              {like ? (
                <Image
                  src="heart-filled.svg"
                  alt="unlike"
                  width={30}
                  height={30}
                  className=""
                />
              ) : (
                <Image src="heart-gray.svg" alt="like" width={30} height={30} />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default LandNFTCard;
