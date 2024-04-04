const Drawer = () => {
  return (
    <div style={{ display: "none" }} className="overlay">
      {/* items */}
      <div className="drawer">
        <h3 className="mb-20 d-flex justify-between">
          Корзина
          <img className="remove-btn" src="/img/remove-btn.svg" alt="remove" />
        </h3>
        {/* items */}
        <div className="items">
          <div className="cart-item d-flex align-center mb-10">
            <img
              className="mr-20"
              width={70}
              height={70}
              src="/img/Sneakers/1.jpg"
              alt="sneakers"
            />
            <div className="mr-30">
              <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
              <b>12 999 руб.</b>
            </div>
            <img
              className="remove-btn"
              src="/img/remove-btn.svg"
              alt="remove"
            />
          </div>
          {/* 2 */}
          <div className="cart-item d-flex align-center mb-10">
            <img
              className="mr-20"
              width={70}
              height={70}
              src="/img/Sneakers/1.jpg"
              alt="sneakers"
            />
            <div className="mr-30">
              <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
              <b>12 999 руб.</b>
            </div>
            <img
              className="remove-btn"
              src="/img/remove-btn.svg"
              alt="remove"
            />
          </div>
          {/* 3 */}
          <div className="cart-item d-flex align-center">
            <img
              className="mr-20"
              width={70}
              height={70}
              src="/img/Sneakers/1.jpg"
              alt="sneakers"
            />
            <div className="mr-30">
              <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
              <b>12 999 руб.</b>
            </div>
            <img
              className="remove-btn"
              src="/img/remove-btn.svg"
              alt="remove"
            />
          </div>
        </div>
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
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказ <img src="/img/arrow.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
