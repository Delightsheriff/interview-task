import { FaCaretDown } from "react-icons/fa";
import styles from "./Dashboard.module.css";
import { TbScan } from "react-icons/tb";
import { IoNotificationsOutline } from "react-icons/io5";
import { CiSaveDown1, CiSaveUp1 } from "react-icons/ci";
import { GrView } from "react-icons/gr";
import { Link, NavLink, Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <section className={styles.inner}>
          <div className={styles.top}>
            <div className={styles.walletName}>
              <p>wallet name 1</p>
              <FaCaretDown size={10} />
            </div>
            <div className={styles.noti}>
              <span>
                <TbScan />
              </span>
              <span>
                <IoNotificationsOutline />
              </span>
            </div>
          </div>
          <div className={styles.middle}>
            <p className={styles.title}>Total Balance</p>
            <div className={styles.balanceBox}>
              <p>$24,498.10</p>
              <div className={styles.options}>
                <Link to="send">
                  <CiSaveUp1 />
                </Link>
                <Link to="#">
                  <CiSaveDown1 />
                </Link>
              </div>
            </div>
            <div className={styles.hide}>
              <p>Hide Balance</p>
              <span>
                <GrView />
              </span>
            </div>
          </div>

          <div className={styles.bottom}>
            <nav className={styles.nav}>
              <ul>
                <li>
                  <NavLink
                    to="assets"
                    style={({ isActive }) =>
                      isActive
                        ? {
                            color: "#be2bef ",
                            borderBottom: "5px solid #be2bef ",
                          }
                        : {
                            color: "",
                            borderBottom: "transparent",
                          }
                    }
                  >
                    Assets
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="history"
                    style={({ isActive }) =>
                      isActive
                        ? {
                            color: "#be2bef ",
                            borderBottom: "5px solid #be2bef ",
                          }
                        : {
                            color: "",
                            borderBottom: "transparent",
                          }
                    }
                  >
                    History
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="nfts"
                    style={({ isActive }) =>
                      isActive
                        ? {
                            color: "#be2bef ",
                            borderBottom: "5px solid #be2bef ",
                          }
                        : {
                            color: "",
                            borderBottom: "transparent",
                          }
                    }
                  >
                    NFts
                  </NavLink>
                </li>
              </ul>
            </nav>
            <section className={styles.table}>
              <Outlet />
            </section>
          </div>
        </section>
      </section>
      <p className={styles.footer}>close</p>
    </main>
  );
}
