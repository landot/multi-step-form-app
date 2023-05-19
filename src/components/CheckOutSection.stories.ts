import type { Meta, StoryObj } from '@storybook/react';

import { CheckOutSection } from './CheckOutSection';

const meta = {
  title: 'CheckOutSection',
  component: CheckOutSection,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CheckOutSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
