import React, { Component } from "react";
import { Link } from "react-router-dom";
import ShoesContext from "../../context/ShoesContext";
import AddToCart from "../product/buttons/AddToCart";

export default class ShoesDetails extends Component {
  state = { selectedShoes: null };

  componentDidMount() {
    const selectedShoes = this.context.shoes.find((shoes) => {
      return shoes.id === this.props.match.params.id;
    });
    this.setState({ selectedShoes });
  }
  render() {
    return (
      <>
        {this.state.selectedShoes && (
          <div className="flex flex-col mt-3">
            <p className="shoes-details-title">
              {this.state.selectedShoes.title}
            </p>
            <img
              src={this.state.selectedShoes.image}
              alt={this.state.selectedShoes.title}
            />

            <AddToCart shoes={this.state.selectedShoes} />
            <Link to={"/"} className="btn btn-lightGrey">
              Back
            </Link>
          </div>
        )}
      </>
    );
  }
}
ShoesDetails.contextType = ShoesContext;
