import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NextStep: Story = {
  args: {
    type: 'next',
    message: 'Next Step'
  },
};

export const Confirm: Story = {
    args: {
      type: 'confirm',
      message: 'Confirm'
    },
  };


  export const GoBack: Story = {
    args: {
      type: 'back',
      message: 'Go Back'
    },
  };