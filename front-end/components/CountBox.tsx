type CountBoxProps = {
  title: string;
  value: string;
};

const CountBox = ({ title, value }: CountBoxProps) => {
  return (
    <div className="flex flex-col items-center w-[100px] sm:w-[150px] h-fit">
      <h4 className="font-bold text-[30px] p-3 bg-secondary rounded-t-[10px] w-full text-center truncate">
        {value}
      </h4>
      <p className="font-normal text-[16px] px-3 py-2 w-full rounded-b-[10px]">
        {title}
      </p>
    </div>
  );
};

export default CountBox;
