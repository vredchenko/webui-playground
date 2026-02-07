import type { Meta, StoryObj } from '@storybook/react';
import { StreamlineIconGrid } from './StreamlineIconGrid';

const meta = {
  title: 'Icons/Streamline/Food Drinks',
  component: StreamlineIconGrid,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: [
          '## Streamline Icons — Food Drinks',
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

export const AnimalProducts: Story = {
  args: {
    subcategoryName: "Animal Products",
    categoryPath: "food-drinks/animal-products",
    regularIcons: ["animal-products-cheese.png","animal-products-drumsticks.png","animal-products-egg.png","animal-products-eggs.png","animal-products-fried-egg-pan.png","animal-products-fried-egg.png","animal-products-turkey.png"],
    lightIcons: [],
  },
};

export const Appliances: Story = {
  args: {
    subcategoryName: "Appliances",
    categoryPath: "food-drinks/appliances",
    regularIcons: ["appliances-aspirator.png","appliances-blender.png","appliances-food-processor.png","appliances-fridge-double-door.png","appliances-fridge.png","appliances-hand-mixer.png","appliances-microwave-1.png","appliances-microwave.png","appliances-mixer.png","appliances-oven.png","appliances-rice-cooker.png","appliances-slow-cooker.png","appliances-stand-alone-mixer.png","appliances-stove.png","appliances-vitamix.png"],
    lightIcons: [],
  },
};

export const AsianFood: Story = {
  args: {
    subcategoryName: "Asian Food",
    categoryPath: "food-drinks/asian-food",
    regularIcons: ["asian-food-kiosk.png","asian-food-noodles-bowl.png","asian-food-noodles.png","asian-food-pho.png","asian-food-pork-bun.png","asian-food-rice.png","asian-food-soup.png"],
    lightIcons: [],
  },
};

export const Barbeque: Story = {
  args: {
    subcategoryName: "Barbeque",
    categoryPath: "food-drinks/barbeque",
    regularIcons: ["barbecue-grill.png","barbecue-pot.png","barbecue-set.png","barbecue-steak-shrimp.png","barbecue-steak.png","barbecue-stick-1.png","barbecue-stick.png"],
    lightIcons: [],
  },
};

export const Beer: Story = {
  args: {
    subcategoryName: "Beer",
    categoryPath: "food-drinks/beer",
    regularIcons: ["beer-glass-foam.png","beer-glass.png","beer-half-glass.png","beer-mug.png","beer-opener-1.png","beer-opener.png"],
    lightIcons: [],
  },
};

export const Bread: Story = {
  args: {
    subcategoryName: "Bread",
    categoryPath: "food-drinks/bread",
    regularIcons: ["bread-baguette.png","bread-free.png","bread-gluten-free.png","bread-herb-flour.png","bread-herb.png","bread-loaf.png","bread-slice-spread.png","bread-slice.png","bread-wheat.png"],
    lightIcons: [],
  },
};

export const Breakfast: Story = {
  args: {
    subcategoryName: "Breakfast",
    categoryPath: "food-drinks/breakfast",
    regularIcons: ["breakfast-bread-toast-1.png","breakfast-bread-toast.png","breakfast-cereal-bowl-spoon.png","breakfast-cereal-bowl.png","breakfast-cereal.png","breakfast-croissant-1.png","breakfast-croissant-2.png","breakfast-croissant.png","breakfast-english.png"],
    lightIcons: [],
  },
};

export const CakesCandies: Story = {
  args: {
    subcategoryName: "Cakes Candies",
    categoryPath: "food-drinks/cakes-candies",
    regularIcons: ["cake-birthday.png","cake-cherry.png","cake-cream.png","cake-flour.png","cake-sifter.png","cake-sugar-cane.png","candy-jar.png","candy.png","chocolate-bar.png","cookie.png","cupcake.png","donut.png","gingerbread-man.png","honey.png"],
    lightIcons: [],
  },
};

export const ChampagneSpirits: Story = {
  args: {
    subcategoryName: "Champagne Spirits",
    categoryPath: "food-drinks/champagne-spirits",
    regularIcons: ["champagne-bottle-glass.png","champagne-bottle.png","champagne-cheers.png","champagne-cooler.png","champagne-glass.png","flask.png","spirits-glass.png","spirits.png"],
    lightIcons: [],
  },
};

export const ChefGear: Story = {
  args: {
    subcategoryName: "Chef Gear",
    categoryPath: "food-drinks/chef-gear",
    regularIcons: ["chef-gear-apron.png","chef-gear-asian-hat.png","chef-gear-biscuits-cup.png","chef-gear-biscuits.png","chef-gear-butter.png","chef-gear-cookie-bowl.png","chef-gear-cookies.png","chef-gear-dumplings-1.png","chef-gear-dumplings.png","chef-gear-gloves.png","chef-gear-hat-1.png","chef-gear-hat-moustache.png","chef-gear-hat.png","chef-gear-mug.png","chef-gear-pizza.png","chef-gear-roller-whisk.png","chef-gear-taco-plate.png","chef-gear-tacos.png","chef-gear-tea-cookies.png"],
    lightIcons: [],
  },
};

export const Cocktail: Story = {
  args: {
    subcategoryName: "Cocktail",
    categoryPath: "food-drinks/cocktail",
    regularIcons: ["cocktail-cherry.png","cocktail-coconut.png","cocktail-glass-1.png","cocktail-glass.png","cocktail-martini.png","cocktail-shaker.png"],
    lightIcons: [],
  },
};

export const Coffee: Story = {
  args: {
    subcategoryName: "Coffee",
    categoryPath: "food-drinks/coffee",
    regularIcons: ["coffee-cold-press-1.png","coffee-cold-press.png","coffee-cold.png","coffee-cup-hot.png","coffee-cup.png","coffee-delivery.png","coffee-espresso-machine.png","coffee-filter-1.png","coffee-filter.png","coffee-jar.png","coffee-machine-1.png","coffee-machine.png","coffee-mug.png","coffee-pot-1.png","coffee-pot.png","coffee-read.png","coffee-straw.png","coffee-to-go.png","coffee-turkish.png"],
    lightIcons: [],
  },
};

export const EatingRestaurant: Story = {
  args: {
    subcategoryName: "Eating Restaurant",
    categoryPath: "food-drinks/eating-restaurant",
    regularIcons: ["eat-vending-machine.png","restaurant-dishes.png","restaurant-eating-set.png","restaurant-food-truck.png","restaurant-fork-knife.png","restaurant-fork-spoon.png","restaurant-menu.png","restaurant-seat.png","vending-machine.png"],
    lightIcons: [],
  },
};

export const ExoticFood: Story = {
  args: {
    subcategoryName: "Exotic Food",
    categoryPath: "food-drinks/exotic-food",
    regularIcons: ["exotic-food-buns.png","exotic-food-kebab-shred.png","exotic-food-kebab.png","exotic-food-oyster.png","exotic-food-passion-fruit.png","exotic-food-rolls.png","exotic-food-samosa-1.png","exotic-food-samosa-dip.png","exotic-food-samosa.png"],
    lightIcons: [],
  },
};

export const Fastfood: Story = {
  args: {
    subcategoryName: "Fastfood",
    categoryPath: "food-drinks/fastfood",
    regularIcons: ["fast-food-burger-drink.png","fast-food-burger.png","fast-food-double-burger.png","fast-food-french-fries.png","fast-food-hot-dog-grilled.png","fast-food-hot-dog-sausage.png","fast-food-hot-dog.png","fast-food-pizza-slice.png","fast-food-pizza.png","fast-food-pretzel.png","fast-food-tacos.png","fast-food-wrap.png"],
    lightIcons: [],
  },
};

export const FreezerCookingTemperatures: Story = {
  args: {
    subcategoryName: "Freezer Cooking Temperatures",
    categoryPath: "food-drinks/freezer-cooking-temperatures",
    regularIcons: ["temperature-snowflake-1.png","temperature-snowflake.png","temperature-thermometer-high.png","temperature-thermometer-low.png","temperature-thermometer-medium.png"],
    lightIcons: [],
  },
};

export const Fruit: Story = {
  args: {
    subcategoryName: "Fruit",
    categoryPath: "food-drinks/fruit",
    regularIcons: ["fruit-acorn.png","fruit-apple.png","fruit-banana.png","fruit-cherry.png","fruit-grapes.png","fruit-kiwi.png","fruit-lemon.png","fruit-orange.png","fruit-pear.png","fruit-scale-apple.png","fruit-scale.png","fruit-strawberry-1.png","fruit-strawberry.png","fruit-watermelon.png"],
    lightIcons: [],
  },
};

export const Icecream: Story = {
  args: {
    subcategoryName: "Icecream",
    categoryPath: "food-drinks/icecream",
    regularIcons: ["ice-cream-bite.png","ice-cream-bowl.png","ice-cream-cone-1.png","ice-cream-cone.png","ice-cream-stand.png","ice-cream-stick-1.png","ice-cream-stick-2.png","ice-cream-stick.png","ice-cream-truck.png","ice-cream.png"],
    lightIcons: [],
  },
};

export const Kitchenware: Story = {
  args: {
    subcategoryName: "Kitchenware",
    categoryPath: "food-drinks/kitchenware",
    regularIcons: ["kitchenware-draining-net.png","kitchenware-garlic-mincer.png","kitchenware-grater.png","kitchenware-hammer-meat.png","kitchenware-honey.png","kitchenware-ice-tray.png","kitchenware-ladle-1.png","kitchenware-ladle-hot.png","kitchenware-ladle-spaghetti.png","kitchenware-ladle.png","kitchenware-masher.png","kitchenware-molds.png","kitchenware-peeler.png","kitchenware-pizza-cutter.png","kitchenware-roller.png","kitchenware-scooper-1.png","kitchenware-scooper.png","kitchenware-spatula-1.png","kitchenware-spatula-2.png","kitchenware-spatula-scraper.png","kitchenware-spatula.png","kitchenware-spoon-set.png","kitchenware-strainer.png","kitchenware-whisk.png"],
    lightIcons: [],
  },
};

export const Knives: Story = {
  args: {
    subcategoryName: "Knives",
    categoryPath: "food-drinks/knives",
    regularIcons: ["knife-1.png","knife-board.png","knife.png","knives-set.png"],
    lightIcons: [],
  },
};

export const Milk: Story = {
  args: {
    subcategoryName: "Milk",
    categoryPath: "food-drinks/milk",
    regularIcons: ["milk-can.png","milk-carton.png"],
    lightIcons: [],
  },
};

export const PastaMeals: Story = {
  args: {
    subcategoryName: "Pasta Meals",
    categoryPath: "food-drinks/pasta-meals",
    regularIcons: ["meal-can.png","pasta-bowl-warm.png","pasta-bowl.png","pasta-fork.png","pasta-noodles.png","pasta-plate-warm.png","pie.png"],
    lightIcons: [],
  },
};

export const Seafood: Story = {
  args: {
    subcategoryName: "Seafood",
    categoryPath: "food-drinks/seafood",
    regularIcons: ["seafood-crab.png","seafood-fish.png","seafood-salmon.png","seafood-sardine-can-1.png","seafood-sardine-can.png","seafood-shrimp.png","seafood-squid.png","seafood-sushi.png","seafood-tuna.png"],
    lightIcons: [],
  },
};

export const Seasoning: Story = {
  args: {
    subcategoryName: "Seasoning",
    categoryPath: "food-drinks/seasoning",
    regularIcons: ["seasoning-chilli.png","seasoning-food.png","seasoning-pepper-ground.png","seasoning-pepper.png","seasoning-salt.png"],
    lightIcons: [],
  },
};

export const SoftDrinks: Story = {
  args: {
    subcategoryName: "Soft Drinks",
    categoryPath: "food-drinks/soft-drinks",
    regularIcons: ["soft-drinks-bottle-1.png","soft-drinks-bottle-heart.png","soft-drinks-bottle.png","soft-drinks-can-coffee.png","soft-drinks-can-energy.png","soft-drinks-can.png","soft-drinks-coconut.png","soft-drinks-glass.png","soft-drinks-juice.png","soft-drinks-juicer.png","soft-drinks-milk.png"],
    lightIcons: [],
  },
};

export const Stove: Story = {
  args: {
    subcategoryName: "Stove",
    categoryPath: "food-drinks/stove",
    regularIcons: ["stove-gas-1.png","stove-gas-pot.png","stove-gas.png","stove-induction-pan.png","stove-induction-pot.png","stove-induction.png","stove-pan.png","stove-steamer-gas.png","stove-steamer-induction.png"],
    lightIcons: [],
  },
};

export const Teas: Story = {
  args: {
    subcategoryName: "Teas",
    categoryPath: "food-drinks/teas",
    regularIcons: ["tea-bottle-herbal.png","tea-box-herbal.png","tea-cup-herbal.png","tea-cup.png","tea-glass-herbal.png","tea-herbal-to-go.png","tea-kettle-1.png","tea-kettle.png","tea-pot.png"],
    lightIcons: [],
  },
};

export const Tools: Story = {
  args: {
    subcategoryName: "Tools",
    categoryPath: "food-drinks/tools",
    regularIcons: ["tools-kitchen-basket.png","tools-kitchen-scale-1.png","tools-kitchen-scale.png","tools-kitchen-serving-dome.png"],
    lightIcons: [],
  },
};

export const Vegetables: Story = {
  args: {
    subcategoryName: "Vegetables",
    categoryPath: "food-drinks/vegetables",
    regularIcons: ["vegetables-bean-soup.png","vegetables-beet-1.png","vegetables-beet.png","vegetables-broccoli.png","vegetables-carrot.png","vegetables-corn.png","vegetables-mushroom-soup.png","vegetables-plate.png","vegetables-pumpkin.png","vegetables-salad.png"],
    lightIcons: [],
  },
};

export const Water: Story = {
  args: {
    subcategoryName: "Water",
    categoryPath: "food-drinks/water",
    regularIcons: ["water-bottle-1.png","water-bottle.png","water-container.png","water-glass-1.png","water-glass-2.png","water-glass-half-full.png","water-glass.png","water-pitcher-1.png","water-pitcher-2.png","water-pitcher-3.png","water-pitcher.png","water-straw.png"],
    lightIcons: [],
  },
};

export const Wine: Story = {
  args: {
    subcategoryName: "Wine",
    categoryPath: "food-drinks/wine",
    regularIcons: ["wine-barrel-1.png","wine-barrel.png","wine-glass-bottle.png","wine-glass.png","wine-grapes.png","wine-opener.png","wine-restaurant.png"],
    lightIcons: [],
  },
};
