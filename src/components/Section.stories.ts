import type { Meta, StoryObj } from '@storybook/react';

import { Section } from './Section';

const meta = {
  title: 'Section',
  component: Section,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    sectionTitle: 'Section Title',
    description: 'this is the description'
  },
};
