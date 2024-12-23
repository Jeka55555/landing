import Image from "next/image";

interface IInfoContainerProps {
  title: string;
  iconLink1: string;
  iconLink2: string;
}

const InfoContainer = ({
  title,
  iconLink1,
  iconLink2,
}: IInfoContainerProps) => {
  const lines = title.split(" ");
  return (
    <div className=" border border-gray-300 w-full max-w-[1000px] bg-[#133585] rounded-[30px] flex flex-col md:flex-row overflow-hidden">
      <div className="flex w-full md:w-[35%] items-center justify-center">
        <Image
          className="rounded-l-[30px] rounded-r-[30px] md:rounded-r-none"
          src={iconLink1}
          alt={title}
          width={350}
          height={150}
          priority
        />
      </div>
      <div className="flex w-full md:w-[65%] flex-col md:flex-row items-center justify-center p-[20px] md:p-[40px]">
        <div className="mb-4 md:mb-0 md:mr-[40px]">
          <Image
            src={iconLink2}
            alt={title}
            width={100}
            height={100}
            priority
          />
        </div>
        <div className="text-white text-center font-bold text-[20px] md:text-[24px] lg:text-[30px] leading-tight">
          {lines.map((line, index) => (
            <span key={index} className="block">
              {line}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoContainer;
