import type { Meta, StoryObj } from '@storybook/react';
import { Default as HeroBanner } from './HeroBanner';

const meta: Meta<typeof HeroBanner> = {
  title: 'Components/HeroBanner',
  component: HeroBanner,
  parameters: { layout: 'fullscreen' },
  args: {
    fields: {
      Title: {
        value: 'Business Management and Family Office'
      },
      Description: {
        value: `With privacy at the heart of every matter, our Business Management and Family Office Practice is highly experienced and dedicated to providing sound financial and business guidance for high-profile individuals and their families.\n\nCitrin Cooperman covers a wide range of clients, including high net worth individuals, high-profile individuals and their families, and single-family and multi-family offices.`
      },
      BackgroundImage: {
        value: {
          src: 'https://www.citrincooperman.com/-/media/BMFO-Header-Image-v2.png',
          alt: 'Hero Banner Image'
        }
      },
      PrimaryCta: {
        value: {
          href: '#contact-us',
          text: 'Talk to an Advisor'
        }
      }
    },
    params: { styles: 'hero-banner' }
  }
};

export default meta;

export const Default: StoryObj = {};

export const Variant: StoryObj = {};
