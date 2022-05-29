import React, { Component } from "react";

export default class ProductContent extends Component {
  render() {
    return (
      <div>
        <p className="shoes-title">{this.props.title.toUpperCase()}</p>
        <p className="price">Price: {this.props.price}$</p>
      </div>
    );
  }
}
