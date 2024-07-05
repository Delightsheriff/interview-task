import styles from "./components/User.module.css";

function User() {
  return (
    <section className={styles.main}>
      <form className={styles.form}>
        <div className={styles.inputBox}>
          <label htmlFor="username">Enter your username</label>
          <input
            type="text"
            id="username"
            name="  username"
            placeholder="Enter your username"
          />
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

export default User;
