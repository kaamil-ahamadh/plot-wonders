"use client";

type StatCardProps = {
  type: string;
  count: any;
  label: string;
};

const StatCard = ({ type, count = 0, label }: StatCardProps) => {
  return (
    <div className="bg-secondary p-2 sm:p-4 rounded-3xl text-center">
      <h2 className="text-[32px] font-bold text-white">{count}</h2>
      <p className="text-[14px] ">{label}</p>
    </div>
  );
};

export default StatCard;
