import "./App.scss";

function App() {
  return (
    <div className="wrapper clear">
      {/* cart(карзина) */}
      <div className="overlay">
        <div className="drawer">
          <h3>Корзина</h3>
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
      </div>

      {/* header */}
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="../img/logo.png" />
          <div className="headerInfo">
            <h3 className="text-uppercase">React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>

        <ul className="d-flex">
          <li className="mr-30 ">
            <img width={18} height={18} src="../img/cart.svg" />
            <span>1205 руб</span>
          </li>
          <li>
            <img width={18} height={18} src="../img/user.svg" />
          </li>
        </ul>
      </header>
      {/* content */}
      <div className="content p-40  ">
        <div className="d-flex  mb-40 justify-between">
          <h1 className="all-sneakers">Все кроссовки</h1>
          {/* search */}
          <div className="search d-flex">
            <img src="/img/search.svg" alt="" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        {/* card */}
        <div className="d-flex justify-between">
          {/* 1 */}
          <div className="card">
            <div className="favorite">
              <img src="/heart-0.svg" alt="Unlike" />
            </div>
            <img
              width={133}
              height={112}
              src="./img/Sneakers/1.jpg"
              alt="sneakers"
            />
            <h5 className="mb-10">Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center ">
              <div className="d-flex flex-column ">
                <p>Цена:</p>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
          {/* 2  */}
          <div className="card">
            <div className="favorite">
              <img src="/heart-0.svg" alt="Unlike" />
            </div>
            <img
              width={133}
              height={112}
              src="./img/Sneakers/2.jpg"
              alt="sneakers"
            />
            <h5 className="mb-10">Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center ">
              <div className="d-flex flex-column ">
                <p>Цена:</p>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
          {/* 3 */}
          <div className="card">
            <div className="favorite">
              <img src="/heart-0.svg" alt="Unlike" />
            </div>
            <img
              width={133}
              height={112}
              src="./img/Sneakers/3.jpg"
              alt="sneakers"
            />
            <h5 className="mb-10">Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center ">
              <div className="d-flex flex-column ">
                <p>Цена:</p>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
          {/* 4  */}
          <div className="card">
            <div className="favorite">
              <img src="/heart-0.svg" alt="Unlike" />
            </div>
            <img
              width={133}
              height={112}
              src="./img/Sneakers/1.jpg"
              alt="sneakers"
            />
            <h5 className="mb-10">Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center ">
              <div className="d-flex flex-column ">
                <p>Цена:</p>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
