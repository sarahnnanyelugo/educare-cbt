import React from "react";
import "./wallet.scss";
import Logo from "../../assets/images/logo.png";

export const Wallet = () => {
  return (
    <>
      <div className="wallet-div">
        <div className="sample">
          {" "}
          <img className="   logo" src={Logo} alt="Scholar" width="20%" />
        </div>
      </div>
    </>
  );
};
