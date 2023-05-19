import type { Meta, StoryObj } from '@storybook/react';

import { CheckOut } from './CheckOutSection';

const meta = {
  title: 'CheckOut',
  component: CheckOut,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof CheckOut>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};
