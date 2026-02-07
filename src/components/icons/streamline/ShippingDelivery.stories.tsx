import type { Meta, StoryObj } from '@storybook/react';
import { StreamlineIconGrid } from './StreamlineIconGrid';

const meta = {
  title: 'Icons/Streamline/Shipping Delivery',
  component: StreamlineIconGrid,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: [
          '## Streamline Icons — Shipping Delivery',
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

export const Delivery: Story = {
  args: {
    subcategoryName: "Delivery",
    categoryPath: "shipping-delivery/delivery",
    regularIcons: ["delivery-door.png","delivery-drone.png","delivery-man-give.png","delivery-man-head.png","delivery-man.png","delivery-package-person.png","delivery-parachute.png","delivery-person-motorcycle-1.png","delivery-person-motorcycle.png","delivery-truck-1.png","delivery-truck-2.png","delivery-truck-3.png","delivery-truck-4.png","delivery-truck-5.png","delivery-truck-boxes.png","delivery-truck-cargo.png","delivery-truck-clock.png","delivery-truck-packages.png","delivery-truck.png"],
    lightIcons: [],
  },
};

export const OverseasShipment: Story = {
  args: {
    subcategoryName: "Overseas Shipment",
    categoryPath: "shipping-delivery/overseas-shipment",
    regularIcons: ["shipment-boat.png","shipment-cargo-boat.png","shipment-crane-hook.png","shipment-crane.png","shipment-hook.png","shipment-international.png","shipment-lift-1.png","shipment-lift.png","shipment-plane.png","shipment-truck-1.png","shipment-truck-2.png","shipment-truck.png","shipment.png"],
    lightIcons: [],
  },
};

export const Shipment: Story = {
  args: {
    subcategoryName: "Shipment",
    categoryPath: "shipping-delivery/shipment",
    regularIcons: ["shipment-barcode.png","shipment-box.png","shipment-container.png","shipment-crack.png","shipment-deliver.png","shipment-delivered.png","shipment-fragile-break.png","shipment-fragile-chip.png","shipment-fragile.png","shipment-give.png","shipment-in-transit.png","shipment-monitor-track.png","shipment-monitor.png","shipment-online-monitor-1.png","shipment-online-monitor.png","shipment-open.png","shipment-packages.png","shipment-touch.png","shipment-tracking.png","shipment-upload-information.png","shipment-upload.png","shipment-weight-kg.png","shipment-weight-lb.png"],
    lightIcons: [],
  },
};

export const ShipmentManagement: Story = {
  args: {
    subcategoryName: "Shipment Management",
    categoryPath: "shipping-delivery/shipment-management",
    regularIcons: ["shipment-add.png","shipment-approve-smartphone.png","shipment-cash.png","shipment-check.png","shipment-clock.png","shipment-disable.png","shipment-download.png","shipment-heart.png","shipment-lock.png","shipment-next.png","shipment-previous.png","shipment-question.png","shipment-remove.png","shipment-search.png","shipment-sign-smartphone.png","shipment-smartphone-1.png","shipment-smartphone-arrive.png","shipment-smartphone.png","shipment-star.png","shipment-subtract.png","shipment-sync.png","shipment-upload.png","shipment-warning.png"],
    lightIcons: [],
  },
};

export const WarehouseFullfilment: Story = {
  args: {
    subcategoryName: "Warehouse Fullfilment",
    categoryPath: "shipping-delivery/warehouse-fullfilment",
    regularIcons: ["warehouse-1.png","warehouse-cart-package-ribbon-1.png","warehouse-cart-package-ribbon.png","warehouse-cart-package.png","warehouse-cart-packages-1.png","warehouse-cart-packages-2.png","warehouse-cart-packages-3.png","warehouse-cart-packages.png","warehouse-cart-worker.png","warehouse-cart.png","warehouse-delivery.png","warehouse-package-box.png","warehouse-package-search.png","warehouse-package.png","warehouse-packages.png","warehouse-settings.png","warehouse-storage-1.png","warehouse-storage-2.png","warehouse-storage.png","warehouse-truck-delivery-1.png","warehouse-truck-delivery.png","warehouse.png"],
    lightIcons: [],
  },
};
