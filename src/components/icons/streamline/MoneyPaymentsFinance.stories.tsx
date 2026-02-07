import type { Meta, StoryObj } from '@storybook/react';
import { StreamlineIconGrid } from './StreamlineIconGrid';

const meta = {
  title: 'Icons/Streamline/Money Payments Finance',
  component: StreamlineIconGrid,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: [
          '## Streamline Icons — Money Payments Finance',
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

export const AccountingBilling: Story = {
  args: {
    subcategoryName: "Accounting Billing",
    categoryPath: "money-payments-finance/accounting-billing",
    regularIcons: ["accounting-abacus.png","accounting-calculator-1.png","accounting-calculator-2.png","accounting-calculator.png","accounting-coins.png","accounting-document.png","accounting-invoice-hand.png","accounting-invoice-mail.png","accounting-invoice.png","calculator-app.png"],
    lightIcons: [],
  },
};

export const CashPayments: Story = {
  args: {
    subcategoryName: "Cash Payments",
    categoryPath: "money-payments-finance/cash-payments",
    regularIcons: ["cash-payment-bag-1.png","cash-payment-bag.png","cash-payment-bill-1.png","cash-payment-bill-2.png","cash-payment-bill-3.png","cash-payment-bill-4.png","cash-payment-bill.png","cash-payment-bills-1.png","cash-payment-bills.png","cash-payment-coin-1.png","cash-payment-coin-stash.png","cash-payment-coin.png","cash-payment-coins.png","cash-payment-person.png","cash-payment-wallet.png"],
    lightIcons: [],
  },
};

export const CheckPayments: Story = {
  args: {
    subcategoryName: "Check Payments",
    categoryPath: "money-payments-finance/check-payments",
    regularIcons: ["cash-payment-sign-1.png","cash-payment-sign-2.png","check-payment-give.png","check-payment-sign.png"],
    lightIcons: [],
  },
};

export const CreditCardPayments: Story = {
  args: {
    subcategoryName: "Credit Card Payments",
    categoryPath: "money-payments-finance/credit-card-payments",
    regularIcons: ["credit-card-1.png","credit-card-amex.png","credit-card-check.png","credit-card-disable.png","credit-card-dollar-1.png","credit-card-dollar.png","credit-card-flag.png","credit-card-give.png","credit-card-laptop-payment.png","credit-card-lock.png","credit-card-mastercard.png","credit-card-monitor-payment.png","credit-card-online-payment.png","credit-card-payment.png","credit-card-phone-call.png","credit-card-remove.png","credit-card-scan.png","credit-card-shield.png","credit-card-smartphone.png","credit-card-sync.png","credit-card-visa.png","credit-card.png"],
    lightIcons: [],
  },
};

export const CryptoCurrencies: Story = {
  args: {
    subcategoryName: "Crypto Currencies",
    categoryPath: "money-payments-finance/crypto-currencies",
    regularIcons: ["cryptho-currency-megacoin.png","crypto-currency-bitcoin-bill.png","crypto-currency-bitcoin-browser.png","crypto-currency-bitcoin-bubble.png","crypto-currency-bitcoin-chip.png","crypto-currency-bitcoin-circle.png","crypto-currency-bitcoin-cloud-sync.png","crypto-currency-bitcoin-cloud.png","crypto-currency-bitcoin-code.png","crypto-currency-bitcoin-coins.png","crypto-currency-bitcoin-decrease.png","crypto-currency-bitcoin-dollar-equal.png","crypto-currency-bitcoin-dollar-exchange.png","crypto-currency-bitcoin-dollar-unequal-1.png","crypto-currency-bitcoin-dollar-unequal.png","crypto-currency-bitcoin-exchange-1.png","crypto-currency-bitcoin-exhcange.png","crypto-currency-bitcoin-give.png","crypto-currency-bitcoin-imac.png","crypto-currency-bitcoin-increase.png","crypto-currency-bitcoin-laptop.png","crypto-currency-bitcoin-lock.png","crypto-currency-bitcoin-mining.png","crypto-currency-bitcoin-monitor-mining-1.png","crypto-currency-bitcoin-monitor-mining.png","crypto-currency-bitcoin-monitor-shield.png","crypto-currency-bitcoin-monitor.png","crypto-currency-bitcoin-network.png","crypto-currency-bitcoin-shield.png","crypto-currency-bitcoin-smartphone.png","crypto-currency-bitcoin-stack-coins.png","crypto-currency-bitcoin-unlock.png","crypto-currency-bitcoin-wallet-open.png","crypto-currency-bitcoin-wallet.png","crypto-currency-bitcoin-world.png","crypto-currency-bitcoin.png","crypto-currency-dogecoin.png","crypto-currency-infinitecoin.png","crypto-currency-litecoin.png","crypto-currency-megacoin.png","crypto-currency-namecoin.png","crypto-currency-nxtcoin.png","crypto-currency-peercoin.png","crypto-currency-ripple.png"],
    lightIcons: [],
  },
};

export const Currencies: Story = {
  args: {
    subcategoryName: "Currencies",
    categoryPath: "money-payments-finance/currencies",
    regularIcons: ["currency-dollar-bill.png","currency-dollar-break.png","currency-dollar-bubble.png","currency-dollar-circle.png","currency-dollar-decrease.png","currency-dollar-diamond.png","currency-dollar-increase.png","currency-dollar-international.png","currency-dollar.png","currency-euro-bill.png","currency-euro-bubble.png","currency-euro-circle.png","currency-euro-decrease.png","currency-euro-dollar-exchange.png","currency-euro-increase.png","currency-euro-international.png","currency-euro.png","currency-pound-bill.png","currency-pound-bubble.png","currency-pound-circle.png","currency-pound-decrease.png","currency-pound-increase.png","currency-pound-international.png","currency-pound.png","currency-user-exchange.png","currency-yuan -international.png","currency-yuan-bill.png","currency-yuan-bubble.png","currency-yuan-circle.png","currency-yuan-decrease.png","currency-yuan-increase.png","currency-yuan.png"],
    lightIcons: [],
  },
};

export const FinanceSavings: Story = {
  args: {
    subcategoryName: "Finance Savings",
    categoryPath: "money-payments-finance/finance-savings",
    regularIcons: ["saving-bag-increase.png","saving-bank-1.png","saving-bank-cash.png","saving-bank-drawer.png","saving-bank-international.png","saving-bank.png","saving-bear.png","saving-bull-decrease.png","saving-bull-increase.png","saving-bull.png","saving-dog-guard-decrease.png","saving-dog-guard-increase.png","saving-money-egg.png","saving-money-flower.png","saving-money-seedling.png","saving-money-tree.png","saving-piggy-bank.png","saving-piggy-coins-alternate.png","saving-piggy-coins.png","saving-piggy-dollars.png","saving-safe-1.png","saving-safe-open.png","saving-safe.png","saving-wallet-international.png"],
    lightIcons: [],
  },
};

export const ModernPayments: Story = {
  args: {
    subcategoryName: "Modern Payments",
    categoryPath: "money-payments-finance/modern-payments",
    regularIcons: ["contactless-payment.png","credit-card-smartphone-exchange.png","self-payment-touch.png","self-payment.png","smartphone-pay-dollar-1.png","smartphone-pay-dollar-2.png","smartphone-pay-dollar.png","smartphone-payment-touch.png","wireless-payment-credit-card.png","wireless-payment-smartphone-1.png","wireless-payment-smartphone.png"],
    lightIcons: [],
  },
};

export const Money: Story = {
  args: {
    subcategoryName: "Money",
    categoryPath: "money-payments-finance/money",
    regularIcons: ["accounting-bill-stack-1.png","accounting-bill-stack.png","accounting-bill.png","accounting-bills-1.png","accounting-bills.png","accounting-coins-bill.png","accounting-coins-stack-1.png","accounting-coins-stack.png","accounting-withdraw-alternate.png","accounting-withdraw.png","coin-purse-1.png","coin-purse.png","money-atm.png","money-bag-dollar.png","money-bag-euro.png","money-bags.png","money-wallet-1.png","money-wallet-open.png","money-wallet.png"],
    lightIcons: [],
  },
};

export const Wealth: Story = {
  args: {
    subcategoryName: "Wealth",
    categoryPath: "money-payments-finance/wealth",
    regularIcons: ["diamond-give.png","diamond-hold.png","diamond-ring.png","diamond-shine.png","diamond.png","gold-bars.png","treasure-chest-open.png","treasure-chest.png"],
    lightIcons: [],
  },
};
