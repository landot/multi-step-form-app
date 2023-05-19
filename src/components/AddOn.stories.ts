import type { Meta, StoryObj } from '@storybook/react';

import { AddOn } from './AddOn';

const meta = {
  title: 'AddOn',
  component: AddOn,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof AddOn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const YearlyAddon: Story = {
  args: {
    name: 'Online service',
    description: 'Access to multiplayer games',
    paymentType: 'yearly',
    monthlyCost: 1,
    annualCost: 10,
    selected: true
  },
};

export const MonthlyAddon: Story = {
  args: {
    name: 'Online service',
    description: 'Access to multiplayer games',
    paymentType: 'monthly',
    monthlyCost: 1,
    annualCost: 10,
    selected: true
  },
};