import React from "react";
import { Meta, ComponentStory } from "@storybook/react";
import IterationCard, { IIterationCardProps } from "@/components/card/IterationCard";

export default {
  title: "Components/IterationCard",
  component: IterationCard,
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

const Template: ComponentStory<typeof IterationCard> = (args: IIterationCardProps) => (
  <IterationCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: "QA and Testing",
  iconLink: "/IterationDefaultIcon.svg",
  description:
    "Bespoke software solutions tailored to your unique needs—from sleek front-end to robust back-end technologies.",
};
