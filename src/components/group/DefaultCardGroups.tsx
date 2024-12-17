"use client";
import DefaultCard, { IDefaultCardProps } from "../card/DefaultCard";

export interface IDefaultCardGroupsProps {
  items: IDefaultCardProps[];
}

const DefaultCardGroups = ({ items }: IDefaultCardGroupsProps) => {
  return (
    <div className="grid grid-cols-3 gap-[25px] max720:grid-cols-1">
      {items.map((value, index) => (
        <DefaultCard
          key={index}
          title={value.title}
          iconLink={value.iconLink}
        />
      ))}
    </div>
  );
};

export default DefaultCardGroups;
