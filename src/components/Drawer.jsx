const Drawer = (props) => {
  return (
    <div className="overlay">
      {/* items */}
      <div className="drawer">
        <h3 className="mb-20 d-flex justify-between">
          Корзина
          <img
            onClick={props.clickCardClose}
            className="remove-btn"
            src="/img/remove-btn.svg"
            alt="remove"
          />
        </h3>
        {/* items */}
        <div className="items">
          {props.cartItems.map((obj) => (
            <div className="cart-item d-flex align-center mb-10">
              <img
                className="mr-20"
                width={70}
                height={70}
                src={obj.img}
                alt="sneakers"
              />
              <div className="mr-30">
                <p className="mb-5">{obj.name}</p>
                <b>{obj.price} руб</b>
              </div>
              <img
                className="remove-btn"
                src="/img/remove-btn.svg"
                alt="remove"
              />
            </div>
          ))}
        </div>

        {/* Price */}
        <div className="cartTotalBlock">
          <ul>
            <li className="">
              <span>Итого:</span>
              <div></div>
              <b>24 000 руб.</b>
            </li>
            <li className="">
              <span>Налог 5 %:</span>
              <div></div>
              <b>1000 руб.</b>
              bla
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказы <img src="/img/arrow.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
