import ArrowButton from "./ArrowButton.vue";
import { expect, fn } from "storybook/test";

// The default export metadata for your component
export default {
  title: "Core Components/ArrowButton",
  component: ArrowButton,
};

export const Primary = {
  // 👇 Rename this story
  name: "Primary",
  args: {
    onPrev: fn(),
  },
  play: async ({ canvas, userEvent, args }) => {
    const button = canvas.getByRole("button", { name: "Previous" });
    await expect(button).toBeInTheDocument();
    await userEvent.click(button);
    await expect(args.onPrev).toHaveBeenCalled();
  },
};

export const Reverse = {
  // 👇 Rename this story
  name: "Reverse",
  args: {
    reverse: true,
    onNext: fn(),
  },
  play: async ({ canvas, userEvent, args }) => {
    const button = canvas.getByRole("button", { name: "Next" });
    await expect(button).toBeInTheDocument();
    await userEvent.click(button);
    await expect(args.onNext).toHaveBeenCalled();
  },
};
