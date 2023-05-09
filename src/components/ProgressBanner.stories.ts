import type { Meta, StoryObj } from '@storybook/react';

import { ProgressBanner } from './ProgressBanner';

const meta = {
  title: 'ProgressBanner',
  component: ProgressBanner,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof ProgressBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};
