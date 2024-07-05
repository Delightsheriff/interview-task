import { CardProps, TransactionCard } from "./components/TransactionCard";

const data: CardProps[] = [
  {
    currency: "Ethereum",
    balance: 0.34567,
    marketPrice: 5678,
    rates: 0.23,
    balanceInDollars: 196,
  },
  {
    currency: "Ethereum",
    balance: 1.23456,
    marketPrice: 5678,
    rates: 0.25,
    balanceInDollars: 700,
  },
  {
    currency: "Ethereum",
    balance: 0.98765,
    marketPrice: 5678,
    rates: 0.22,
    balanceInDollars: 560,
  },
  {
    currency: "Ethereum",
    balance: 0.54321,
    marketPrice: 5678,
    rates: 0.24,
    balanceInDollars: 308,
  },
  {
    currency: "Ethereum",
    balance: 2.34567,
    marketPrice: 5678,
    rates: 0.26,
    balanceInDollars: 1331,
  },
];

export default function Transaction() {
  return (
    <>
      {data.map((item, index) => (
        <TransactionCard key={index} {...item} />
      ))}
    </>
  );
}
