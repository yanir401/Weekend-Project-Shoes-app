import React, { Component } from "react";
import ShoesContext from "../../../context/ShoesContext";
export default class AddToCart extends Component {
  state = { btnText: "Add To Cart", btnClassName: "btn-light" };
  handleOnClick = () => {
    this.context.addToCart(this.props.shoes);
    this.setAddedToCart();
  };

  setAddedToCart = () => {
    this.setState({ btnText: "Added To Cart", btnClassName: "btn-green" });

    setTimeout(() => {
      this.setState({ btnText: "Add To Cart", btnClassName: "btn-light" });
    }, 1500);
  };

  render() {
    return (
      <div>
        <button
          className={`btn ${this.state.btnClassName}`}
          onClick={this.handleOnClick}
        >
          {this.state.btnText}
        </button>
      </div>
    );
  }
}
AddToCart.contextType = ShoesContext;
