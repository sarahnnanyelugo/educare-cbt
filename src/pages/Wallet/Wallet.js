import React, { useEffect, useState } from "react";
import "./wallet.scss";
import { Navbar } from "../../components/Navbar/Navbar";
import { activityData, transactionsData } from "../../TestData/walletData";
import { Activity } from "./Activity";
import { TopUpModal } from "./TopUpModal/TestModal";

export const Wallet = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const [activeIndex2, setActiveIndex2] = useState(1);
  const handleClick = (index) => setActiveIndex2(index);

  const checkActive = (index, className) =>
    activeIndex2 === index ? className : "";
  const [state, setState] = useState({
    query: "",
    list: transactionsData,
    list2: activityData,
  });
  return (
    <>
      <Navbar />
      <div
        className="col-md-10 offset-md-1 wallet-page"
        style={{ marginTop: "60px" }}
      >
        <div className="flexy flexyM">
          <h6 style={{ flexGrow: "1" }}>Wallet</h6>
          <small>200 Naira = 200 units</small>
        </div>
        <div className="balance-sheet">
          <div className="flexy flexyM">
            <div style={{ flexGrow: 1 }}>
              <h6>Unit balance</h6>
              <h1>฿ 50,000</h1>
            </div>
            <div>
              {" "}
              <TopUpModal />
            </div>
          </div>
        </div>
        <div className="analysis-tab ">
          {" "}
          <div className="tabs ">
            <button
              className={`tab ${checkActive(1, "active2")}`}
              onClick={() => handleClick(1)}
            >
              Transactions
            </button>
            <button
              className={`tab ${checkActive(2, "active2")}`}
              onClick={() => handleClick(2)}
              style={{ marginLeft: "20px" }}
            >
              Activity
            </button>
          </div>
          <div className="panels">
            <div className={`panel ${checkActive(1, "active2")}`}>
              <div className="row ">
                {state.list.map((data, index) => (
                  <Activity data={data} />
                ))}
              </div>
            </div>
            <div className={`panel ${checkActive(2, "active2")}`}>
              {" "}
              <div className="row ">
                {state.list2.map((data, index) => (
                  <Activity data={data} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
