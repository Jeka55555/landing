"use client";
import { motion } from "framer-motion";
import Image from "next/image";
interface IBlogConteinerProps {
  title: string;
  iconLink1: string;
  info: string;
}
const BlogConteiner = ({ title, iconLink1, info }: IBlogConteinerProps) => {
  return (
    <motion.div
      whileInView={{ opacity: [0, 1], scale: [0.5, 1] }}
      className=" border border-gray-300 w-[320px] h-[450px] rounded-[30px] flex flex-col  "
    >
      <Image
        className="rounded-t-[30px]"
        src={iconLink1}
        alt={title}
        width={320}
        height={40}
        priority
      />
      <div className="p-[15px]">
        <div className="text-[19px] font-bold mb-[10px] ">{title}</div>
        <div className="text-[16px] text-[#626262] ">{info}</div>
      </div>
    </motion.div>
  );
};

export default BlogConteiner;
