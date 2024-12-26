import Image from "next/image";
interface ImageTextComponentProps {
  iconLink1: string;
  title: string;
  reverse?: boolean;
  functions: string;
  name: string;
}

const LeaderShipConteiner: React.FC<ImageTextComponentProps> = ({
  iconLink1,
  title,
  functions,
  name,
  reverse = false,
}) => {
  return (
    <div
      className={`w-[100%]  flex  items-center flex-col lg:flex-row  ${
        reverse ? "flex-col lg:flex-row-reverse " : ""
      }`}
    >
      <Image
        src={iconLink1}
        alt={title}
        width={550}
        height={550}
        priority
        className={`  ${reverse ? " w-[100%] " : ""}`}
      />
      <div className="flex flex-col p-[20px]">
        <div className="text-[#19B8E8] font-bold text-[16px] mb-[10px]">
          {functions}
        </div>
        <div className="text-[#124CC1] font-bold text-[45px] mb-[10px]">
          {name}
        </div>
        <div className="text-[#626262]  text-[16px] mb-[20px]">{title}</div>
        <Image
          src={"/LinkedIn_icon.svg.png"}
          alt={title}
          width={30}
          height={30}
          priority
        />
      </div>
    </div>
  );
};

export default LeaderShipConteiner;
