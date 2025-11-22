import type { Meta, StoryObj } from '@storybook/react';
import { TexturedObject } from './TexturedObject';

const meta = {
  title: 'Textures/Textured Object',
  component: TexturedObject,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    objectType: {
      control: 'select',
      options: ['sphere', 'box', 'torus', 'cylinder', 'plane'],
    },
    rotate: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof TexturedObject>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WoodSphere: Story = {
  args: {
    texturePath: '/textures/wood.jpg',
    objectType: 'sphere',
    label: 'Wood Texture',
    rotate: true,
    height: 400,
  },
};

export const BrickBox: Story = {
  args: {
    texturePath: '/textures/brick.jpg',
    objectType: 'box',
    label: 'Brick Texture',
    rotate: true,
    height: 400,
  },
};

export const MetalTorus: Story = {
  args: {
    texturePath: '/textures/metal.jpg',
    objectType: 'torus',
    label: 'Metal Texture',
    rotate: true,
    height: 400,
  },
};

export const FabricCylinder: Story = {
  args: {
    texturePath: '/textures/fabric.jpg',
    objectType: 'cylinder',
    label: 'Fabric Texture',
    rotate: true,
    height: 400,
  },
};

export const MarblePlane: Story = {
  args: {
    texturePath: '/textures/marble.jpg',
    objectType: 'plane',
    label: 'Marble Texture',
    rotate: false,
    height: 400,
  },
};

export const ConcreteSphere: Story = {
  args: {
    texturePath: '/textures/concrete.jpg',
    objectType: 'sphere',
    label: 'Concrete Texture',
    rotate: true,
    height: 400,
  },
};

export const Interactive: Story = {
  args: {
    texturePath: '/textures/wood.jpg',
    objectType: 'sphere',
    label: 'Interactive - Use mouse to rotate',
    rotate: false,
    height: 400,
  },
};
