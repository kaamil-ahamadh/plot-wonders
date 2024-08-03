import { useQuery } from "@/app/hooks";
import { useSessionContext } from "./ContextProvider";
import { useEffect } from "react";

export type User = {
  uid: number;
  username: string;
  account: number;
};

const Campaign = () => {
  const session = useSessionContext();
  const accountId = session?.account.id;

  const { result: userName } = useQuery<string>(
    "get_user_name",
    accountId ? { user_id: accountId } : undefined
  );
  const { result: followersCount } = useQuery<number>(
    "get_followers_count",
    accountId ? { user_id: accountId } : undefined
  );

  const { result: followingCount } = useQuery<number>(
    "get_following_count",
    accountId ? { user_id: accountId } : undefined
  );

  return <>Campaign</>;
};

export default Campaign;
