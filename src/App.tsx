import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Transaction from "./Transaction";
import Send from "./Send";
import Wallet from "./Wallet";
import User from "./User";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Navigate replace to="assets" />} />
          <Route path="assets" element={<Transaction />} />
          <Route path="history" element={<p>history</p>} />
          <Route path="nfts" element={<p>nfts</p>} />
        </Route>
        <Route path="send" element={<Send />}>
          <Route index element={<Navigate replace to="wallet" />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="user" element={<User />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
