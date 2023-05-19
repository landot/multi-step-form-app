import type { Meta, StoryObj } from '@storybook/react';

import { PickAddOnSection } from './PickAddOnSection';

const meta = {
  title: 'PickAddOnSection',
  component: PickAddOnSection,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof PickAddOnSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};
