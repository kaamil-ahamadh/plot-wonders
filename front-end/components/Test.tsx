"use client";

import { useQuery } from "@/app/hooks";
import { useSessionContext } from "./ContextProvider";
import { toast } from "react-toastify";
import { byteArrayToHexString } from "@/utils";
import { v4 } from "uuid";
import { LAND_DESC } from "@/constants";

export type User = {
  username: string;
  account: number;
};

enum land_category {
  STANDARD,
  SOLID,
  SUPERIOR,
  EPIC,
  LEGENDARY,
}

const TestComp = () => {
  const session = useSessionContext();
  const accountId = session?.account.id;
  console.log(session);
  console.log(accountId);

  // Unique ID
  const uid = v4();

  // Toast

  // Get Username Query
  const { result: userName } = useQuery<string>(
    "get_user_name",
    accountId ? { user_id: accountId } : undefined
  );

  // Get Users
  const { result: allUsers } = useQuery(
    "get_users",
    accountId ? { pointer: 0, n_users: 10 } : undefined
  );

  // Get Lands
  const { result: allLands } = useQuery(
    "get_all_lands",
    accountId ? {} : undefined
  );

  // Handle Submit
  async function handleSubmit() {
    if (!session) return;
    try {
      // Step 4: Content submission
      toast("Minting New Land, pls wait few seconds...");
      const transaction = await session.call({
        name: "mint_land",
        args: [
          uid,
          LAND_DESC.legendary,
          // "Legendary lands are the pinnacle of excellence. They are highly coveted, possess extraordinary abilities, and are often associated with remarkable achievements.",
          land_category.LEGENDARY,
          "1x1",
          BigInt(2500),
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

  console.log("AccountId", accountId);
  console.log("Username", userName);
  console.log(allUsers);
  console.log("All Lands ", allLands);

  return (
    <>
      <button onClick={handleSubmit} className="">
        Send
      </button>
    </>
  );
};

export default TestComp;
