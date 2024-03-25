import "./App.scss";

function App() {
  return (
    <div className="wrapper clear">
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
          <div className="search d-flex">
            <img src="/img/search.svg" alt="" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        {/* card */}
        <div className="d-flex justify-between">
          <div className="card">
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
          <div className="card">
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
          <div className="card">
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
          <div className="card">
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
