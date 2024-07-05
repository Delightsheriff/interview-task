import React from "react";
import styles from "./TransactionCard.module.css";
import { FaCaretUp } from "react-icons/fa";

export interface CardProps {
  currency: string;
  balance: number;
  marketPrice: number;
  rates: number;
  balanceInDollars: number;
}
const currencyIcons: { [key: string]: string } = {
  Ethereum: "./ethereum-eth.svg",
  Bitcoin: "/assets/icons/bitcoin-icon.png",
  Litecoin: "/assets/icons/litecoin-icon.png",
};

const formatNumberWithCommas = (number: number) => {
  return new Intl.NumberFormat("en-US").format(number);
};

export const TransactionCard: React.FC<CardProps> = ({
  currency,
  balance,
  marketPrice,
  rates,
  balanceInDollars,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.top}>
          <div className={styles.image}>
            <img
              src={currencyIcons[currency]}
              alt={currency}
              className={styles.currencyIcon}
            />
          </div>
          <span className={styles.currency}>{currency}</span>
        </div>
        <span className={styles.balance}>{balance}</span>
      </div>
      <div className={styles.details}>
        <div className={styles.priceRate}>
          <span className={styles.marketPrice}>
            ${formatNumberWithCommas(marketPrice)}
          </span>
          <span className={styles.rates}>
            <FaCaretUp size={12} />
            {rates}
          </span>
        </div>
        <div className={styles.balanceInDollars}>
          <span>${formatNumberWithCommas(balanceInDollars)}</span>
        </div>
      </div>
    </div>
  );
};
