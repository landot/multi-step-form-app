import type { Meta, StoryObj } from '@storybook/react';

import { PersonalInfoSection } from './PersonalInfoSection';

const meta = {
  title: 'PersonalInfoSection',
  component: PersonalInfoSection,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof PersonalInfoSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};
