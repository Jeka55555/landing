"use client";
import IterationCard, { IIterationCardProps } from "../card/IterationCard";

export interface IIterationCardGroupsProps {
  items: IIterationCardProps[];
}

const IterationCardGroups = ({ items }: IIterationCardGroupsProps) => {
  return (
    <div className="grid grid-cols-2 gap-y-[15px] gap-x-[25px] max720:grid-cols-1">
      {items.map((value, index) => (
        <IterationCard
          key={index}
          title={value.title}
          iconLink={value.iconLink}
          description={value.description}
        />
      ))}
    </div>
  );
};

export default IterationCardGroups;
