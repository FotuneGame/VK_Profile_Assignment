import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {handlerButton} from "./utils";

import Button  from '../components/Button';
import Counter  from '../components/Counter';

const meta = {
  title: 'VK/Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
  args: {
    children: <>
      <Button.Label>Что-то сделать</Button.Label>
      <Counter>Test</Counter>
    </>,
    style: "primary",
    size: 36,
    state: "enabled",
    focused: false,
    callback: handlerButton
  },
};

export const Secondary: Story = {
  args: {
    children: <>
      <Button.Label>Что-то сделать</Button.Label>
      <Counter style='secondary'>Test</Counter>
    </>,
    style: "secondary",
    size: 36,
    state: "enabled",
    focused: false,
    callback: handlerButton
  },
};


export const Reverse: Story = {
  args: {
    children: <>
      <Counter>Test</Counter>
      <Button.Label>Что-то сделать</Button.Label>
    </>,
    style: "primary",
    size: 36,
    state: "enabled",
    focused: false,
    callback: handlerButton
  },
};



export const WithoutBorder: Story = {
  args: {
    children: <>
      <Button.Label>Что-то сделать</Button.Label>
      <Counter stroke={false}>Test</Counter>
    </>,
    style: "primary",
    size: 36,
    state: "enabled",
    focused: false,
    callback: handlerButton
  },
};

export const Pulse: Story = {
  args: {
    children: <>
      <Button.Label>Что-то сделать</Button.Label>
      <Counter pulse={true}>Test</Counter>
    </>,
    style: "primary",
    size: 36,
    state: "enabled",
    focused: false,
    callback: handlerButton
  },
};

export const BigText: Story = {
  args: {
    children: <>
      <Button.Label>Что-то сделать sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss</Button.Label>
      <Counter>1</Counter>
    </>,
    style: "primary",
    size: 36,
    state: "enabled",
    focused: false,
    callback: handlerButton
  },
};

export const CounterValue: Story = {
  args: {
    children: <>
      <Button.Label>Что-то сделать</Button.Label>
      <Counter size={20}>1</Counter>
    </>,
    style: "primary",
    size: 36,
    state: "enabled",
    focused: false,
    callback: handlerButton
  },
};


export const CounterValueMore: Story = {
  args: {
    children: <>
      <Button.Label>Что-то сделать</Button.Label>
      <Counter size={20}>100</Counter>
    </>,
    style: "primary",
    size: 36,
    state: "enabled",
    focused: false,
    callback: handlerButton
  },
};



export const CounterValueText: Story = {
  args: {
    children: <>
      <Button.Label>Что-то сделать</Button.Label>
      <Counter size={20}>руб</Counter>
    </>,
    style: "primary",
    size: 36,
    state: "enabled",
    focused: false,
    callback: handlerButton
  },
};
