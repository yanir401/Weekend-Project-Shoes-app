import React, { Component } from "react";
import ShoesContext from "../../context/ShoesContext";

export default class AddNewShoes extends Component {
  state = { title: "", price: "", image: "", added: false };

  handleOnChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  addedSuccessfully = () => {
    this.setState({ title: "", price: "", image: "", added: true });
  };
  handleSubmit = (event) => {
    event.preventDefault();

    this.context.addNewProduct(this.state, this.addedSuccessfully);
  };
  goBack = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <div className="mt-4 flex flex-col">
        <form className="flex flex-col" onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              name="title"
              placeholder="Shoes Title"
              onChange={this.handleOnChange}
              value={this.state.title}
            />
          </div>
          <div>
            <input
              type="text"
              name="price"
              placeholder="Price"
              onChange={this.handleOnChange}
              value={this.state.price}
            />
          </div>
          <div>
            <input
              type="text"
              name="image"
              placeholder="Image Url"
              onChange={this.handleOnChange}
              value={this.state.image}
            />
          </div>
          <div>
            <input
              className="btn btn-light"
              type="submit"
              value="Add Shoes"
              onChange={this.handleOnChange}
            />
          </div>
        </form>
        {this.state.added && <p>Added Successfully</p>}
        <button className="btn btn-darkGrey" onClick={this.goBack}>
          Cancel
        </button>
      </div>
    );
  }
}
AddNewShoes.contextType = ShoesContext;
