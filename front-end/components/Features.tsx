import { FEATURES } from "@/constants";

const Features = () => {
  return (
    <div className="flex flex-col flexCenter overflow-hidden py-24">
      <div className="mx-auto max-w-[1440px] relative w-full flex justify-end">
        <div className="z-20 flex w-full flex-col">
          <div className="relative">
            <h2 className="bold-40 lg:bold-64">Features</h2>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mt-20 lg">
            {FEATURES.map((feature) => {
              return (
                <FeatureItem
                  key={feature.id}
                  title={feature.title}
                  description={feature.description}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Features;

/* Feature Item */
type FeatureItemProps = {
  title: string;
  description: string;
};

const FeatureItem = ({ title, description }: FeatureItemProps) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <h2 className="font-bold text-[20px] lg:text-[32px] mt-5 capitalize">
        {title}
      </h2>
      <p className="text-[16px] mt-5 lg:mt-[30px]">{description}</p>
    </li>
  );
};
