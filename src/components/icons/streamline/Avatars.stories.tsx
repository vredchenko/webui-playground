import type { Meta, StoryObj } from '@storybook/react';
import { StreamlineIconGrid } from './StreamlineIconGrid';

const meta = {
  title: 'Icons/Streamline/Avatars',
  component: StreamlineIconGrid,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: [
          '## Streamline Icons — Avatars',
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

export const GeometricMenHistory: Story = {
  args: {
    subcategoryName: "Geometric Men History",
    categoryPath: "avatars/geometric-men-history",
    regularIcons: ["history-man-aviator.png","history-man-caveman.png","history-man-chinese-elder.png","history-man-king.png","history-man-napoleon.png","history-man-philosopher.png","history-man-snake-charmer.png","history-man-viking.png"],
    lightIcons: [],
  },
};

export const GeometricMenOldPeople: Story = {
  args: {
    subcategoryName: "Geometric Men Old People",
    categoryPath: "avatars/geometric-men-old-people",
    regularIcons: ["old-people-man-1.png","old-people-man-2.png","old-people-man-3.png"],
    lightIcons: [],
  },
};

export const GeometricMenPeople: Story = {
  args: {
    subcategoryName: "Geometric Men People",
    categoryPath: "avatars/geometric-men-people",
    regularIcons: ["people-man-1.png","people-man-10.png","people-man-11.png","people-man-12.png","people-man-2.png","people-man-3.png","people-man-4.png","people-man-5.png","people-man-6.png","people-man-7.png","people-man-8.png","people-man-beard-1.png","people-man-beard-2.png","people-man-beard-3.png","people-man-cap-1.png","people-man-cap-2.png","people-man-glasses-1.png","people-man-graduate.png","people-man-moustache-1.png","peopleman-moustache-2.png"],
    lightIcons: [],
  },
};

export const GeometricMenPoliceArmyCrime: Story = {
  args: {
    subcategoryName: "Geometric Men Police Army Crime",
    categoryPath: "avatars/geometric-men-police-army-crime",
    regularIcons: ["crime-man-inmate.png","crime-man-ninja.png","crime-man-riot-1.png","crime-man-thief-1.png","crime-man-thief-2.png","crime-man-thief-3.png","crime-man-thug.png","police-man-1.png","police-man-2.png","police-man-3.png","police-man-spy-1.png","police-man-spy-2.png"],
    lightIcons: [],
  },
};

export const GeometricMenProfessions: Story = {
  args: {
    subcategoryName: "Geometric Men Professions",
    categoryPath: "avatars/geometric-men-professions",
    regularIcons: ["professions-man-artist.png","professions-man-astronaut.png","professions-man-bellboy.png","professions-man-chef-1.png","professions-man-chef-2.png","professions-man-chef-3.png","professions-man-clerk.png","professions-man-clown.png","professions-man-construction-1.png","professions-man-diver.png","professions-man-doctor-1.png","professions-man-doctor-2.png","professions-man-farmer.png","professions-man-magician.png","professions-man-nurse-1.png","professions-man-nurse-2.png","professions-man-office-1.png","professions-man-office-2.png","professions-man-office-3.png","professions-man-post.png","professions-man-telecommunicator.png","professions-man-welder.png"],
    lightIcons: [],
  },
};

export const GeometricMenReligion: Story = {
  args: {
    subcategoryName: "Geometric Men Religion",
    categoryPath: "avatars/geometric-men-religion",
    regularIcons: ["religion-man-christian-1.png","religion-man-christian-2.png","religion-man-indian.png","religion-man-japan.png","religion-man-muslim-1.png","religion-man-muslim-2.png"],
    lightIcons: [],
  },
};

export const GeometricMenVintage: Story = {
  args: {
    subcategoryName: "Geometric Men Vintage",
    categoryPath: "avatars/geometric-men-vintage",
    regularIcons: ["vintage-man-moustache-1.png"],
    lightIcons: [],
  },
};

export const GeometricWomenFamousPeople: Story = {
  args: {
    subcategoryName: "Geometric Women Famous People",
    categoryPath: "avatars/geometric-women-famous-people",
    regularIcons: ["famous-people-witch.png"],
    lightIcons: [],
  },
};

export const GeometricWomenHistory: Story = {
  args: {
    subcategoryName: "Geometric Women History",
    categoryPath: "avatars/geometric-women-history",
    regularIcons: ["history-woman-aviator.png","history-woman-queen.png"],
    lightIcons: [],
  },
};

export const GeometricWomenOldPeople: Story = {
  args: {
    subcategoryName: "Geometric Women Old People",
    categoryPath: "avatars/geometric-women-old-people",
    regularIcons: ["old-people-woman-1.png","old-people-woman-2.png"],
    lightIcons: [],
  },
};

export const GeometricWomenPeople: Story = {
  args: {
    subcategoryName: "Geometric Women People",
    categoryPath: "avatars/geometric-women-people",
    regularIcons: ["people-woman-1.png","people-woman-10.png","people-woman-11.png","people-woman-12.png","people-woman-13.png","people-woman-3.png","people-woman-4.png","people-woman-5.png","people-woman-6.png","people-woman-7.png","people-woman-8.png","people-woman-9.png","people-woman-beanie.png","people-woman-cap-3.png","people-woman-cap-4.png","people-woman-glasses-1.png","people-woman-glasses-2.png","people-woman-glasses-3.png","people-woman-glasses-4.png","people-woman-glasses-6.png","people-woman-graduate.png","people-woman-ribbon.png"],
    lightIcons: [],
  },
};

export const GeometricWomenPoliceArmyCrime: Story = {
  args: {
    subcategoryName: "Geometric Women Police Army Crime",
    categoryPath: "avatars/geometric-women-police-army-crime",
    regularIcons: ["army-woman.png","police-woman-1.png","police-woman-2.png","police-woman-3.png","police-woman-spy-1.png","police-woman-spy-2.png"],
    lightIcons: [],
  },
};

export const GeometricWomenProfessions: Story = {
  args: {
    subcategoryName: "Geometric Women Professions",
    categoryPath: "avatars/geometric-women-professions",
    regularIcons: ["professions-woman-bellboy.png","professions-woman-chef-1.png","professions-woman-chef-2.png","professions-woman-chef-3.png","professions-woman-clerk.png","professions-woman-construction-1.png","professions-woman-doctor-1.png","professions-woman-doctor-2.png","professions-woman-magician.png","professions-woman-nurse-1.png","professions-woman-nurse-2.png","professions-woman-office-1.png","professions-woman-post.png","professions-woman-telecommunicator.png","professions-woman-welder.png"],
    lightIcons: [],
  },
};

export const GeometricWomenReligion: Story = {
  args: {
    subcategoryName: "Geometric Women Religion",
    categoryPath: "avatars/geometric-women-religion",
    regularIcons: ["religion-woman-japan.png","religion-woman-muslim.png"],
    lightIcons: [],
  },
};

export const GeometricWomenVintage: Story = {
  args: {
    subcategoryName: "Geometric Women Vintage",
    categoryPath: "avatars/geometric-women-vintage",
    regularIcons: ["vintage-woman-1.png"],
    lightIcons: [],
  },
};
