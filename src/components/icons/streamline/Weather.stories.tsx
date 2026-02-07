import type { Meta, StoryObj } from '@storybook/react';
import { StreamlineIconGrid } from './StreamlineIconGrid';

const meta = {
  title: 'Icons/Streamline/Weather',
  component: StreamlineIconGrid,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: [
          '## Streamline Icons — Weather',
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

export const DayNight: Story = {
  args: {
    subcategoryName: "Day Night",
    categoryPath: "weather/day-night",
    regularIcons: ["day-afternoon.png","day-morning.png","day-noon.png","day-sunrise-1.png","day-sunrise-2.png","day-sunset-1.png","day-sunset-2.png","night-moon-begin.png","night-moon-full.png","night-moon-gibbous-1.png","night-moon-gibbous.png","night-moon-half-1.png","night-moon-half.png","night-moon-new-1.png","night-moon-new.png","night-pass.png"],
    lightIcons: [],
  },
};

export const Humidity: Story = {
  args: {
    subcategoryName: "Humidity",
    categoryPath: "weather/humidity",
    regularIcons: ["humidity-high.png","humidity-none.png"],
    lightIcons: [],
  },
};

export const IceSnow: Story = {
  args: {
    subcategoryName: "Ice Snow",
    categoryPath: "weather/ice-snow",
    regularIcons: ["ice-clean.png","ice-road.png","ice-snowflake.png","ice-water.png"],
    lightIcons: [],
  },
};

export const NaturalDisasters: Story = {
  args: {
    subcategoryName: "Natural Disasters",
    categoryPath: "weather/natural-disasters",
    regularIcons: ["natural-disaster-bolt.png","natural-disaster-draught.png","natural-disaster-earthquake.png","natural-disaster-fire.png","natural-disaster-flood-building.png","natural-disaster-flood-house-indoor.png","natural-disaster-flood-house-wave.png","natural-disaster-flood-house.png","natural-disaster-flood.png","natural-disaster-hurricane-house-damaged.png","natural-disaster-hurricane-house.png","natural-disaster-hurricane-map.png","natural-disaster-hurricane-radar.png","natural-disaster-hurricane.png","natural-disaster-volcano-smoke.png","natural-disaster-volcano.png","natural-disaster-water-level-fall.png","natural-disaster-water-level-rise.png","natural-disaster-water-level.png"],
    lightIcons: [],
  },
};

export const Rain: Story = {
  args: {
    subcategoryName: "Rain",
    categoryPath: "weather/rain",
    regularIcons: ["rain-cloud-umbrella.png","rain-coat-umbrella.png","rain-umbrella-1.png","rain-umbrella-boots.png","rain-umbrella-case.png","rain-umbrella-closed.png","rain-umbrella-sun.png","rain-umbrella.png"],
    lightIcons: [],
  },
};

export const Temperatures: Story = {
  args: {
    subcategoryName: "Temperatures",
    categoryPath: "weather/temperatures",
    regularIcons: ["temperature-celsius-fahrenheit-convert.png","temperature-celsius-high.png","temperature-celsius-low.png","temperature-celsius.png","temperature-down.png","temperature-fahrenheit-high.png","temperature-fahrenheit-low.png","temperature-fahrenheit.png","temperature-thermometer-down.png","temperature-thermometer-high.png","temperature-thermometer-low.png","temperature-thermometer-medium.png","temperature-thermometer-minus.png","temperature-thermometer-plus.png","temperature-thermometer-snow.png","temperature-thermometer-sunny.png","temperature-thermometer-up.png","temperature-thermometer.png","temperature-up.png"],
    lightIcons: [],
  },
};

export const Uv: Story = {
  args: {
    subcategoryName: "Uv",
    categoryPath: "weather/uv",
    regularIcons: ["uv-high-1.png","uv-high.png","uv-low-1.png","uv-low.png","uv-medium-1.png","uv-medium.png","uv-meter.png","uv-sun.png"],
    lightIcons: [],
  },
};

export const Visibility: Story = {
  args: {
    subcategoryName: "Visibility",
    categoryPath: "weather/visibility",
    regularIcons: ["sky.png","visibility-100.png","visibility-cloud-low.png","visibility-rain.png"],
    lightIcons: [],
  },
};

export const Weather: Story = {
  args: {
    subcategoryName: "Weather",
    categoryPath: "weather/weather",
    regularIcons: ["weather-cloud-1.png","weather-cloud-hail.png","weather-cloud-heavy-rain.png","weather-cloud-hurricane.png","weather-cloud-rain-thunder.png","weather-cloud-rain.png","weather-cloud-rainbow.png","weather-cloud-snow-thunder.png","weather-cloud-snow.png","weather-cloud-sun-wind-1.png","weather-cloud-sun-wind.png","weather-cloud-thunder-heavy.png","weather-cloud-thunder-rain.png","weather-cloud-thunder.png","weather-cloud-wind-4.png","weather-cloud-wind.png","weather-cloud.png","weather-clouds-rainbow.png","weather-clouds.png","weather-night-clear.png","weather-night-cloudy.png","weather-night-hail.png","weather-night-rain.png","weather-night-snow-thunder.png","weather-night-snow.png","weather-night-thunder-rain.png","weather-night-thunder.png","weather-night-wind-1.png","weather-night-wind.png","weather-night-windy.png","weather-rain-thunder.png","weather-rain.png","weather-snow-thunder.png","weather-snow.png","weather-sun.png","weather-thunder.png","weather-wind-1.png"],
    lightIcons: [],
  },
};

export const WeatherApps: Story = {
  args: {
    subcategoryName: "Weather Apps",
    categoryPath: "weather/weather-apps",
    regularIcons: ["weather-app-cloud-location.png","weather-app-cloudy.png","weather-app-rain-location.png","weather-app-rain-umbrella.png","weather-app-rain.png","weather-app-snow.png","weather-app-sun-cloud-location.png","weather-app-sun-coudy.png","weather-app-sun-location.png","weather-app-sunny.png"],
    lightIcons: [],
  },
};

export const Wind: Story = {
  args: {
    subcategoryName: "Wind",
    categoryPath: "weather/wind",
    regularIcons: ["wind-east.png","wind-north.png","wind-south.png","wind-velocity-measure.png","wind-west.png"],
    lightIcons: [],
  },
};
