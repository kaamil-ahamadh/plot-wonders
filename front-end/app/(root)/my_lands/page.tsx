"use client";
import { useQuery } from "@/app/hooks";
import { LandNFTCard, StatCard } from "@/components";
import { useSessionContext } from "@/components/ContextProvider";
// import { LANDS } from "@/constants";
import { useEffect, useState } from "react";

enum land_category {
  STANDARD,
  SOLID,
  SUPERIOR,
  EPIC,
  LEGENDARY,
}

const MyLandsPage = () => {
  // Session and Account
  const session = useSessionContext();
  const accountId = session?.account.id;

  // State
  const [lands, setLands] = useState<any>([{}]);

  // Get Lands
  const { result: allLands } = useQuery(
    "get_lands_by_uid",
    accountId ? { _uid: accountId } : undefined
  );

  useEffect(() => {
    setLands(allLands);
    console.log(lands);
  }, [allLands]);

  if (!window.ethereum) {
    return (
      <div>
        Metamask Wallet Not Found <br /> Pls Download and Install it before
        using this dapp..
      </div>
    );
  }

  if (!lands) {
    return <>Loading...</>;
  }

  return (
    <>
      <h3 className="mt-6">My Lands</h3>

      <div className="flexCenter">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[3rem]">
          {lands?.map((land, i) => {
            return <LandNFTCard key={i + 1} data={land} />;
          })}
        </div>
      </div>
    </>
  );
};

export default MyLandsPage;
