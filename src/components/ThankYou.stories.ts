import type { Meta, StoryObj } from '@storybook/react';

import { ThankYou } from './ThankYou';

const meta = {
  title: 'ThankYou',
  component: ThankYou,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof ThankYou>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};
