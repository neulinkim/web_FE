import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "../style/Acceptance.module.css";
import { useNavigate } from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";

function Payment() {
  const [menuCounts, setMenuCounts] = useState({
    handmadeCutlet: 1,
    longNamedMenu: 1,
  });
  const [menuCosts, setMenuCosts] = useState({
    handmadeCutlet: 12000,
    longNamedMenu: 9000,
  });

  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };

  const goToBack = () => {
    window.history.back();
  };

  return (
    <div className={styles.container}>
      <div className={styles.tabBar}>
        <div className={styles.spacer}></div>
        접수창
        <button className={styles.goBackBtn} onClick={goToHome}></button>
      </div>

      <div className={styles.contents}>
        <div className={styles.menuView}>
          <div className={styles.eachMenu}>
            <span>수제왕돈까스</span>
            <div className={styles.amount}>
              <div className="count">{menuCounts.handmadeCutlet} 개</div>
              <div className="cost">{menuCosts.handmadeCutlet} 원</div>
            </div>
          </div>
          <div className={styles.eachMenu}>
            <span>이름이엄청긴메뉴임을 가정한</span>
            <div className={styles.amount}>
              <div className="count">{menuCounts.longNamedMenu} 개</div>
              <div className="cost">{menuCosts.longNamedMenu} 원</div>
            </div>
          </div>
        </div>
        <div
          className={styles.acceptView}
          style={{ backgroundColor: "darkorange" }}
        >
          <div className={styles.acceptNum}>
            <span>주문번호</span>
            <span style={{ fontSize: "xxx-large" }}>
              <b>7번</b>
            </span>
          </div>
          <ProgressBar className={styles.progressBar} variant="info" now={30} />
          <div>접수 중</div>
        </div>
      </div>
    </div>
  );
}

Payment.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Payment;
