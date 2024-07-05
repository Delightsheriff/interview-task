import { IoReturnUpBackOutline } from "react-icons/io5";
import styles from "./Send.module.css";
import { NavLink, Outlet } from "react-router-dom";
import { useMoveBack } from "./hooks/useMoveBack.ts";

export default function Send() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <section className={styles.inner}>
          <div className={styles.top}>
            <button className={styles.back} onClick={useMoveBack()}>
              {" "}
              <IoReturnUpBackOutline size={16} />
              Back
            </button>

            <p className={styles.title}>Send Asset</p>
            <div className={styles.image}>
              <img src={"/ethereum-eth.svg"} className={styles.currencyIcon} />
            </div>
          </div>
          <div className={styles.middle}>
            <p>Send Ethereum</p>
            <nav className={styles.nav}>
              <ul>
                <li>
                  <NavLink
                    to="wallet"
                    style={({ isActive }) =>
                      isActive
                        ? {
                            backgroundColor: "#e9baf9",
                          }
                        : {
                            color: "",
                          }
                    }
                  >
                    Wallet Address
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="user"
                    style={({ isActive }) =>
                      isActive
                        ? {
                            backgroundColor: "#e9baf9 ",
                          }
                        : {
                            color: "",
                          }
                    }
                  >
                    User Name
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className={styles.table}>
            <Outlet />
          </div>
        </section>
      </section>
      <p className={styles.footer}>close</p>
    </main>
  );
}
