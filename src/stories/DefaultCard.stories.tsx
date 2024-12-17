import React from "react";
import { Meta, ComponentStory } from "@storybook/react"; 
import DefaultCard, { IDefaultCardProps } from "@/components/card/DefaultCard";

export default {
  title: "Components/DefaultCard",
  component: DefaultCard,
  argTypes: {
    title: {
      control: "text",
      description: "Title of the card",
    },
    iconLink: {
      control: "text",
      description: "Icon to be displayed inside the card",
    },
  },
} as Meta;

const Template: Story<typeof DefaultCard> = (args:IDefaultCardProps) => (
  <DefaultCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: "Accelerate Strategic Innovation",
  iconLink: '/defaultCardIcon.svg', 
};
