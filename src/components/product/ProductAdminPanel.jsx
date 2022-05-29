import React, { Component } from "react";
import EditProduct from "./buttons/EditProduct";
import DeleteProduct from "./buttons/DeleteProduct";
export default class ProductAdminPanel extends Component {
  render() {
    const { title, price, image, id } = this.props.shoes;
    return (
      <div className="product-admin-panel flex flex-row flex-justify-space-bt">
        <p className="product-title">{title}</p>
        <p className="product-title align-self-start">{price}</p>
        <div className="align-self-center">
          <img src={image} alt={title} />
        </div>
        <div className="flex align-self-start with700">
          <EditProduct id={id} shoes={this.props.shoes} />
          <DeleteProduct id={id} />
        </div>
      </div>
    );
  }
}
// alt_description
