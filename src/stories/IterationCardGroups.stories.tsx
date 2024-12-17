import React from "react";
import { Meta, Story } from "@storybook/react";
import IterationCardGroups from "@/components/group/IterationCardGroups";
import { IIterationCardProps } from "@/components/card/IterationCard";

export default {
  title: "Components/IterationCardGroups",
  component: IterationCardGroups,
  argTypes: {
    items: {
      control: "object",
      description: "List of cards to display in the grid",
    },
  },
} as Meta;

const Template: Story<IIterationCardProps> = (args: IIterationCardProps) => (
  <IterationCardGroups {...args} />
);

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      title: "Accelerate Strategic Innovation",
      iconLink: "/IterationDefaultIcon.svg",
      description:
        "Bespoke software solutions tailored to your unique needs—from sleek front-end to robust back-end technologies.",
    },
    {
      title: "QA and Testing",
      iconLink: "/defaultCardIcon.svg",
      description:
        "Comprehensive manual and automated testing ensure your applications are bulletproof.",
    },
    {
      title: "Mobile App Development",
      iconLink: "/IterationDefaultIcon.svg",
      description:
        "Bespoke software solutions tailored to your unique needs—from sleek front-end to robust back-end technologies.",
    },
    {
      title: "AI and Data Engineering",
      iconLink: "/IterationDefaultIcon.svg",
      description:
        "Bespoke software solutions tailored to your unique needs—from sleek front-end to robust back-end technologies.",
    },
    {
      title: "UX/UI Design",
      iconLink: "/IterationDefaultIcon.svg",
      description:
        "Bespoke software solutions tailored to your unique needs—from sleek front-end to robust back-end technologies.",
    },
    {
      title: "Product and Project Management",
      iconLink: "/IterationDefaultIcon.svg",
      description:
        "Bespoke software solutions tailored to your unique needs—from sleek front-end to robust back-end technologies.",
    },
  ],
};
