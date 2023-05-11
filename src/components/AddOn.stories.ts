import type { Meta, StoryObj } from '@storybook/react';

import { AddOn } from './AddOn';

const meta = {
  title: 'AddOn',
  component: AddOn,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof AddOn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const YearlyAddon: Story = {
  args: {
    name: 'Online service',
    description: 'Access to multiplayer games',
    billingType: 'yearly',
    monthlyCost: 1,
    annualCost: 10
  },
};

export const MonthlyAddon: Story = {
  args: {
    name: 'Online service',
    description: 'Access to multiplayer games',
    billingType: 'monthly',
    monthlyCost: 1,
    annualCost: 10
  },
};