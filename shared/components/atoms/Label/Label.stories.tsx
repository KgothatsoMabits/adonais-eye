import type { Meta, StoryObj } from '@storybook/react';
import Label from './Label';

const meta: Meta<typeof Label> = {
  title: 'Atoms/Label',
  component: Label,
  tags: ['autodocs'],
  args: {
    children: 'Username',
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {};

export const Required: Story = {
  args: {
    required: true,
  },
};

export const CustomClass: Story = {
  args: {
    className: 'text-blue-600',
  },
};
