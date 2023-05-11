import type { Meta, StoryObj } from '@storybook/react';

import { BillingSlider } from './BillingSlider';

const meta = {
  title: 'BillingSlider',
  component: BillingSlider,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof BillingSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};
