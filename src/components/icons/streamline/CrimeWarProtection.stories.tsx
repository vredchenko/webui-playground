import type { Meta, StoryObj } from '@storybook/react';
import { StreamlineIconGrid } from './StreamlineIconGrid';

const meta = {
  title: 'Icons/Streamline/Crime War Protection',
  component: StreamlineIconGrid,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: [
          '## Streamline Icons — Crime War Protection',
          '',
          '100,000+ icons by [Streamline](https://streamlinehq.com). Free under [CC Attribution 4.0](https://creativecommons.org/licenses/by/4.0/) (linkware).',
          '',
          'Showing 96px PNG variants in Regular styles.',
        ].join('\n'),
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof StreamlineIconGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AntiqueWeapons: Story = {
  args: {
    subcategoryName: "Antique Weapons",
    categoryPath: "crime-war-protection/antique-weapons",
    regularIcons: ["antique-armor.png","antique-axe-1.png","antique-axe.png","antique-battering-ram.png","antique-catapult-1.png","antique-catapult.png","antique-mace-double.png","antique-mace.png","antique-shuriken.png","antique-sling-1.png","antique-sling.png","antique-sword-1.png","antique-sword.png","antique-swords.png"],
    lightIcons: [],
  },
};

export const Army: Story = {
  args: {
    subcategoryName: "Army",
    categoryPath: "crime-war-protection/army",
    regularIcons: ["army-arrow-shield.png","army-arrow.png","army-badge-1.png","army-badge-2.png","army-badge-3.png","army-badge-skull.png","army-badge.png","army-dog-tag-1.png","army-dog-tag.png","army-fortress.png","army-shield.png","army-sword-fight.png","army-symbol-air-defence.png","army-symbol-airborne-infantry-1.png","army-symbol-airborne-infantry.png","army-symbol-armor.png","army-symbol-artillery-1.png","army-symbol-artillery.png","army-symbol-aviation.png","army-symbol-batallion.png","army-symbol-brigade.png","army-symbol-cavalry.png","army-symbol-company.png","army-symbol-division.png","army-symbol-engineer.png","army-symbol-light-recon.png","army-symbol-medical.png","army-symbol-mountain-infantry.png","army-symbol-mp.png","army-symbol-navy.png","army-symbol-non-specific-1.png","army-symbol-non-specific.png","army-symbol-platoon.png","army-symbol-regiment.png","army-symbol-section.png","army-symbol-signals.png","army-symbol-squad.png","army-symbol-support.png"],
    lightIcons: [],
  },
};

export const Bombs: Story = {
  args: {
    subcategoryName: "Bombs",
    categoryPath: "crime-war-protection/bombs",
    regularIcons: ["bomb-detonator.png","bomb-explosive-belt.png","bomb-explosive.png","bomb-fire-bottle.png","bomb-grenade.png","bomb-rocket-1.png","bomb-rocket.png","bomb.png","explosive.png","gun-silent.png"],
    lightIcons: [],
  },
};

export const Crime: Story = {
  args: {
    subcategoryName: "Crime",
    categoryPath: "crime-war-protection/crime",
    regularIcons: ["crime-cut.png","crime-razor.png","crime-robber.png","crime-seal-forfeit.png","crime-wanted.png"],
    lightIcons: [],
  },
};

export const Death: Story = {
  args: {
    subcategoryName: "Death",
    categoryPath: "crime-war-protection/death",
    regularIcons: ["death-coffin.png","death-grave.png","death-noose.png","death-rip.png"],
    lightIcons: [],
  },
};

export const Legal: Story = {
  args: {
    subcategoryName: "Legal",
    categoryPath: "crime-war-protection/legal",
    regularIcons: ["legal-certificate.png","legal-judge-balance.png","legal-judge.png","legal-scale-document.png","legal-scale.png","legal-verdict.png"],
    lightIcons: [],
  },
};

export const ModernWeapons: Story = {
  args: {
    subcategoryName: "Modern Weapons",
    categoryPath: "crime-war-protection/modern-weapons",
    regularIcons: ["modern-weapon-bullets.png","modern-weapon-cannon-1.png","modern-weapon-cannon.png","modern-weapon-die-cast.png","modern-weapon-gun-1.png","modern-weapon-gun.png","modern-weapon-machine-gun-1.png","modern-weapon-machine-gun.png","modern-weapon-shotgun.png","modern-weapon-tank-1.png","modern-weapon-tank-machine-gun.png","modern-weapon-tank.png","modern-weapon-van-machine-gun.png"],
    lightIcons: [],
  },
};

export const Police: Story = {
  args: {
    subcategoryName: "Police",
    categoryPath: "crime-war-protection/police",
    regularIcons: ["police-badge.png","police-footstep.png","police-footsteps.png","police-hat-1.png","police-hat-2.png","police-hat-4.png","police-hat-5.png","police-hat-6.png","police-hat-7.png","police-hat-8.png","police-hat.png","police-nightstick.png","police-officer-badge.png","police-polygraph.png","police-rotating-light-1.png","police-rotating-light.png"],
    lightIcons: [],
  },
};

export const Protection: Story = {
  args: {
    subcategoryName: "Protection",
    categoryPath: "crime-war-protection/protection",
    regularIcons: ["protection-castle-gate.png","protection-helmet-viking.png","protection-helmet.png","protection-mask-1.png","protection-mask.png","protection-safe.png","protection-sand-bag-1.png","protection-sand-bag-soldier-1.png","protection-sand-bag-soldier.png","protection-sand-bag.png","protection-shield-1.png","protection-shield-2.png","protection-shield-3.png","protection-shield-4.png","protection-shield-5.png","protection-shield-bolt.png","protection-shield-knight.png","protection-shield-skull.png","protection-shield-star.png","protection-shield.png","protection-vest.png","protection-water-fortress.png"],
    lightIcons: [],
  },
};

export const Punishment: Story = {
  args: {
    subcategoryName: "Punishment",
    categoryPath: "crime-war-protection/punishment",
    regularIcons: ["punishment-handcuffs.png","punishment-hanging-noose.png","punishment-hanging.png","punishment-prisoner-ball.png","punishment-prisoner-bars.png","punishment-prisoner-transport.png","punishment-torture.png"],
    lightIcons: [],
  },
};

export const Surveillance: Story = {
  args: {
    subcategoryName: "Surveillance",
    categoryPath: "crime-war-protection/surveillance",
    regularIcons: ["surveillance-360-camera.png","surveillance-camera-1.png","surveillance-camera-moving.png","surveillance-camera-smartphone.png","surveillance-camera.png","surveillance-cctv-1.png","surveillance-cctv-wifi.png","surveillance-cctv.png","surveillance-location-1.png","surveillance-location.png","surveillance-target.png"],
    lightIcons: [],
  },
};
