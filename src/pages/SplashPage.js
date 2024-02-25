import PropTypes from "prop-types";
import styles from "../style/SplashPage.module.css";
import { useNavigate } from "react-router-dom";

function SplashPage({ text }) {
  const navigate = useNavigate();
  const goToOrder = () => {
    navigate("/order");
  };
  const goToCurrentOrder = () => {
    navigate("/currentOrder");
  };
  const goToRecentOrder = () => {
    navigate("/recentOrder");
  };
  return (
    <div className={styles.container}>
      <div>Logo</div>
      <div className={styles.orderContainer}>
        <button onClick={goToOrder}>주문하기</button>
        <button onClick={goToCurrentOrder}>현재 주문 내역</button>
        <button onClick={goToRecentOrder}>최근 주문 내역</button>
      </div>
    </div>
  );
}
/*
Button.propTypes = {
  text: PropTypes.string.isRequired,
};
*/

export default SplashPage;
