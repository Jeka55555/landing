"use client";
import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

export interface IDefaultCardProps {
  title: string;
  iconLink: string;
}

const DefaultCard = ({ title, iconLink }: IDefaultCardProps) => {
  return (
    <Card className="max-w-[300px] px-[20px] py-[50px]">
      <CardBody className="gap-[20px]">
        <div className="flex justify-center w-full">
          <Image src={iconLink} alt={title} width={43} height={45} />
        </div>
        <h3 className="text-[#0b2051] text-[20px] font-semibold text-center leading-[1.2em]">
          {title}
        </h3>
      </CardBody>
    </Card>
  );
};

export default DefaultCard;
