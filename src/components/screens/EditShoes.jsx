import React, { Component } from "react";
import ShoesContext from "../../context/ShoesContext";

export default class EditShoes extends Component {
  state = { title: "", price: "", image: "", shoesToEdit: null };

  componentDidMount() {
    const shoesToEdit = this.context.shoes.find(({ id }) => {
      return id === this.props.match.params.id;
    });
    this.setState({
      shoesToEdit,
      title: shoesToEdit.title,
      price: shoesToEdit.price,
      image: shoesToEdit.image,
    });
  }
  handleOnChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
    console.log(this.state);
  };

  addedSuccessfully = () => {
    this.setState({ title: "", price: "", image: "", edit: true });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const newShoes = {
      title: this.state.title,
      price: this.state.price,
      image: this.state.image,
    };
    this.context.editProduct(
      newShoes,
      this.state.shoesToEdit.id,
      this.addedSuccessfully
    );
  };
  goBack = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <div className="mt-4 flex flex-col">
        {this.state.shoesToEdit && (
          <form className="flex flex-col" onSubmit={this.handleSubmit}>
            <div>
              <input
                type="text"
                name="title"
                defaultValue={this.state.shoesToEdit.title}
                placeholder="Shoes Title"
                onChange={this.handleOnChange}
                // value={this.state.title}
              />
            </div>
            <div>
              <input
                type="text"
                name="price"
                placeholder="Price"
                defaultValue={this.state.shoesToEdit.price}
                onChange={this.handleOnChange}
                // value={this.state.price}
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
            {this.state.image && (
              <img
                className="edit-image-shoes"
                src={this.state.image}
                alt={this.state.shoesToEdit.title}
              />
            )}
            <div>
              <input
                className="btn btn-light"
                type="submit"
                value="Edit Shoes"
                onChange={this.handleOnChange}
              />
            </div>
          </form>
        )}

        {this.state.edit && <p>Edit Successfully</p>}
        <button className="btn btn-darkGrey" onClick={this.goBack}>
          Cancel
        </button>
      </div>
    );
  }
}
EditShoes.contextType = ShoesContext;
