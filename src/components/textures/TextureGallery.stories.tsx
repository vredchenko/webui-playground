import type { Meta, StoryObj } from '@storybook/react';
import { TextureGallery } from './TextureGallery';

const meta = {
  title: 'Textures/Texture Gallery',
  component: TextureGallery,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    columns: {
      control: { type: 'number', min: 1, max: 6 },
    },
    rotate: {
      control: 'boolean',
    },
    canvasHeight: {
      control: { type: 'number', min: 200, max: 600 },
    },
  },
} satisfies Meta<typeof TextureGallery>;

export default meta;
type Story = StoryObj<typeof meta>;

const allTextures = [
  { path: 'textures/wood.jpg', name: 'Wood', objectType: 'sphere' as const },
  { path: 'textures/brick.jpg', name: 'Brick', objectType: 'box' as const },
  { path: 'textures/metal.jpg', name: 'Metal', objectType: 'torus' as const },
  { path: 'textures/fabric.jpg', name: 'Fabric', objectType: 'cylinder' as const },
  { path: 'textures/marble.jpg', name: 'Marble', objectType: 'sphere' as const },
  { path: 'textures/concrete.jpg', name: 'Concrete', objectType: 'box' as const },
];

export const ThreeColumns: Story = {
  args: {
    textures: allTextures,
    columns: 3,
    rotate: true,
    canvasHeight: 300,
  },
};

export const TwoColumns: Story = {
  args: {
    textures: allTextures,
    columns: 2,
    rotate: true,
    canvasHeight: 350,
  },
};

export const SingleColumn: Story = {
  args: {
    textures: allTextures.slice(0, 3),
    columns: 1,
    rotate: true,
    canvasHeight: 400,
  },
};

export const SpheresOnly: Story = {
  args: {
    textures: allTextures.map(t => ({ ...t, objectType: 'sphere' as const })),
    columns: 3,
    rotate: true,
    canvasHeight: 300,
  },
};

export const MixedShapes: Story = {
  args: {
    textures: [
      { path: 'textures/wood.jpg', name: 'Wood Sphere', objectType: 'sphere' as const },
      { path: 'textures/wood.jpg', name: 'Wood Box', objectType: 'box' as const },
      { path: 'textures/wood.jpg', name: 'Wood Torus', objectType: 'torus' as const },
      { path: 'textures/metal.jpg', name: 'Metal Sphere', objectType: 'sphere' as const },
      { path: 'textures/metal.jpg', name: 'Metal Cylinder', objectType: 'cylinder' as const },
      { path: 'textures/metal.jpg', name: 'Metal Plane', objectType: 'plane' as const },
    ],
    columns: 3,
    rotate: true,
    canvasHeight: 300,
  },
};

export const StaticGallery: Story = {
  args: {
    textures: allTextures,
    columns: 3,
    rotate: false,
    canvasHeight: 300,
  },
};
