import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outlined', 'elevated'],
    },
    padding: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    hoverable: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    padding: 'md',
    children: (
      <div>
        <h3>Default Card</h3>
        <p>This is a default card with subtle shadow.</p>
      </div>
    ),
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    padding: 'md',
    children: (
      <div>
        <h3>Outlined Card</h3>
        <p>This is an outlined card with a border.</p>
      </div>
    ),
  },
};

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    padding: 'md',
    children: (
      <div>
        <h3>Elevated Card</h3>
        <p>This is an elevated card with a prominent shadow.</p>
      </div>
    ),
  },
};

export const Hoverable: Story = {
  args: {
    variant: 'default',
    padding: 'md',
    hoverable: true,
    children: (
      <div>
        <h3>Hoverable Card</h3>
        <p>Hover over this card to see the effect.</p>
      </div>
    ),
  },
};

export const SmallPadding: Story = {
  args: {
    variant: 'default',
    padding: 'sm',
    children: (
      <div>
        <h3>Small Padding</h3>
        <p>Card with small padding.</p>
      </div>
    ),
  },
};

export const LargePadding: Story = {
  args: {
    variant: 'default',
    padding: 'lg',
    children: (
      <div>
        <h3>Large Padding</h3>
        <p>Card with large padding for more spacious content.</p>
      </div>
    ),
  },
};
