import styles from "./components/Wallet.module.css";

export default function Wallet() {
  return (
    <section className={styles.main}>
      <form className={styles.form}>
        <div className={styles.inputBox}>
          <label htmlFor="address">Ethereum Address</label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Paste wallet address"
          />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="network">Choose Network</label>
          <select id="network" name="network">
            <option value="" disabled selected>
              Select
            </option>
            <option value="ethereum">Ethereum</option>
            <option value="binance">Binance</option>
          </select>
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="amount">Amount</label>
          <div className={styles.container}>
            <div className={styles.icon}>
              <div className={styles.image}>
                <img
                  src={"/ethereum-eth.svg"}
                  className={styles.currencyIcon}
                />
              </div>
            </div>
            <input
              type="number"
              id="amount"
              name="amount"
              className={styles.input}
            />
            <div className={styles.amount}>Max</div>
          </div>
        </div>
        <p className={styles.balance}>Balance 0.00 ETH</p>

        <div className={styles.discount}>
          <p>25%</p>
          <p>50%</p>
          <p>75%</p>
          <p>100%</p>
        </div>

        <div className={styles.fees}>
          <p>
            Fee: <span>000000</span>
          </p>
          <p>
            Total: <span>0.00000</span>
          </p>
        </div>

        <button className={styles.button}>Send ETH</button>
      </form>
    </section>
  );
}
