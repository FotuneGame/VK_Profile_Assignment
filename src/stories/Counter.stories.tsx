import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Counter  from '../components/Counter';

const meta = {
  title: 'VK/Counter',
  component: Counter,
} satisfies Meta<typeof Counter>;

export default meta;
type Story = StoryObj<typeof meta>;



export const Primary: Story = {
  args: {
    children: "123",
    style:"primary",
    size: 8,
    stroke:true,
    pulse:true
  },
};
