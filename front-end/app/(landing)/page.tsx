"use client";

import { AppButton, Faq, Features, LaunchDapp } from "@/components";
import { useSessionContext } from "@/components/ContextProvider";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useRouter } from "next/navigation";

const LandingPage = () => {
  const router = useRouter();

  const session = useSessionContext();
  const accountId = session?.account.id;
  console.log("AccountId ", accountId);

  const [text] = useTypewriter({
    words: [
      "Plot Wonders",
      "Powered By",
      "Chromia Relational Blockchain",
      "Decentralized",
      "Transparency",
      "Enhanced Security",
      "Trustless Transactions",
      "Fully On-Chain",
    ],
    loop: 0,
    typeSpeed: 120,
    deleteSpeed: 100,
  });
  return (
    <div id="home">
      {/* Text */}
      <div className="text-white">
        <div className="flexCenter">
          <div className="flexCenter flex-col">
            <div className="text-center text-white text-3xl animate-in fade-in zoom-in duration-1000">
              Welcome to Plot Wonders Dapp
            </div>
            <br />

            <div>
              <h2 className="w-100 text-center text-xl animate-pulse fade-in zoom-in delay-1000 duration-1000">
                A Buy/Sell/Auction Unique NFT Virtual Lands Marketplace Powered
                by
                <span className="text-cyan-500 font-bold">
                  {" "}
                  Chromia Relational Blockchain
                </span>
                <div className="flexCenter pt-5 lg:pt-8"></div>
              </h2>
              <div className="flex flexCenter flex-col">
                <div className="text-xl">{text}</div>{" "}
                <LaunchDapp label="Launch Dapp" />
              </div>
            </div>
            <br />
          </div>
        </div>
        <br />
        <br />
      </div>

      <Features />
      <LaunchDapp label="Launch Dapp Now" />
      <Faq />
    </div>
  );
};

export default LandingPage;
