import style from "../styles/Card.module.css";

const Card = ({ cardData })  => {
  return (
    <div className={style.card}>
      <div className={style.cardBack}>
        <h3 className={style.cardCvc}>{cardData?.cvc || "000"}</h3>
      </div>
      <div className={style.cardFront}>
        <img className={style.cardLogo} src={cardLogo} alt="Card logo" />
        <h2 className={style.cardNumber}>
          {cardData?.number || "0000 0000 0000 0000"}
        </h2>
        <div className={style.cardBottomRow}>
          <h3 className={style.cardholderName}>
            {cardData?.cardholderName.toUpperCase() || "JANE APPLESEED"}
          </h3>
          <h3 className={style.cardExpiryDate}>
            {cardData?.expMonth || "00"}/{cardData?.expYear || "00"}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Card;