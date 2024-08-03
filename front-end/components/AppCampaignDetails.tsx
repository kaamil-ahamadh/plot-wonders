"use client";

import React from "react";

type AppCampaingDetailsProps = {
  data: any;
};

const AppCampaignDetails = ({ data }: AppCampaingDetailsProps) => {
  return (
    <div>
      <div className="sm:w-[288px] w-full rounded-[15px] bg-[#041938]">
        <div className="flex flex-col p-4">
          <div className="block">
            <h3
              className="font-bold text-[24px] text-cyan-300 text-center 
          leading-[26px]"
            >
              Title
            </h3>
            <p
              className="mt-[5px] font-normal text-[16px] text-cyan-200 
          text-left leading-[18px]"
            >
              Description
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
                Raised of Target
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
            <div className="font-normal text-[12px] text-cyan-300 truncate">
              No.of Donors:
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-6">
        <p>Donate Now</p>
        <input
          placeholder="Amount"
          type="number"
          autoComplete="false"
          name="amount"
          className="input mt-4"
        />
        <div className="flexCenter">
          <div className="btn">Donate</div>
        </div>
      </div>
    </div>
  );
};

export default AppCampaignDetails;
