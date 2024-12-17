"use client";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import React, { useState } from "react";

interface ICustomButtonPropsBase {
  title: string;
  iconLink?: string;
}

interface ICustomButtonPropsIcon extends ICustomButtonPropsBase {
  buttonType: "icon";
  iconLink: string;
}

interface ICustomButtonPropsHoverLink extends ICustomButtonPropsBase {
  buttonType: "hover" | "link" | "default" | "textTransform";
}

export type ICustomButtonProps =
  | ICustomButtonPropsHoverLink
  | ICustomButtonPropsIcon;

const CustomButton = ({ title, buttonType, iconLink }: ICustomButtonProps) => {
  switch (buttonType) {
    case "default":
      return (
        <Button className="bg-[#19B8E8] text-white rounded-[8px] min-h-0 min-w-0 py-[11px] px-[26px] font-bold text-[14px]">
          {title}
        </Button>
      );
    case "hover":
      const [hover, setHover] = useState(false);
      return (
        <motion.div
          onHoverStart={() => setHover(true)}
          onHoverEnd={() => setHover(false)}
        >
          <Button className="bg-[#124ec6] relative text-white rounded-[8px] min-h-0 min-w-0 p-0 py-[20px] px-[26px] font-light text-[14px]">
            {title}
            <motion.span
             className="absolute right-[10px]"
              animate={{
                x: hover ? 0 : -10,
                scale: hover ? 1 : 0,
                opacity: hover ? 1 : 0,
              }}
            >
              {">"}
            </motion.span>
          </Button>
        </motion.div>
      );
    case "textTransform":
      return (
        <Button className="bg-[#124EC6] uppercase text-white min-h-0 min-w-0 py-[11px] px-[26px] font-bold text-[14px]">
          {title}
        </Button>
      );
    default:
      <Button>{title}</Button>;
  }
};

export default CustomButton;
