import type { Meta, StoryObj } from '@storybook/react';
import { StreamlineIconGrid } from './StreamlineIconGrid';

const meta = {
  title: 'Icons/Streamline/Shopping Ecommerce',
  component: StreamlineIconGrid,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: [
          '## Streamline Icons — Shopping Ecommerce',
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

export const Baskets: Story = {
  args: {
    subcategoryName: "Baskets",
    categoryPath: "shopping-ecommerce/baskets",
    regularIcons: ["shopping-basket-1.png","shopping-basket-add.png","shopping-basket-arrow-in.png","shopping-basket-arrow-out.png","shopping-basket-cash.png","shopping-basket-check.png","shopping-basket-disable.png","shopping-basket-dislike.png","shopping-basket-edit.png","shopping-basket-handle.png","shopping-basket-heart.png","shopping-basket-like.png","shopping-basket-man.png","shopping-basket-rating.png","shopping-basket-remove.png","shopping-basket-sad-1.png","shopping-basket-sad.png","shopping-basket-search.png","shopping-basket-smile-1.png","shopping-basket-smile.png","shopping-basket-star.png","shopping-basket-subtract.png","shopping-basket-sync.png","shopping-basket-woman.png","shopping-basket.png"],
    lightIcons: [],
  },
};

export const Carts: Story = {
  args: {
    subcategoryName: "Carts",
    categoryPath: "shopping-ecommerce/carts",
    regularIcons: ["shopping-cart-1.png","shopping-cart-add.png","shopping-cart-cash.png","shopping-cart-check.png","shopping-cart-disable.png","shopping-cart-download-1.png","shopping-cart-download.png","shopping-cart-empty.png","shopping-cart-full.png","shopping-cart-heart.png","shopping-cart-man-message.png","shopping-cart-man.png","shopping-cart-remove.png","shopping-cart-seach.png","shopping-cart-star.png","shopping-cart-subtract.png","shopping-cart-upload-1.png","shopping-cart-upload.png","shopping-cart-woman.png","shopping-cart.png"],
    lightIcons: [],
  },
};

export const DiscountCoupons: Story = {
  args: {
    subcategoryName: "Discount Coupons",
    categoryPath: "shopping-ecommerce/discount-coupons",
    regularIcons: ["coupon-cut.png","discount-1.png","discount-arrow.png","discount-bubble.png","discount-circle-dash.png","discount-circle.png","discount-coupon.png","discount-dollar-dash.png","discount-parking-1.png","discount-parking.png","discount-square.png","discount-star-premium.png","discount.png"],
    lightIcons: [],
  },
};

export const ECommerce: Story = {
  args: {
    subcategoryName: "E Commerce",
    categoryPath: "shopping-ecommerce/e-commerce",
    regularIcons: ["e-commerce-add-basket-cloud.png","e-commerce-apparel-browse.png","e-commerce-apparel-laptop.png","e-commerce-apparel.png","e-commerce-basket-browser.png","e-commerce-basket-laptop.png","e-commerce-basket-monitor.png","e-commerce-buy-apparel.png","e-commerce-buy.png","e-commerce-cart-browser.png","e-commerce-cart-cloud.png","e-commerce-cart-laptop.png","e-commerce-cart-monitor-keyboard.png","e-commerce-cart-monitor.png","e-commerce-cart-vr.png","e-commerce-cart.png","e-commerce-gift.png","e-commerce-monitor-keyboard-basket.png","e-commerce-open-basket.png","e-commerce-shop.png","e-commerce-shopping-bag-1.png","e-commerce-shopping-bag-browser.png","e-commerce-shopping-bag-laptop.png","e-commerce-shopping-bag.png","e-commerce-shopping-bag_1.png","e-commerce-touch-buy.png"],
    lightIcons: [],
  },
};

export const MobileShopping: Story = {
  args: {
    subcategoryName: "Mobile Shopping",
    categoryPath: "shopping-ecommerce/mobile-shopping",
    regularIcons: ["mobile-shopping-bag.png","mobile-shopping-basket.png","mobile-shopping-cart-exchange.png","mobile-shopping-cart.png","mobile-shopping-shop-basket.png","mobile-shopping-shop-hand.png","mobile-shopping-shop.png","smartwatch-shopping-basket.png","smartwatch-shopping-cart.png"],
    lightIcons: [],
  },
};

export const Products: Story = {
  args: {
    subcategoryName: "Products",
    categoryPath: "shopping-ecommerce/products",
    regularIcons: ["products-briefcase.png","products-gift-tag.png","products-gifts.png","products-give-gift.png","products-give-purse.png","products-purse-1.png","products-purse-2.png","products-purse.png","products-shopping-bags.png"],
    lightIcons: [],
  },
};

export const Receipts: Story = {
  args: {
    subcategoryName: "Receipts",
    categoryPath: "shopping-ecommerce/receipts",
    regularIcons: ["receipt-1.png","receipt-dollar.png","receipt-register-print.png","receipt-register.png","receipt-slip-1.png","receipt-slip.png","receipt.png"],
    lightIcons: [],
  },
};

export const ShoppingBags: Story = {
  args: {
    subcategoryName: "Shopping Bags",
    categoryPath: "shopping-ecommerce/shopping-bags",
    regularIcons: ["shopping-bag-barcode-1.png","shopping-bag-barcode.png","shopping-bag-check.png","shopping-bag-download.png","shopping-bag-duty-free.png","shopping-bag-fire.png","shopping-bag-hang.png","shopping-bag-heart.png","shopping-bag-man.png","shopping-bag-play.png","shopping-bag-sad.png","shopping-bag-search.png","shopping-bag-side.png","shopping-bag-smile.png","shopping-bag-smiley.png","shopping-bag-tag-1.png","shopping-bag-tag.png","shopping-bag-user-message.png","shopping-bag-woman.png"],
    lightIcons: [],
  },
};

export const Shops: Story = {
  args: {
    subcategoryName: "Shops",
    categoryPath: "shopping-ecommerce/shops",
    regularIcons: ["shop-1.png","shop-arrow.png","shop-assistant.png","shop-barista.png","shop-cart.png","shop-cashier-man.png","shop-cashier-woman.png","shop-close.png","shop-dislike.png","shop-like.png","shop-open.png","shop-pin.png","shop-sale-1.png","shop-sign-bag.png","shop-sign-close.png","shop-sign-open.png","shop-sign.png","shop-star-rating.png","shop-street-sign.png","shop.png","supermarket-1.png","supermarket.png"],
    lightIcons: [],
  },
};

export const TagsCodes: Story = {
  args: {
    subcategoryName: "Tags Codes",
    categoryPath: "shopping-ecommerce/tags-codes",
    regularIcons: ["barcode-scan.png","barcode-search.png","barcode-tag.png","barcode.png","discount-30-alternate.png","discount-30.png","discount-50-alternate.png","discount-50.png","discount-70-alternate.png","discount-70.png","qr-code.png","tag-dollar-1.png","tag-dollar.png","tag-euro.png","tag-free-circle.png","tag-free.png","tag-hot-price.png","tag-new-circle.png","tag-new.png","tag-yuan.png"],
    lightIcons: [],
  },
};
