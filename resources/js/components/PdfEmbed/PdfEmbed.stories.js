import PdfEmbed from './PdfEmbed.vue'; // Update this path to match your actual filename

export default {
  title: 'Core Components/Pdf Embed',
  component: PdfEmbed,
  tags: ['autodocs'],
  argTypes: {
    // Allows you to edit the blockData object directly in the Storybook UI
    blockData: { control: 'object' },
  },
};

export const SinglePageSpread = {
  args: {
    blockData: {
      pdf_url: 'https://museum-backend.colby.edu/wp-content/uploads/2025/04/2023–28-Colby-Museum_Strategic-Direction.pdf',
      page_spread: 'single', // Anything other than 'two' maps to SpreadMode.None
    },
  },
};

export const TwoPageSpread = {
  args: {
    blockData: {
      pdf_url: 'https://museum-backend.colby.edu/wp-content/uploads/2025/04/2023–28-Colby-Museum_Strategic-Direction.pdf',
      page_spread: 'two', // Maps to SpreadMode.Odd
    },
  },
};