"use client";

import { useQuery } from "@/app/hooks";
import { useSessionContext } from "@/components/ContextProvider";
import React from "react";
import { toast } from "react-toastify";
import { byteArrayToHexString } from "@/utils";
import { v4 } from "uuid";
import { LAND_DESC } from "@/constants";

enum land_category {
  STANDARD,
  SOLID,
  SUPERIOR,
  EPIC,
  LEGENDARY,
}

const MintLand = () => {
  const session = useSessionContext();
  const accountId = session?.account.id;

  // Unique ID
  const uid = v4();

  // Pgems Token Balance
  const { result: pgems_token_balance } = useQuery(
    "get_pgems_token_balance",
    accountId ? { _uid: accountId } : undefined
  );

  // Handle Mint Land
  async function handleMintLand(
    type: string,
    desc: any,
    category: any,
    price: number
  ) {
    if (!session) return;
    try {
      // Step 4: Content submission
      toast(`Minting New ${type} Land, pls wait few seconds...`);
      const transaction = await session.call({
        name: "mint_land",
        args: [
          uid,
          desc,
          // "Legendary lands are the pinnacle of excellence. They are highly coveted, possess extraordinary abilities, and are often associated with remarkable achievements.",
          category,
          "1x1",
          BigInt(price),
        ],
      });

      console.log("Land Created");

      console.log("Land: ", transaction);
      toast(
        `Land Successfully Minted with Tx Id ${byteArrayToHexString(
          transaction.receipt.transactionRid
        )}`
      );
    } catch (e: any) {
      console.log("Operation - Error:", e);
    }
  }

  if (pgems_token_balance) {
    return (
      <div className="flexCenter">
        <div className="w-full rounded-[15px] bg-[#041938]">
          <div className="flex flex-col p-4">
            <div className="block">
              <h3
                className="font-bold text-[16px] sm:text-[24px] text-cyan-300 text-center 
          leading-[26px]"
              >
                Mint Land
              </h3>
              <p
                className="mt-[5px] font-normal text-[12px] sm:mt-6 sm:text-[16px] text-cyan-200 
          text-center leading-[18px]"
              >
                We already paid 5000 PGEMS Tokens as a Registering Bonus to
                you.. Now you can use that balance to mint lands..
              </p>
            </div>

            <div className="flex items-center mt-[60px] gap-[12px]">
              <div className="font-normal text-[12px] sm:text-[16px] text-cyan-300 truncate">
                My Current Balance: {Number(pgems_token_balance)} PGEMS Token
                <br />
              
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 mt-10 gap-5">
              <div className="flex flex-col justify-center items-center">
                {" "}
                Standard Land <br /> (Price : 500 Tokens) <br />
                <div
                  className="btn"
                  onClick={() =>
                    handleMintLand(
                      "Standard",
                      LAND_DESC.STANDARD,
                      land_category.STANDARD,
                      500
                    )
                  }
                >
                  Mint Land
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                {" "}
                Solid Land <br /> (Price : 1000 Tokens) <br />
                <div
                  className="btn text-center"
                  onClick={() =>
                    handleMintLand(
                      "Solid",
                      LAND_DESC.SOLID,
                      land_category.SOLID,
                      1000
                    )
                  }
                >
                  Mint Land
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                {" "}
                Superior Land <br /> (Price : 1500 Tokens) <br />
                <div
                  className="btn"
                  onClick={() =>
                    handleMintLand(
                      "Superior",
                      LAND_DESC.SUPERIOR,
                      land_category.SUPERIOR,
                      1500
                    )
                  }
                >
                  Mint Land
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                {" "}
                Epic Land <br /> (Price : 2000 Tokens) <br />
                <div
                  className="btn"
                  onClick={() =>
                    handleMintLand(
                      "Epic",
                      LAND_DESC.EPIC,
                      land_category.EPIC,
                      2000
                    )
                  }
                >
                  Mint Land
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                {" "}
                Legendary Land <br /> (Price : 2500 Tokens) <br />
                <div
                  className="btn"
                  onClick={() =>
                    handleMintLand(
                      "Legendary",
                      LAND_DESC.LEGENDARY,
                      land_category.LEGENDARY,
                      2500
                    )
                  }
                >
                  Mint Land
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default MintLand;
