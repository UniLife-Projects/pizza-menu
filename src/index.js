import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import ReactDOM from "react-dom"; // v.17

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  const x = "Jordy";

  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  const style = {};

  return (
    <header className="header">
      <h1 style={style}>
        {/* <p>Fast React Pizza Co.</p> */}
        Fast React Pizza Co.
      </h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2 className="main-menu">Our Menu</h2>

      {numPizzas > 0 ? (
        <React.Fragment key="AnythingYouWantForNow">
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>

          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} key1={pizza.name} />
            ))}
          </ul>
        </React.Fragment>
      ) : (
        <p style={{ fontWeight: "bold" }}>
          We're still working on our menu. Please come back later :)
        </p>
      )}
      {/* <Pizza
        name="Pizza Spinaci"
        ingredient="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        ingredient="Tomato, mushrooms, grass, and parmesan cheese"
        photoName="pizzas/funghi.jpg"
        name="Pizza Funghi"
        price={12}
      /> */}
    </main>
  );
}

function Pizza({ pizzaObj, key1 }) {
  // console.log(pizzaObj);
  // console.log(key1);

  // if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h2>{pizzaObj.name}</h2>
        <p>{pizzaObj.ingredients}</p>

        {/* METHOD #001 */}
        {/* {pizzaObj.soldOut ? (
          <span>SOLD OUT</span>
        ) : (
          <span>${pizzaObj.price + 3}</span>
        )} */}

        {/* METHOD #002 */}
        <span>{pizzaObj.soldOut ? "SOLD OUT" : `$${pizzaObj.price + 3}`}</span>
      </div>
    </li>
  );
}

function Footer() {
  // return React.createElement("footer", null, "We're currently open!");

  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // if (hour >= openHour && hour <= closeHour) alert("We're currently open!");
  // else alert("Sorry we're closed 😘");

  // if (!isOpen)
  //   return (
  //     <p>
  //       We're Open Until {closeHour}:00 Hours 🕺🏾 Come visit us or order online
  //       🌠
  //     </p>
  //   );

  return (
    <footer style={{ fontWeight: "bold" }} className="footer">
      {isOpen ? (
        <Order openHour={openHour} closeHour={closeHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 Hours and {closeHour}
          :00 Hours 🤡
        </p>
      )}
    </footer>
  );
}

function Order({ openHour, closeHour }) {
  return (
    <div className="order">
      <p>
        We're Open from {openHour}:00 to {closeHour}:00 Hours 🕺🏾 Come visit us
        or order online 🌠
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

// REact v.18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React before  v.18
// ReactDOM.render(<App />, document.getElementById("root"));
