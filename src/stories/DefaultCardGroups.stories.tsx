import React from "react";
import { Meta, Story } from "@storybook/react";
import DefaultCardGroups, { IDefaultCardGroupsProps } from "@/components/group/DefaultCardGroups";

export default {
  title: "Components/DefaultCardGroups",
  component: DefaultCardGroups,
  argTypes: {
    items: {
      control: "object",
      description: "List of cards to display in the grid",
    },
  },
} as Meta;

const Template: Story<IDefaultCardGroupsProps> = (args:IDefaultCardGroupsProps) => <DefaultCardGroups {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      title: "Accelerate Strategic Innovation",
      iconLink: "/defaultCardIcon.svg",
    },
    {
      title: "Drive Operational Excellence",
      iconLink: "/defaultCardIcon.svg",
    },
    {
      title: "Expand Global Reach",
      iconLink: "/defaultCardIcon.svg",
    },
  ],
};
