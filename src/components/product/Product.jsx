import React, { Component } from "react";
import ProductContent from "../product/ProductContent";
import ProductImage from "../product/ProductImage";
import ProductButtons from "../product/ProductButtons";

export default class Product extends Component {
  render() {
    const { title, price, id, image } = this.props.shoes;

    return (
      <div className="card">
        <ProductContent title={title} price={price} />
        <ProductImage img={image} alt={title} />
        <ProductButtons id={id} shoes={this.props.shoes} />
      </div>
    );
  }
}
