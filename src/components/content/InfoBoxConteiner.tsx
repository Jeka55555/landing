import Image from "next/image";
interface IInfoBoxContainerProps {
  iconLink1: string;
  iconLink2: string;
  title: string;
  info: string;
  functions: string;
}
const InfoBoxConteiner = ({
  iconLink1,
  iconLink2,
  title,
  info,
  functions,
}: IInfoBoxContainerProps) => {
  return (
    <div className="border border-gray-300 w-[580px] h-[480px] rounded-[60px] flex flex-col p-[40px] justify-between">
      <div>
        <div>
          <Image
            src={iconLink1}
            alt={title}
            width={100}
            height={100}
            priority
          />
        </div>
        <div className="text-[16px] text-[#626262] mt-[20px]">{info}</div>
      </div>
      <div className="flex  items-center ">
        <div className="bg-white w-[80px] h-[80px] rounded-full mr-[20px]">
          <Image
            src={iconLink2}
            alt={title}
            width={100}
            height={100}
            priority
          />
        </div>
        <div className="flex flex-col ">
          <div className="text-[23px] font-bold text-[#0B2051]">{title}</div>
          <div className="text-[16px] text-[#626262]">{functions}</div>
        </div>
      </div>
    </div>
  );
};

export default InfoBoxConteiner;
