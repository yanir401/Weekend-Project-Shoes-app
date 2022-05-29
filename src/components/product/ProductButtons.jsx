import React, { Component } from "react";
import AddToCart from "./buttons/AddToCart";
import Details from "./buttons/Details";

export default class ProductButtons extends Component {
  render() {
    return (
      <div className="flex flex-row">
        <AddToCart id={this.props.id} shoes={this.props.shoes} />
        <Details id={this.props.id} />
      </div>
    );
  }
}
