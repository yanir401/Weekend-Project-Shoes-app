import React, { Component } from "react";
import { GiBeachBag } from "react-icons/gi";
import { Link } from "react-router-dom";

export default class Cart extends Component {
  render() {
    return (
      <div className="icon">
        <Link to={"/cart"} className="cart">
          <GiBeachBag size={"2.35rem"} />
          <span>{this.props.cart.length}</span>
        </Link>
      </div>
    );
  }
}
