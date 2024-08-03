"use client";
import { useRouter } from "next/navigation";
import CampaignCard from "./CampaignCard";
import { useQuery } from "@/app/hooks";
import { useSessionContext } from "./ContextProvider";
import lodash from "lodash";
import { useEffect, useState } from "react";

type DisplayCampaignsProps = {
  title: string;
};

const DisplayCampaigns = ({ title }: DisplayCampaignsProps) => {
  const router = useRouter();
  const session = useSessionContext();
  const accountId = session?.account.id;

  // Campaigns
  const [campaigns, setCampaigns] = useState([]);

  // Get Campaigns
  const { result: allCampaigns } = useQuery(
    "get_all_campaigns",
    accountId ? {} : undefined
  );

  if (allCampaigns) {
    const rawData = allCampaigns;
    const keys = [
      "rowid",
      "id",
      "title",
      "buffer",
      "username",
      "account",
      "description",
      "goal",
      "collected",
      "timestamp",
    ];
    const formattedData = rawData.map((item) => lodash.zipObject(keys, item));
    setCampaigns(formattedData);
  }

  useEffect(() => {}, []);

  return (
    <div>
      <h1 className="font-bold text-[18px] text-cyan-50">{title}: 0</h1>
      <div className="flex flex-wrap mt-[20px] gap-[20px]"></div>
      <CampaignCard data={campaigns[0]} />
    </div>
  );
};

export default DisplayCampaigns;
