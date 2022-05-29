import React, { Component } from "react";
import { Link } from "react-router-dom";
import Cart from "../screens/Cart";

export default class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar-content">
          <div>
            <Link to={"/"}>Home Page</Link>
            <Link className="mg-2" to={"/admin-panel"}>
              Admin Panel
            </Link>
          </div>
          <Cart cart={this.props.cart} />
        </div>
      </div>
    );
  }
}
