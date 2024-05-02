import React from "react";
import s from "./Card.module.scss";
const Card = ({ name, price, img, onPLuse }) => {
  const [isAdded, setIsAdded] = React.useState(false);
  const onClickPlus = () => {
    onPLuse({ name, price, img });
    setIsAdded(!isAdded); // при клике щначение которая там есть инвертируется если фолз становится тру и наоборот
  };

  const [like, favoriteLike] = React.useState(false);
  const likeClick = () => {
    favoriteLike(!like);
  };

  return (
    <div className={s.card}>
      <div className={s.favorite}>
        <img
          onClick={likeClick}
          src={like ? "/heart-1.svg" : "/heart-0.svg"}
          alt="Unlike"
        />
      </div>
      <img width={133} height={112} src={img} alt="sneakers" />
      <h5 className="mb-10">{name}</h5>
      <div className="d-flex justify-between align-center ">
        <div className="d-flex flex-column ">
          <p>Цена:</p>
          <b>{price} руб</b>
        </div>
        <img
          onClick={onClickPlus}
          className={s.plus}
          src={isAdded ? "/galochka.svg" : "/img/plus.svg"} // is Added === true / :(else)
          alt="Plus"
          width={isAdded ? "20" : undefined} // установил размеры первой фотографии
          height={isAdded ? "20" : undefined}
        />
      </div>
    </div>
  );
};

export default Card;
