import type { Meta, StoryObj } from '@storybook/react';
import TextInput from './TextInput';

const meta: Meta<typeof TextInput> = {
  title: 'Atoms/TextInput',
  component: TextInput,
  tags: ['autodocs'],
  args: {
    label: 'Email Address',
    placeholder: 'e.g. user@example.com',
    fullWidth: true,
  },
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Default: Story = {};

export const WithError: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'e.g. user@example.com',
    error: 'This field is required.',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Email Address',
    disabled: true,
    placeholder: 'Disabled input',
  },
};
