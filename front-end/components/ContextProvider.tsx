"use client";

import {
  Session,
  createKeyStoreInteractor,
  createLocalStorageLoginKeyStore,
  createSingleSigAuthDescriptorRegistration,
  createWeb3ProviderEvmKeyStore,
  hours,
  registerAccount,
  registrationStrategy,
  ttlLoginRule,
} from "@chromia/ft4";
import { createClient } from "postchain-client";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { getRandomUserName } from "../utils";
import { toast } from "react-toastify";

// Chromia Session Context
const ChromiaContext = createContext<Session | undefined>(undefined);

// Interface for Window Object
declare global {
  interface Window {
    ethereum: any;
  }
}

export function ContextProvider({ children }: { children: ReactNode }) {
  // Initialize session and EVM address states
  const [session, setSession] = useState<Session | undefined>(undefined);

  useEffect(() => {
    handleWalletConnect(setSession);
  }, []);

  return (
    <ChromiaContext.Provider value={session}>
      {children}
    </ChromiaContext.Provider>
  );
}

// Define hooks for accessing context
export function useSessionContext() {
  return useContext(ChromiaContext);
}

// Wallet Connection
export const handleWalletConnect = (setSession: any) => {
  const initSession = async () => {
    console.log("Initializing Session");
    // 1. Initialize Client
    const client = await createClient({
      nodeUrlPool: "http://localhost:7740",
      blockchainRid:
        "E079C57628585DEF2719676A71CA79898E321B0523ECD768A601068732B8A295",
    });

    // 2. Connect with MetaMask or Notify with toast"

    if (!window.ethereum) {
      toast("Metamask Wallet Not Found, Please Download and Install Metamask");
    }
    const evmKeyStore = await createWeb3ProviderEvmKeyStore(window.ethereum);

    // 3. Get all accounts associated with evm address
    const evmKeyStoreInteractor = createKeyStoreInteractor(client, evmKeyStore);
    const accounts = await evmKeyStoreInteractor.getAccounts();

    if (accounts.length > 0) {
      // 4. Start a new session
      const { session } = await evmKeyStoreInteractor.login({
        accountId: accounts[0].id,
        config: {
          rules: ttlLoginRule(hours(2)),
          flags: ["PlotWondersSession"],
        },
        loginKeyStore: createLocalStorageLoginKeyStore(),
      });
      setSession(session);
    } else {
      // 5. Create a new account by signing a message using metamask
      const authDescriptor = createSingleSigAuthDescriptorRegistration(
        ["A", "T"],
        evmKeyStore.id
      );
      const { session } = await registerAccount(
        client,
        evmKeyStore,
        registrationStrategy.open(authDescriptor, {
          config: {
            rules: ttlLoginRule(hours(2)),
            flags: ["PlotWondersSession"],
          },
        }),
        {
          name: "register_user",
          args: [getRandomUserName()],
        }
      );
      setSession(session);

      toast("New Account Registered Successfully..");
      toast("Received 5000 PGEMS Token as a Signup Bonus");
    }
    console.log("Session initialized");
  };

  initSession().catch(console.error);
};
