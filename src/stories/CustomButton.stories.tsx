import React from "react";
import { Meta, ComponentStory } from "@storybook/react";
import CustomButton, {
  ICustomButtonProps,
} from "@/components/button/CustomButton";

export default {
  title: "Components/CustomButton",
  component: CustomButton,
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

const Template: ComponentStory<typeof CustomButton> = (
  args: ICustomButtonProps
) => <CustomButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Get In Touch",
  buttonType: "default",
};
export const Hover = Template.bind({});
Hover.args = {
  title: "Learn more",
  buttonType: "hover",
};
export const TextTransform = Template.bind({});
TextTransform.args = {
  title: "Send message",
  buttonType: "textTransform",
};
