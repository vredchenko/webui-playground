import type { Meta, StoryObj } from '@storybook/react';
import { StreamlineIconGrid } from './StreamlineIconGrid';

const meta = {
  title: 'Icons/Streamline/Pets Animals',
  component: StreamlineIconGrid,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: [
          '## Streamline Icons — Pets Animals',
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

export const Amphibians: Story = {
  args: {
    subcategoryName: "Amphibians",
    categoryPath: "pets-animals/amphibians",
    regularIcons: ["amphibian-chameleon-1.png","amphibian-chameleon-2.png","amphibian-chameleon.png","amphibian-foot.png","amphibian-frog-1.png","amphibian-frog-body.png","amphibian-frog.png"],
    lightIcons: [],
  },
};

export const AnimalsPrints: Story = {
  args: {
    subcategoryName: "Animals Prints",
    categoryPath: "pets-animals/animals-prints",
    regularIcons: ["animal-print-bird-1.png","animal-print-bird-2.png","animal-print-bird-3.png","animal-print-bird.png","animal-print-paw-1.png","animal-print-paw-2.png","animal-print-paw.png","animal-print-two-fingers.png","animal-print.png"],
    lightIcons: [],
  },
};

export const Apes: Story = {
  args: {
    subcategoryName: "Apes",
    categoryPath: "pets-animals/apes",
    regularIcons: ["gorilla-2.png","gorilla.png","monkey-1.png","monkey-2.png","monkey.png"],
    lightIcons: [],
  },
};

export const Bears: Story = {
  args: {
    subcategoryName: "Bears",
    categoryPath: "pets-animals/bears",
    regularIcons: ["bear-body-1.png","bear-body.png","bear-head.png","bear-paw.png","bear.png"],
    lightIcons: [],
  },
};

export const Birds: Story = {
  args: {
    subcategoryName: "Birds",
    categoryPath: "pets-animals/birds",
    regularIcons: ["bird-cage-1.png","bird-cage-2.png","bird-cage-empty.png","bird-cage.png","bird-house.png","bird.png","parrot-1.png","parrot.png"],
    lightIcons: [],
  },
};

export const Cats: Story = {
  args: {
    subcategoryName: "Cats",
    categoryPath: "pets-animals/cats",
    regularIcons: ["cat-bed-1.png","cat-bed.png","cat-bell-collar.png","cat-bell.png","cat-carrier-1.png","cat-carrier-2.png","cat-carrier.png","cat-cat-ball.png","cat-climber.png","cat-fish-toy.png","cat-grass-1.png","cat-grass.png","cat-head.png","cat-litter.png","cat-lost.png","cat-mouse-toy-1.png","cat-mouse-toy.png","cat-scratcher.png","cat-sitting.png","cat-toy-1.png","cat-toy.png","cat-water.png","cat-yarn-toy.png","cat-yarn.png","cat.png"],
    lightIcons: [],
  },
};

export const ChickenDucks: Story = {
  args: {
    subcategoryName: "Chicken Ducks",
    categoryPath: "pets-animals/chicken-ducks",
    regularIcons: ["chick-1.png","chick-1_1.png","chick.png","chicken-body.png","chicken-footstep.png","chicken-hatch.png","chicken-mother.png","chicken.png","duck-2.png","duck-water.png","duck.png","rooster-1.png","rooster-2.png","rooster.png"],
    lightIcons: [],
  },
};

export const Deers: Story = {
  args: {
    subcategoryName: "Deers",
    categoryPath: "pets-animals/deers",
    regularIcons: ["deer-1.png","deer-2.png","deer-antlers-1.png","deer-antlers.png","deer-body-1.png","deer-body.png","deer-footprint.png","deer-jump.png","deer-sleep.png","deer-target.png","deer.png","moose-body.png","moose.png","roe.png"],
    lightIcons: [],
  },
};

export const Dogs: Story = {
  args: {
    subcategoryName: "Dogs",
    categoryPath: "pets-animals/dogs",
    regularIcons: ["dog-allowed.png","dog-bone.png","dog-carrier.png","dog-collar.png","dog-food.png","dog-forbidden.png","dog-head.png","dog-house-1.png","dog-house-2.png","dog-house.png","dog-jump.png","dog-leash.png","dog-mouth-protection-1.png","dog-mouth-protection.png","dog-pitbull.png","dog-poodle.png","dog-poop-clean.png","dog-poop.png","dog-sit.png","dog-small-1.png","dog-small.png","dog.png"],
    lightIcons: [],
  },
};

export const ElephantRhinoceros: Story = {
  args: {
    subcategoryName: "Elephant Rhinoceros",
    categoryPath: "pets-animals/elephant-rhinoceros",
    regularIcons: ["elephant-draw.png","elephant-head-1.png","elephant-head.png","elephant-mother.png","elephant-water.png","elephant.png","hippo-body.png","hippo.png","rhino-body.png","rhino.png"],
    lightIcons: [],
  },
};

export const Fish: Story = {
  args: {
    subcategoryName: "Fish",
    categoryPath: "pets-animals/fish",
    regularIcons: ["fish-bowl-bubble.png","fish-bowl.png","fish-jar.png"],
    lightIcons: [],
  },
};

export const FlyingInsect: Story = {
  args: {
    subcategoryName: "Flying Insect",
    categoryPath: "pets-animals/flying-insect",
    regularIcons: ["flying-insect-bee-1.png","flying-insect-bee-2.png","flying-insect-bee-3.png","flying-insect-bee-4.png","flying-insect-bee.png","flying-insect-bees.png","flying-insect-butterfly-1.png","flying-insect-butterfly.png","flying-insect-dragonfly-1.png","flying-insect-dragonfly-2.png","flying-insect-dragonfly.png","flying-insect-fly.png","flying-insect-honey.png","flying-insect-ladybug-1.png","flying-insect-ladybug.png","flying-insect-moth-1.png","flying-insect-moth.png"],
    lightIcons: [],
  },
};

export const Girafe: Story = {
  args: {
    subcategoryName: "Girafe",
    categoryPath: "pets-animals/girafe",
    regularIcons: ["giraffe-1.png","giraffe-body.png","giraffe.png"],
    lightIcons: [],
  },
};

export const Insects: Story = {
  args: {
    subcategoryName: "Insects",
    categoryPath: "pets-animals/insects",
    regularIcons: ["insect-1.png","insect-2.png","insect-3.png","insect-4.png","insect-ant.png","insect-catch-1.png","insect-catch.png","insect-centipede-1.png","insect-centipede.png","insect-colony.png","insect-cricket-body.png","insect-cricket.png","insect-earth.png","insect-head.png","insect-mantis.png","insect-scorpion.png","insect.png"],
    lightIcons: [],
  },
};

export const Jellyfish: Story = {
  args: {
    subcategoryName: "Jellyfish",
    categoryPath: "pets-animals/jellyfish",
    regularIcons: ["jellyfish-1.png","jellyfish-box.png","jellyfish-group.png","jellyfish.png"],
    lightIcons: [],
  },
};

export const Koala: Story = {
  args: {
    subcategoryName: "Koala",
    categoryPath: "pets-animals/koala",
    regularIcons: ["koala-bamboo.png","koala-head.png","koala.png"],
    lightIcons: [],
  },
};

export const LionTigers: Story = {
  args: {
    subcategoryName: "Lion Tigers",
    categoryPath: "pets-animals/lion-tigers",
    regularIcons: ["lion-1.png","lion-body.png","lion-footprint.png","lion-tail.png","lion.png","lioness.png","puma.png","tiger-bengal.png","tiger-footprint.png","tiger-head.png","tiger.png"],
    lightIcons: [],
  },
};

export const Livestock: Story = {
  args: {
    subcategoryName: "Livestock",
    categoryPath: "pets-animals/livestock",
    regularIcons: ["livestock-bull-body.png","livestock-bull-footstep.png","livestock-cow-body.png","livestock-cow.png","livestock-lamb-1.png","livestock-lamb.png","livestock-ram-1.png","livestock-ram-2.png","livestock-sheep-body.png","livestock-sheep.png"],
    lightIcons: [],
  },
};

export const MarineMammals: Story = {
  args: {
    subcategoryName: "Marine Mammals",
    categoryPath: "pets-animals/marine-mammals",
    regularIcons: ["marine-mammal-dolphin-1.png","marine-mammal-dolphin-2.png","marine-mammal-dolphin-jump.png","marine-mammal-dolphin.png","marine-mammal-penguin-crested.png","marine-mammal-penguin-mother.png","marine-mammal-penguin-slide.png","marine-mammal-penguin.png","marine-mammal-sea-lion.png","marine-mammal-seal-ball.png","marine-mammal-seal-body.png","marine-mammal-seal.png","marine-mammal-turtle-1.png","marine-mammal-turtle.png"],
    lightIcons: [],
  },
};

export const MiceRats: Story = {
  args: {
    subcategoryName: "Mice Rats",
    categoryPath: "pets-animals/mice-rats",
    regularIcons: ["hamster-wheel.png","mouse-1.png","mouse-2.png","mouse-body.png","mouse-tail.png","mouse.png","rat-curve.png","rat.png"],
    lightIcons: [],
  },
};

export const OctopusSquids: Story = {
  args: {
    subcategoryName: "Octopus Squids",
    categoryPath: "pets-animals/octopus-squids",
    regularIcons: ["octopus-1.png","octopus.png","squid-shell.png","squid.png"],
    lightIcons: [],
  },
};

export const Peacocks: Story = {
  args: {
    subcategoryName: "Peacocks",
    categoryPath: "pets-animals/peacocks",
    regularIcons: ["peacock-feather.png","peacock-feathers-up-1.png","peacock-feathers-up.png","peacock-feathers.png","peacock-head.png"],
    lightIcons: [],
  },
};

export const Pets: Story = {
  args: {
    subcategoryName: "Pets",
    categoryPath: "pets-animals/pets",
    regularIcons: ["pets-certificate.png","pets-hair-brush.png","pets-hair-roller.png","pets-hospital.png","pets-nail-clipper.png","pets-paw-bag.png","pets-paw-bowl.png","pets-paw-bubble.png","pets-paw-can.png","pets-paw-heart.png","pets-paw-hospital.png","pets-paw-medal.png","pets-paw-ribbon.png","pets-paw-search.png","pets-paw-soap.png","pets-paw-trophy.png","pets-paw.png","pets-tick-free.png","pets-tick.png"],
    lightIcons: [],
  },
};

export const PetsTracking: Story = {
  args: {
    subcategoryName: "Pets Tracking",
    categoryPath: "pets-animals/pets-tracking",
    regularIcons: ["pet-tracking-cat-chip.png","pet-tracking-cat-location.png","pet-tracking-cat-search.png","pet-tracking-cat-signal.png","pet-tracking-cat-smartphone.png","pet-tracking-dog-chip.png","pet-tracking-dog-location.png","pet-tracking-dog-search.png","pet-tracking-dog-signal.png","pet-tracking-dog-smartphone.png","pet-tracking-tablet.png"],
    lightIcons: [],
  },
};

export const Rabbit: Story = {
  args: {
    subcategoryName: "Rabbit",
    categoryPath: "pets-animals/rabbit",
    regularIcons: ["rabbit-1.png","rabbit-2.png","rabbit-body.png","rabbit-running.png","rabbit-side.png","rabbit.png"],
    lightIcons: [],
  },
};

export const Reptiles: Story = {
  args: {
    subcategoryName: "Reptiles",
    categoryPath: "pets-animals/reptiles",
    regularIcons: ["reptile-cobra.png","reptile-crocodile-water.png","reptile-crocodile.png","reptile-hippo-1.png","reptile-hippo.png","reptile-rattlesnake-1.png","reptile-rattlesnake.png","reptile-snake-1.png"],
    lightIcons: [],
  },
};

export const Rodents: Story = {
  args: {
    subcategoryName: "Rodents",
    categoryPath: "pets-animals/rodents",
    regularIcons: ["hedgehog.png","meerkat.png","otter.png","platypus.png","raccoon-1.png","raccoon.png","skunk.png","squirrel.png"],
    lightIcons: [],
  },
};

export const SharksSportFish: Story = {
  args: {
    subcategoryName: "Sharks Sport Fish",
    categoryPath: "pets-animals/sharks-sport-fish",
    regularIcons: ["shark-1.png","shark-fin.png","shark-fish.png","shark-hammer-fish.png","shark-swordfish-fish.png","shark.png"],
    lightIcons: [],
  },
};

export const Shellfish: Story = {
  args: {
    subcategoryName: "Shellfish",
    categoryPath: "pets-animals/shellfish",
    regularIcons: ["shellfish-crab.png","shellfish-lobster.png","shellfish-shrimp.png"],
    lightIcons: [],
  },
};

export const Shells: Story = {
  args: {
    subcategoryName: "Shells",
    categoryPath: "pets-animals/shells",
    regularIcons: ["shell-1.png","shell-2.png","shell.png"],
    lightIcons: [],
  },
};

export const Snails: Story = {
  args: {
    subcategoryName: "Snails",
    categoryPath: "pets-animals/snails",
    regularIcons: ["snail-shell.png","snail.png"],
    lightIcons: [],
  },
};

export const Spiders: Story = {
  args: {
    subcategoryName: "Spiders",
    categoryPath: "pets-animals/spiders",
    regularIcons: ["spider-hang.png","spider-web-1.png","spider.png"],
    lightIcons: [],
  },
};

export const Swans: Story = {
  args: {
    subcategoryName: "Swans",
    categoryPath: "pets-animals/swans",
    regularIcons: ["swan-1.png","swan-couple.png","swan-water.png","swan.png"],
    lightIcons: [],
  },
};

export const VariousFish: Story = {
  args: {
    subcategoryName: "Various Fish",
    categoryPath: "pets-animals/various-fish",
    regularIcons: ["fish.png","pufferfish.png","ray-1.png","ray.png","seahorse.png"],
    lightIcons: [],
  },
};

export const VariousMammals: Story = {
  args: {
    subcategoryName: "Various Mammals",
    categoryPath: "pets-animals/various-mammals",
    regularIcons: ["anteater.png","armadillo.png","bat-fly.png","bat.png","duck-bill-platypus.png","kangaroo.png","lama.png","pelican.png","wild-pig-body.png","wild-pig.png"],
    lightIcons: [],
  },
};

export const Whales: Story = {
  args: {
    subcategoryName: "Whales",
    categoryPath: "pets-animals/whales",
    regularIcons: ["whale-body-1.png","whale-body.png","whale-tail.png","whale-water.png","whale.png"],
    lightIcons: [],
  },
};

export const WildBirds: Story = {
  args: {
    subcategoryName: "Wild Birds",
    categoryPath: "pets-animals/wild-birds",
    regularIcons: ["wild-bird-1.png","wild-bird-2.png","wild-bird-eagle-1.png","wild-bird-eagle-head.png","wild-bird-eagle.png","wild-bird-eggs.png","wild-bird-flamingo.png","wild-bird-flock-1.png","wild-bird-flock.png","wild-bird-fly-1.png","wild-bird-fly.png","wild-bird-footstep.png","wild-bird-head.png","wild-bird-hunt.png","wild-bird-nest.png","wild-bird-owl-body.png","wild-bird-owl.png","wild-bird-parrot.png","wild-bird-sing.png","wild-bird-vulture.png","wild-bird-woodpecker.png","wild-bird.png"],
    lightIcons: [],
  },
};

export const WolvesFox: Story = {
  args: {
    subcategoryName: "Wolves Fox",
    categoryPath: "pets-animals/wolves-fox",
    regularIcons: ["fox-body.png","fox-tail.png","fox.png","wolf-1.png","wolf-2.png","wolf-3.png","wolf-body-howl.png","wolf-howl-1.png","wolf-howl.png","wolf-sit-1.png","wolf-sit.png","wolf.png"],
    lightIcons: [],
  },
};
