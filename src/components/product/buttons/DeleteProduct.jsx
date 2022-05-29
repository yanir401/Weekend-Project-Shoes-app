import React, { Component } from "react";
import ShoesContext from "../../../context/ShoesContext";

export default class DeleteProduct extends Component {
  handleDelete = () => {
    this.context.deleteProduct(this.props.id);
  };
  render() {
    return (
      <div>
        <button className="btn btn-dark" onClick={this.handleDelete}>
          Delete
        </button>
      </div>
    );
  }
}

DeleteProduct.contextType = ShoesContext;
