import ArrowControls from "./ArrowControls.vue";
import { expect, fn } from "storybook/test";

// The default export metadata for your component
export default {
  title: "Core Components/Arrow Controls",
  component: ArrowControls,
};

export const Primary = {
  // 👇 Rename this story
  name: "Primary",
  args: {
    onPrev: fn(),
    onNext: fn(),
  },
  play: async ({ canvas, userEvent, args }) => {
    if (import.meta.env.MODE !== 'test' ) return;
    const prevButton = canvas.getByRole("button", { name: "Previous" });
    const nextButton = canvas.getByRole("button", { name: "Next" });
    await expect(prevButton).toBeInTheDocument();
    await expect(nextButton).toBeInTheDocument();

    await userEvent.click(prevButton);
    await expect(args.onPrev).toHaveBeenCalled();

    await userEvent.click(nextButton);
    await expect(args.onNext).toHaveBeenCalled();
  },
};
