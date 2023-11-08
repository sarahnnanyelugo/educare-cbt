import React from "react";
import "./wallet.scss";
import Logo from "../../assets/images/logo.png";
import { Navbar } from "../../components/Navbar/Navbar";

export const Wallet = () => {
  return (
    <>
      <Navbar />
      <div className="col-md-10 offset-md-1 " style={{ marginTop: "60px" }}>
        <div className="flexy flexyM">
          <h6 style={{ flexGrow: "1" }}>Wallet</h6>
          <small>200 Naira = 200 units</small>
        </div>
        <div className="balance-sheet"></div>
      </div>
    </>
  );
};
