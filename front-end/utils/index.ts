import Joi from "joi";
import {
  createKeyStoreInteractor,
  createSingleSigAuthDescriptorRegistration,
  createWeb3ProviderEvmKeyStore,
  hours,
  registerAccount,
  registrationStrategy,
  ttlLoginRule,
} from "@chromia/ft4";
import { createClient } from "postchain-client";

const funnyAnimalNames = [
  "SneakyLlama",
  "CheekyMonkey",
  "LaughingPenguin",
  "CrazyKangaroo",
  "GigglingHedgehog",
  "WackyWalrus",
  "DancingDolphin",
  "BumblingBee",
  "HoppingHare",
  "SingingSeagull",
];

export function getRandomUserName() {
  const randomIndex = Math.floor(Math.random() * funnyAnimalNames.length);
  return funnyAnimalNames[randomIndex];
}

/* Handle Wallet Connect */
export const handleWalletConnect = (setSession: any) => {
  const initSession = async () => {
    console.log("Initializing Session");
    // 1. Initialize Client
    const client = await createClient({
      nodeUrlPool: "http://localhost:7740",
      blockchainRid:
        "5DDE8C5B49EB6E49B20BD6EE85066F13D688EB99F99629E208FC64398032BC02",
    });

    // 2. Connect with MetaMask
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
          flags: ["fundingfusion_session"],
        },
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
            flags: ["fundingfusion_session"],
          },
        }),
        {
          name: "register_user",
          args: [getRandomUserName()],
        }
      );
      setSession(session);
    }
    console.log("Session initialized");
  };

  initSession().catch(console.error);
};

/* Joi */

export const schema = Joi.object({
  name: Joi.string().required().min(3).label("Name"),
  title: Joi.string().required().min(3).max(255).label("Title"),
  description: Joi.string().required().min(6).max(1024).label("Description"),
  goal: Joi.number().min(0).required().label("Funding Goal"),
  endDate: Joi.date().required().label("End Date"),
});

// Byte Array to Hex
export function byteArrayToHexString(byteArray: any) {
  return byteArray
    .map((byte: any) => byte.toString(16).padStart(2, "0"))
    .join("");
}

export function hexStringToByteArray(hexString: any) {
  if (hexString.length % 2 !== 0) {
    throw "Hex string must have an even number of characters";
  }
  const byteArray = [];
  for (let i = 0; i < hexString.length; i += 2) {
    byteArray.push(parseInt(hexString.substr(i, 2), 16));
  }
  return byteArray;
}
