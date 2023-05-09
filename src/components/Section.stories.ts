import type { Meta, StoryObj } from '@storybook/react';

import { Section } from './Section';

const meta = {
  title: 'Section',
  component: Section,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};
