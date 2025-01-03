"use client";
import { motion } from "framer-motion";
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
    <motion.div
      whileInView={{ opacity: [0, 1], scale: [0.5, 1] }}
      className=" border border-gray-300  w-[60%] bg-[#133585] rounded-[30px] flex justify-between gap-[15px] flex-col lg:flex-row lg:w-[100%] "
    >
      <Image
        className=" rounded-tl-[30px] rounded-tr-[30px] rounded-bl-none w-[100%]   lg:w-[350px] lg:h-auto  lg:rounded-bl-[30px] lg:rounded-tr-none "
        src={iconLink1}
        alt={title}
        width={350}
        height={150}
        priority
      />

      <div className="flex  items-center justify-center">
        <div className=" w-[100px] h-[100px]">
          <Image
            src={iconLink2}
            alt={title}
            width={100}
            height={100}
            priority
          />
        </div>
      </div>
      <div className="flex justify-center items-center pb-[35px]  lg:pr-[25px] lg:pb-[0px] ">
        <p className="text-white  font-bold text-[30px]   ">{title}</p>
      </div>
    </motion.div>
  );
};

export default InfoContainer;
