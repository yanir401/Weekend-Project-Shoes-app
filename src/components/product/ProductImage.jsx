import React, { Component } from "react";

export default class ProductImage extends Component {
  render() {
    return (
      <>
        <img
          src={this.props.img}
          alt={this.props.alt}
          className="product-image"
        />
      </>
    );
  }
}
