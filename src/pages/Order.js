import PropTypes from "prop-types";
import styles from "../style/Order.module.css";
import { useNavigate } from "react-router-dom";

function Order() {
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
        주문하기
        <div className={styles.spacer}></div>
      </div>
      <div className={styles.contents}>
        {/* ↓ 화면에 메세지 띄우기. 어떤 메세지를 가지고 올지 연동 필요  */}
        <div className={styles.message}>원하는 메뉴명을 말씀해주세요</div>

        {/* ↓ 버튼 누르면 음성인식 시작. 연동 필요  */}
        <button className={styles.micBtn}></button>

        <button className={styles.storeBtn} onClick={goToBasket}>
          장바구니
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

export default Order;
