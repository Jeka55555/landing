"use client";
import { motion } from "framer-motion";
import Image from "next/image";
interface IOurWorkConteinerProps {
  title: string;
  iconLink1: string;
  background: string;
}
const OurWorkConteiner = ({
  iconLink1,
  title,
  background,
}: IOurWorkConteinerProps) => {
  return (
    <motion.div whileInView={{ opacity: [0, 1], scale: [0.5, 1] }}>
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="border border-gray-300  w-[320px] h-[450px] rounded-[30px] text-white flex flex-col p-[40px] justify-between "
      >
        <div className="">
          <Image src={iconLink1} alt={title} width={130} height={40} priority />
        </div>
        <div className="">
          <div className="text-[21px] font-bold pb-[30px]">{title}</div>
          <div className="text-[17px] font-bold">Learn More</div>
        </div>
      </div>
    </motion.div>
  );
};

export default OurWorkConteiner;
