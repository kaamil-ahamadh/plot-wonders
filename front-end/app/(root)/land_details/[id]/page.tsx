"use client";

import { useQuery } from "@/app/hooks";
import { CountBox } from "@/components";
import { useSessionContext } from "@/components/ContextProvider";
import { hexStringToByteArray } from "@/utils";
import Image from "next/image";

interface Props {
  params: { id: string };
}

const LandDetailsPage = ({ params: { id } }: Props) => {
  // Session and Account
  const session = useSessionContext();
  const accountId = session?.account.id;
  console.log(session?.account);

  const { result: land } = useQuery(
    "get_land_by_id",
    accountId ? { _id: id } : undefined
  );

  console.log(land);

  if (land) {
    return (
      <div className="w-full flex mt-10 gap-7">
        <div className="flex-1 flex-col flexCenter">
          <Image
            src={`/land_nfts/${land.category}_land.jpeg`}
            alt="Land"
            width={450}
            height={450}
            className="rounded-3xl"
          />

          {/* <div className="flex xl:hidden md:w-[450px] flex-wrap justify-between gap-[30px] mt-5 text-center">
          <CountBox title="Price" value={1} />
          <CountBox title="Days Left" value={5} />
        </div> */}

          <div className="mt-6 flex lg:flex-col flex-col gap-5 text-left">
            <div className="flex-[2] flex flex-col gap-[40px]">
              <div className="bg-secondary p-5 text-center rounded-full">
                <h4 className="font-semibold text-[18px] p-3 uppercase">
                  Name
                </h4>
                <p>{land.name}</p>
              </div>
              <div className="bg-secondary p-5 text-center rounded-3xl xl:hidden">
                <h4 className="font-semibold text-[18px] p-3 uppercase">
                  {land.description}
                </h4>
                <p></p>
              </div>

              {/* <div className="bg-secondary p-5 text-center rounded-3xl">
              <h4 className="font-semibold text-[18px] p-3 uppercase">Owner</h4>
              <p>0x0000000 {land.owner.account}</p>
            </div> */}
            </div>
          </div>
        </div>

        <div className="hidden xl:grid md:w-[450px] lg:grid-cols-2 justify-between gap-[30px] mt-5 text-center">
          {/* <CountBox title="Price" value="1" />
        <CountBox title="Days Left" value="1" /> 
        <CountBox title="Name" value={land.name} />
         <CountBox title="Owner" value="0x0000000" /> */}
          <div className="bg-secondary p-5 text-center rounded-3xl mt-24 w-[400px]">
            <h4 className="font-semibold text-[18px] p-3 uppercase h-fit">
              Description
            </h4>
            <p>{land.description}</p>
          </div>
        </div>
      </div>
    );
  }
};

export default LandDetailsPage;
