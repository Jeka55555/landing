"use client";
import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";

export interface IIterationCardProps {
  title: string;
  description: string;
  iconLink: string;
}
const IterationCard = ({
  title,
  description,
  iconLink,
}: IIterationCardProps) => {
  return (
    <Card className="max-w-[500px] bg-[#1b185a]">
      <CardBody className="gap-[20px] p-[50px]">
        <div className="flex gap-[15px] items-start">
          <Image src={iconLink} alt={title} width={75} height={75} />
          <div className="flex flex-col gap-[15px]">
            <h2 className="text-white text-[20px] font-semibold leading-[1.2em]">
              {title}
            </h2>
            <h3 className="text-white text-[18px] font-thin">{description}</h3>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default IterationCard;
