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

const HomePage = () => {
  // Session and Account
  const session = useSessionContext();
  const accountId = session?.account.id;
  console.log(accountId);

  // Get Lands Count
  const { result: total_lands } = useQuery(
    "total_lands",
    accountId ? {} : undefined
  );

  const { result: total_lands_by_user } = useQuery(
    "total_lands_by_user",
    accountId ? { _uid: accountId } : undefined
  );

  const { result: pgems_token_balance } = useQuery(
    "get_pgems_token_balance",
    accountId ? { _uid: accountId } : undefined
  );

  const { result: total_lands_for_sale } = useQuery(
    "total_fixed_price_lands",
    accountId ? {} : undefined
  );
  const { result: total_lands_for_auction } = useQuery(
    "total_auction_lands",
    accountId ? {} : undefined
  );

  // State
  const [lands, setLands] = useState<any>([{}]);

  // Get Lands
  const { result: allLands } = useQuery(
    "get_all_lands",
    accountId ? {} : undefined
  );

  // const { result: allUsers } = useQuery(
  //   "get_users",
  //   accountId ? { pointer: 0, n_users: 10 } : undefined
  // );

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
      <div className="grid grid-cols-3 gap-4">
        <StatCard type="all_lands" count={total_lands} label="All Lands" />
        <StatCard
          type="my_lands"
          count={total_lands_by_user}
          label="My Lands"
        />
        <StatCard
          type="lands_available_for_sale"
          count={Number(pgems_token_balance)}
          label=" My PGems Token Balance"
        />
      </div>

      <h3 className="mt-6">All Lands</h3>

      <div className="flexCenter">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[3rem]">
          {lands?.map((land: any, i: any) => {
            return <LandNFTCard key={i + 1} data={land} />;
          })}
        </div>
      </div>
    </>
  );
};

export default HomePage;
