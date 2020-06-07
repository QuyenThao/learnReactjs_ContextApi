import React, { Component } from "react";
import "./styles.css";

const AppContext = React.createContext();

class App extends Component {
  constructor() {
    super();

    this.state = {
      number: 10
    };
  }
  render() {
    return (
      <div className="App">
        <AppContext.Provider value={this.state}>
          <Cart />
        </AppContext.Provider>
      </div>
    );
  }
}

const CartResult = () => {
  return (
    <div className="Cart Result">
      <h2>
        <AppContext.Consumer>{context => context.number}</AppContext.Consumer>
      </h2>
    </div>
  );
};

const CartItem = () => {
  return (
    <div className="Cart Item">
      <CartResult />
    </div>
  );
};

const Cart = () => {
  return (
    <div className="Cart">
      <CartItem />
    </div>
  );
};

export default App;
