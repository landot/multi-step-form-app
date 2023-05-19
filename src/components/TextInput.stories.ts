import type { Meta, StoryObj } from '@storybook/react';

import { TextInput } from './TextInput';

const meta = {
  title: 'TextInput',
  component: TextInput,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    fieldName: 'Test', 
    placeholder: 'test',
    error: '', 
    value: 'Test', 
    handleInputChange: () => null
  }
};
