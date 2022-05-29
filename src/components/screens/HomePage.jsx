import React, { Component } from "react";
import ShoesContext from "../../context/ShoesContext";
import ProductList from "../lists/ProductList";

class HomePage extends Component {
  render() {
    return (
      <div>
        <ProductList />
      </div>
    );
  }
}

HomePage.contextType = ShoesContext;
export default HomePage;
