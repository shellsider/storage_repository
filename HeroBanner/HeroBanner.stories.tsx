import type { Meta, StoryObj } from '@storybook/react';
import { Default as HeroBanner } from './HeroBanner';

const meta: Meta<typeof HeroBanner> = {
  title: 'Components/HeroBanner',
  component: HeroBanner,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    fields: {
      Title: { value: 'Business Management and Family Office' },
      Description: {
        value:
          '<p>With privacy at the heart of every matter, our Business\n                Management and Family Office Practice is highly experienced and\n                dedicated to providing sound financial and business guidance for\n                high-profile individuals and their families.</p><p>Citrin Cooperman covers a wide range of clients, including high\n                net worth individuals, high-profile individuals and their\n                families, and single-family and multi-family offices.</p>',
      },
      BackgroundImage: { value: { src: 'https://www.citrincooperman.com/-/media/BMFO-Header-Image-v2.png', alt: 'Hero Banner Image' } },
      PrimaryCta: { value: { href: '#contact-us', text: 'Talk to an Advisor' } },
    },
    params: { styles: 'hero-banner' },
  },
};

export default meta;

type Story = StoryObj<typeof HeroBanner>;

export const Default: Story = { args: {} };

export const Variant: Story = {
  args: {
    fields: {
      Title: { value: 'Business Management and Family Office' },
      Description: { value: '<p>Alternate description for variant.</p>' },
    },
  },
};
