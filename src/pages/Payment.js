import PropTypes from "prop-types";
import styles from "../style/Payment.module.css";
import { useNavigate } from "react-router-dom";

function Payment() {
  const navigate = useNavigate();
  const goToSplash = () => {
    window.history.back();
  };
  const goToBasket = () => {
    navigate("/basket");
  };
  return (
    <div className={styles.container}>
      <div className={styles.tabBar}>
        <button className={styles.goBackBtn} onClick={goToSplash}></button>
        결제하기
        <div className={styles.spacer}></div>
      </div>
      <div className={styles.contents}>
        <button className={styles.storeBtn} onClick={goToBasket}>
          결제
        </button>
      </div>
    </div>
  );
}
/*
Button.propTypes = {
  text: PropTypes.string.isRequired,
};
*/

export default Payment;
