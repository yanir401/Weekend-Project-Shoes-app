import React, { Component } from "react";
import ShoesContext from "../../context/ShoesContext";
import ProductAdminPanel from "../product/ProductAdminPanel";

export default class AdminProductsList extends Component {
  render() {
    return (
      <div className="admin-panel-container">
        <div className="flex flex-row flex-justify-space-bt product-admin-panel">
          <h2>Product</h2>
          <h2>Price</h2>
          <h2>Image</h2>
          <h2>Actions</h2>
        </div>
        {this.context.shoes.map((shoes) => {
          return <ProductAdminPanel shoes={shoes} key={shoes.id} />;
        })}
      </div>
    );
  }
}
AdminProductsList.contextType = ShoesContext;
