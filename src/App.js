import "./App.scss";
import Card from "./components/Card/Card";
import Header from "./components/header";
import Drawer from "./components/Drawer";
import Content from "./components/Content";
import React from "react";

function App() {
  //open drawer
  const [cartOpened, setCartOpened] = React.useState(false); // open and close drawer
  const [cartItems, setCartItem] = React.useState([]); // add sneakers in drawe
  const [searchValue, setSearchValue] = React.useState(""); // search sneackers

  const [items, setItems] = React.useState([]); // API
  React.useEffect(() => {
    fetch("https://661934b29a41b1b3dfbf3896.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []); // [] чтобы вызываля один раз

  const onAddCart = (obj) => {
    setCartItem([...cartItems, obj]); //added new items in drawer
  };

  return (
    <div className="wrapper clear">
      {/* cart(кoрзина) */}
      {cartOpened ? ( //if cartOpened === true show Drawe else null(nothing)
        <Drawer
          cartItems={cartItems}
          clickCardClose={() => setCartOpened(false)}
        />
      ) : null}
      {/* header */}
      <Header clickCard={() => setCartOpened(true)} />
      {/* content */}
      <div className="content p-40  ">
        <Content searchValue={searchValue} setSearchValue={setSearchValue} />
        {/* card */}
        <div className="d-flex justify-between flex-wrap">
          {items
            .filter((item) => item.name.toLowerCase().includes(searchValue)) //search filter (tlwcase для поиска)
            .map((obj, index) => (
              <Card
                key={index} // for key error
                name={obj.name}
                price={obj.price}
                img={obj.imgUrl}
                onPLuse={(obj) => onAddCart(obj)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
export default App;
