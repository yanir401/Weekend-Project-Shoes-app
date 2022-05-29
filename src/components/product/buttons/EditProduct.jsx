import React, { Component } from "react";
import { Link } from "react-router-dom";
import ShoesContext from "../../../context/ShoesContext";

export default class EditProduct extends Component {
  handleOnClick = () => {
    this.context.shoesToEdit = this.props.shoes;
  };
  render() {
    return (
      <div>
        <Link to={`/edit-shoes/${this.props.id}`}>
          <button className="btn btn-green" onClick={this.handleOnClick}>
            Edit
          </button>
        </Link>
      </div>
    );
  }
}
EditProduct.contextType = ShoesContext;
