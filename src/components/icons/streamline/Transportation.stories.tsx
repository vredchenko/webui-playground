import type { Meta, StoryObj } from '@storybook/react';
import { StreamlineIconGrid } from './StreamlineIconGrid';

const meta = {
  title: 'Icons/Streamline/Transportation',
  component: StreamlineIconGrid,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: [
          '## Streamline Icons — Transportation',
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

export const AdventureCars: Story = {
  args: {
    subcategoryName: "Adventure Cars",
    categoryPath: "transportation/adventure-cars",
    regularIcons: ["adventure-car-1.png","adventure-car-2.png","adventure-car-3.png","adventure-car-4.png","adventure-car-atv-1.png","adventure-car-atv.png","adventure-car-convertible.png","adventure-car-truck-1.png","adventure-car-truck.png","adventure-car.png"],
    lightIcons: [],
  },
};

export const Aircraft: Story = {
  args: {
    subcategoryName: "Aircraft",
    categoryPath: "transportation/aircraft",
    regularIcons: ["aircraft-chopper-1.png","aircraft-chopper-2.png","aircraft-chopper.png","aircraft-hot-air-balloon-1.png","aircraft-hot-air-balloon-2.png","aircraft-hotair-balloon.png","aircraft-military-plane-1.png","aircraft-military-plane-2.png","aircraft-military-plane.png","aircraft-plane-water-1.png","aircraft-plane-water.png","aircraft-plane.png","aircraft-propeller-1.png","aircraft-propeller-2.png","aircraft-propeller.png","aircraft-water-plane.png"],
    lightIcons: [],
  },
};

export const AutonomusCars: Story = {
  args: {
    subcategoryName: "Autonomus Cars",
    categoryPath: "transportation/autonomus-cars",
    regularIcons: ["auto-pilot-car-pin.png","auto-pilot-car-radius.png","auto-pilot-car-signal-1.png","auto-pilot-car-signal.png","auto-pilot-car-smartphone.png","auto-pilot-car-sound-warning.png","auto-pilot-car-wheel-disable.png"],
    lightIcons: [],
  },
};

export const Bicycles: Story = {
  args: {
    subcategoryName: "Bicycles",
    categoryPath: "transportation/bicycles",
    regularIcons: ["bicycle-city-guide.png","bicycle-lock-key.png","bicycle-person.png","bicycle-retro.png","bicycle-sports-1.png","bicycle-sports.png","bicycle.png","unicycle.png"],
    lightIcons: [],
  },
};

export const Bus: Story = {
  args: {
    subcategoryName: "Bus",
    categoryPath: "transportation/bus",
    regularIcons: ["bus-1.png","bus-2.png","bus-double-1.png","bus-double.png","bus-school.png","bus-station.png","bus-ticket.png","bus.png"],
    lightIcons: [],
  },
};

export const CarActions: Story = {
  args: {
    subcategoryName: "Car Actions",
    categoryPath: "transportation/car-actions",
    regularIcons: ["car-actions-check-1.png","car-actions-check.png","car-actions-disable-1.png","car-actions-disable.png","car-actions-music-1.png","car-actions-music.png","car-actions-search-1.png","car-actions-search.png","car-actions-settings-1.png","car-actions-settings.png","car-actions-shield-1.png","car-actions-shield.png","car-actions-wifi-1.png","car-actions-wifi.png"],
    lightIcons: [],
  },
};

export const CarInsurance: Story = {
  args: {
    subcategoryName: "Car Insurance",
    categoryPath: "transportation/car-insurance",
    regularIcons: ["car-insurance-hands.png","car-insurance.png"],
    lightIcons: [],
  },
};

export const Cars: Story = {
  args: {
    subcategoryName: "Cars",
    categoryPath: "transportation/cars",
    regularIcons: ["car-1.png","car-2.png","car-3.png","car-4.png","car-clouds.png","car-retro-1.png","car-retro-2.png","car-retro-luggage.png","car-retro.png","car-smart.png","car-sports.png","car-sun.png","car-truck-luggage.png","car-truck-woods.png","car-truck.png","car-voyage-1.png","car-voyage.png","car-wagon-1.png","car-wagon.png","car.png"],
    lightIcons: [],
  },
};

export const DashboardSymbols: Story = {
  args: {
    subcategoryName: "Dashboard Symbols",
    categoryPath: "transportation/dashboard-symbols",
    regularIcons: ["car-dashboard-e.png","car-dashboard-f.png","car-dashboard-fuel.png","car-dashboard-gear-automatic.png","car-dashboard-gear.png","car-dashboard-lights.png","car-dashboard-long-lights.png","car-dashboard-manual.png","car-dashboard-seat-adjust.png","car-dashboard-speed.png","car-dashboard-steering.png","car-dashboard-warning.png","car-dashboard-window-rear-wipe.png","car-dashboard-window-rear.png"],
    lightIcons: [],
  },
};

export const GarageRepairs: Story = {
  args: {
    subcategoryName: "Garage Repairs",
    categoryPath: "transportation/garage-repairs",
    regularIcons: ["car-repair-24h-service.png","car-repair-bottom.png","car-repair-checklist-1.png","car-repair-checklist.png","car-repair-engine.png","car-repair-fire-1.png","car-repair-fire.png","car-repair-fluid-1.png","car-repair-fluid.png","car-repair-lock-1.png","car-repair-lock.png","car-repair-rotating-light.png","car-repair-tire.png","car-repair-tow-truck-2.png","car-repair-tow-truck.png","car-repair-wash-2.png","car-repair-wash-3.png"],
    lightIcons: [],
  },
};

export const Gas: Story = {
  args: {
    subcategoryName: "Gas",
    categoryPath: "transportation/gas",
    regularIcons: ["gas-can.png","gas-e.png","gas-f.png","gas-load.png"],
    lightIcons: [],
  },
};

export const Navigation: Story = {
  args: {
    subcategoryName: "Navigation",
    categoryPath: "transportation/navigation",
    regularIcons: ["navigation-car-pin-1.png","navigation-car-pin.png","navigation-monitor.png","navigation-smartphone-finger.png","navigation-smartphone-hand.png","navigation-smartphone-message.png","navigation-smartphone.png"],
    lightIcons: [],
  },
};

export const Parking: Story = {
  args: {
    subcategoryName: "Parking",
    categoryPath: "transportation/parking",
    regularIcons: ["parking-p-1.png","parking-p.png","parking-ramp-1.png","parking-ramp.png"],
    lightIcons: [],
  },
};

export const PublicServices: Story = {
  args: {
    subcategoryName: "Public Services",
    categoryPath: "transportation/public-services",
    regularIcons: ["public-service-ambulance-1.png","public-service-ambulance.png","public-service-firefighter-truck-1.png","public-service-firefighter-truck.png","public-service-police-1.png","public-service-police-van.png","public-service-police.png"],
    lightIcons: [],
  },
};

export const Railroad: Story = {
  args: {
    subcategoryName: "Railroad",
    categoryPath: "transportation/railroad",
    regularIcons: ["railroad-cargo-train.png","railroad-fast-train.png","railroad-locomotive-1.png","railroad-locomotive-cargo.png","railroad-metro.png","railroad-train-1.png","railroad-train-back.png","railroad-train.png","railroad-wagon-1.png","railroad-wagon.png","railroad.png"],
    lightIcons: [],
  },
};

export const RoadsLights: Story = {
  args: {
    subcategoryName: "Roads Lights",
    categoryPath: "transportation/roads-lights",
    regularIcons: ["road-curvy.png","road-sign.png","road-straight-1.png","road-straight.png","road-traffic-lights-1.png","road-traffic-lights.png","road-tunnel-1.png","road-tunnel.png","road-woods.png"],
    lightIcons: [],
  },
};

export const ScootersBikes: Story = {
  args: {
    subcategoryName: "Scooters Bikes",
    categoryPath: "transportation/scooters-bikes",
    regularIcons: ["scooter-1.png","scooter-3.png","scooter-sport.png","scooter.png"],
    lightIcons: [],
  },
};

export const SeaTransportation: Story = {
  args: {
    subcategoryName: "Sea Transportation",
    categoryPath: "transportation/sea-transportation",
    regularIcons: ["sea-transport-bark-1.png","sea-transport-bark.png","sea-transport-boat.png","sea-transport-buoy-1.png","sea-transport-buoy.png","sea-transport-kayak.png","sea-transport-sailing-boat.png","sea-transport-ship-cargo-birds.png","sea-transport-ship-cargo.png","sea-transport-ship.png","sea-transport-small-boat.png","sea-transport-submarine.png","sea-transport-wheel-boat.png","sea-transport-yacht.png"],
    lightIcons: [],
  },
};

export const Segway: Story = {
  args: {
    subcategoryName: "Segway",
    categoryPath: "transportation/segway",
    regularIcons: ["segway-1.png","segway-2.png","segway-person.png","segway.png"],
    lightIcons: [],
  },
};

export const Signs: Story = {
  args: {
    subcategoryName: "Signs",
    categoryPath: "transportation/signs",
    regularIcons: ["road-sign-2.5m-high.png","road-sign-2.5m-wide.png","road-sign-4m-high.png","road-sign-4m-wide.png","road-sign-66-1.png","road-sign-66.png","road-sign-airport-close.png","road-sign-banned.png","road-sign-bicycles.png","road-sign-bird-life.png","road-sign-board-left.png","road-sign-bump-ahead.png","road-sign-cattle.png","road-sign-crossroad-1.png","road-sign-crossroad.png","road-sign-deadend.png","road-sign-divided-highway-1.png","road-sign-divided-highway-2.png","road-sign-divided-highway-ahead-1.png","road-sign-divided-highway-ahead.png","road-sign-hairpin-turn-left.png","road-sign-hairpin-turn-right.png","road-sign-hill-1.png","road-sign-hill.png","road-sign-horn.png","road-sign-hospital.png","road-sign-lane-crossing-left.png","road-sign-lane-crossing-right.png","road-sign-lane-narrowing-left.png","road-sign-lane-narrowing-right.png","road-sign-left-arrow.png","road-sign-left-curve-ahead.png","road-sign-left-reverse-turn-ahead.png","road-sign-left-turn.png","road-sign-light-guide.png","road-sign-look-both-ways-1.png","road-sign-look-both-ways.png","road-sign-mudslide.png","road-sign-no-bicycle.png","road-sign-no-buses.png","road-sign-no-entry-1.png","road-sign-no-entry.png","road-sign-no-horn.png","road-sign-no-left-turn.png","road-sign-no-parking-allowed.png","road-sign-no-parking.png","road-sign-no-pedestrian-crossing.png","road-sign-no-right-turn.png","road-sign-no-u-turn-left.png","road-sign-no-u-turn.png","road-sign-obstruction-1.png","road-sign-obstruction-horizontal.png","road-sign-obstruction.png","road-sign-oneway-right.png","road-sign-parking.png","road-sign-pedestrian.png","road-sign-railway-ahead.png","road-sign-right-arrow.png","road-sign-right-curve-ahead.png","road-sign-right-reverse-turn-ahead.png","road-sign-right-turn-1.png","road-sign-right-turn.png","road-sign-road-narrowing.png","road-sign-road-narrows.png","road-sign-road-widens.png","road-sign-roundabout.png","road-sign-school-bus.png","road-sign-sharp-turn.png","road-sign-side-road-angle-left.png","road-sign-side-road-angle-right.png","road-sign-side-road-left-1.png","road-sign-side-road-left.png","road-sign-side-road-right-1.png","road-sign-side-road-right.png","road-sign-slide-left.png","road-sign-slide-right.png","road-sign-slippery.png","road-sign-speed-limit-20.png","road-sign-speed-limit-30.png","road-sign-speed-limit-40.png","road-sign-speed-limit-50.png","road-sign-speed-limit-60.png","road-sign-speed-limit-70.png","road-sign-speed-limit-80.png","road-sign-speed-limit-90.png","road-sign-split.png","road-sign-stop-arrow.png","road-sign-stop.png","road-sign-traffic-left.png","road-sign-traffic-right.png","road-sign-tunnel-ahead.png","road-sign-turn-1.png","road-sign-turn-left-1.png","road-sign-turn-left-3.png","road-sign-turn-left.png","road-sign-turn-right-1.png","road-sign-turn-right.png","road-sign-turn.png","road-sign-two-way.png","road-sign-u-turn-left.png","road-sign-u-turn-right.png","road-sign-warning.png","road-sign-water-ahead.png"],
    lightIcons: [],
  },
};

export const SportsCars: Story = {
  args: {
    subcategoryName: "Sports Cars",
    categoryPath: "transportation/sports-cars",
    regularIcons: ["sports-car-1.png","sports-car-2.png","sports-car-convertible-1.png","sports-car-convertible-3.png","sports-car-convertible.png","sports-car.png"],
    lightIcons: [],
  },
};

export const Taxi: Story = {
  args: {
    subcategoryName: "Taxi",
    categoryPath: "transportation/taxi",
    regularIcons: ["taxi-1.png","taxi-driver.png","taxi-sign.png","taxi-station.png","taxi-van.png","taxi-wave-businessman.png","taxi-wave.png","taxi.png"],
    lightIcons: [],
  },
};

export const ToolsComponents: Story = {
  args: {
    subcategoryName: "Tools Components",
    categoryPath: "transportation/tools-components",
    regularIcons: ["car-tool-battery-bolt.png","car-tool-battery.png","car-tool-jumper-cables.png","car-tool-keys.png","car-tool-lug-wrench.png","car-tool-pump.png","car-tool-spark-plug.png","car-tool-steering-wheel-1.png","car-tool-steering-wheel.png","tool-helmet-lock.png","tool-helmet-unlock.png","tool-helmet.png"],
    lightIcons: [],
  },
};

export const TransportationTicketsTransfers: Story = {
  args: {
    subcategoryName: "Transportation Tickets Transfers",
    categoryPath: "transportation/transportation-tickets-transfers",
    regularIcons: ["transportation-ticket-boat-bus-transfer.png","transportation-ticket-boat-car-transfer.png","transportation-ticket-boat-plane-transfer.png","transportation-ticket-boat-train-transfer.png","transportation-ticket-boat-transfer.png","transportation-ticket-boat.png","transportation-ticket-bus-transfer-1.png","transportation-ticket-bus-transfer.png","transportation-ticket-bus.png","transportation-ticket-car-transfer-1.png","transportation-ticket-car-transfer-bus.png","transportation-ticket-car-transfer-plane.png","transportation-ticket-car-transfer.png","transportation-ticket-plane-transfer-bus.png","transportation-ticket-plane-transfer-train.png","transportation-ticket-plane-transfer.png","transportation-ticket-plane.png","transportation-ticket-train-transfer.png","transportation-ticket-train.png"],
    lightIcons: [],
  },
};

export const Trucks: Story = {
  args: {
    subcategoryName: "Trucks",
    categoryPath: "transportation/trucks",
    regularIcons: ["truck-1.png","truck-2.png","truck-3.png","truck-animal.png","truck-cargo-1.png","truck-cargo.png","truck-empty-1.png","truck-empty.png","truck-moving.png","truck-rv.png","truck.png"],
    lightIcons: [],
  },
};

export const Various: Story = {
  args: {
    subcategoryName: "Various",
    categoryPath: "transportation/various",
    regularIcons: ["cable-car-1.png","cable-car.png","trailer.png","tuk-tuk-1.png","tuk-tuk.png"],
    lightIcons: [],
  },
};

export const VintageCars: Story = {
  args: {
    subcategoryName: "Vintage Cars",
    categoryPath: "transportation/vintage-cars",
    regularIcons: ["vintage-car-1.png","vintage-car-2.png","vintage-car-3.png","vintage-car-4.png","vintage-car-5.png","vintage-car-6.png","vintage-car-7.png","vintage-car-8.png","vintage-car-carriage.png","vintage-car-convertible.png","vintage-car-luggage.png","vintage-car.png"],
    lightIcons: [],
  },
};
