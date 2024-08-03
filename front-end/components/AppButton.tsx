import Image from "next/image";

type ButtonProps = {
  img?: string;
  label: string;
  variant: "success" | "danger";
  onClick: any;
};

const AppButton = ({ img, label, variant, onClick }: ButtonProps) => {
  return (
    <div
      className={`text-white text-center w-fit hover:text-cyan-300 flex gap-2 
      btn cursor-pointer ${
        variant == "success" ? "bg-[#189393] text-white" : "bg-red-500"
      }`}
      onClick={onClick}
    >
      {img && <Image src={img} alt={label} width={24} height={24} />}

      <p>{label}</p>
    </div>
  );
};

export default AppButton;
