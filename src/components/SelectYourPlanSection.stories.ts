import type { Meta, StoryObj } from '@storybook/react';

import { SelectYourPlanSection } from './SelectYourPlanSection';

const meta = {
  title: 'SelectYourPlanSection',
  component: SelectYourPlanSection,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof SelectYourPlanSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};
