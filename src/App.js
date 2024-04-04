import "./App.scss";
import Card from "./components/Card";
import Header from "./components/header";
import Drawer from "./components/Drawer";

function App() {
  return (
    <div className="wrapper clear">
      {/* cart(кoрзина) */}
      <Drawer />

      {/* header */}
      <Header />
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
          <Card />
          {/* 2  */}
          <Card />
          {/* 3 */}
          <Card />
          {/* 4  */}
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
