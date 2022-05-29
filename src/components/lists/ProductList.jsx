import React, { Component } from "react";
import Product from "../product/Product";
import ShoesContext from "../../context/ShoesContext";
export default class ProductList extends Component {
  render() {
    return (
      <div className="shoes-list">
        {this.context.shoes.map((shoes) => {
          return <Product key={shoes.id} shoes={shoes} />;
        })}
      </div>
    );
  }
}
ProductList.contextType = ShoesContext;
