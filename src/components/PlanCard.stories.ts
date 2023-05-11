import type { Meta, StoryObj } from '@storybook/react';
import arcadeImg from '../assets/images/icon-advanced.svg';

import { PlanCard } from './PlanCard';

const meta = {
  title: 'PlanCard',
  component: PlanCard,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof PlanCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SelectedMonthly: Story = {
  args: {
    selected: true,
    imgUrl: arcadeImg, 
    imgAlt: 'arcade icon', 
    plan: 'Arcade',
    billingType: 'monthly',
    monthlyCost: 9, 
    annualCost: 100
  },
};

export const NotSelectedMonthly: Story = {
    args: {
        selected: false,
        imgUrl: arcadeImg, 
        imgAlt: 'arcade icon', 
        plan: 'Arcade',
        billingType: 'monthly',
        monthlyCost: 9, 
        annualCost: 100
    },
};

export const SelectedYearly: Story = {
    args: {
        selected: true,
        imgUrl: arcadeImg, 
        imgAlt: 'arcade icon', 
        plan: 'Arcade',
        billingType: 'yearly',
        monthlyCost: 9, 
        annualCost: 100
    },
};
  
export const NotSelectedYearly: Story = {
    args: {
        selected: false,
        imgUrl: arcadeImg, 
        imgAlt: 'arcade icon', 
        plan: 'Arcade',
            billingType: 'yearly',
        monthlyCost: 9, 
        annualCost: 100
    },
};