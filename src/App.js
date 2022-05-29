import React, { Component } from "react";
import HomePage from "./components/screens/HomePage";
import NavBar from "./components/headers/NavBar";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import getShoes from "./api/handlers/getShoes";
import ShoesContext from "./context/ShoesContext";
import "./style.css";
import "./adminPanel.css";
import "./style/utilities.css";
import "./style/media.css";
import ShoesDetails from "./components/screens/ShoesDetails";
import { createShoesArray } from "./services/createShoesArray";
import PuffLoader from "react-spinners/PuffLoader";
import CartScreen from "./components/screens/CartScreen";
import AdminPanel from "./components/screens/AdminPanel";
import deleteShoes from "./api/handlers/deleteShoes";
import AddNewShoes from "./components/screens/AddNewShoes";
import postNewShoes from "./api/handlers/postNewShoes";
import EditShoes from "./components/screens/EditShoes";
import putShoes from "./api/handlers/putShoes";

export default class App extends Component {
  state = { shoes: [], cart: [] };
  async componentDidMount() {
    const getShoesFromApi = await getShoes();

    if (getShoesFromApi.length === 0) {
      try {
        const response = await createShoesArray();
        this.buildShoesArray(response);
      } catch (error) {
        console.log(error);
      }
    } else this.setState({ shoes: getShoesFromApi });
  }

  buildShoesArray = (response) => {
    const newShoesArray = response.map((res) => {
      return res.value.data;
    });
    this.setState({ shoes: newShoesArray });
  };

  addToCart = (shoesToCart) => {
    const newCartArray = [...this.state.cart];
    newCartArray.push(shoesToCart);
    this.setState({ cart: newCartArray });
  };

  deleteProduct = async (id) => {
    const response = await deleteShoes(id);
    if (response) {
      let newShoesArray = [...this.state.shoes];
      newShoesArray = newShoesArray.filter((shoes) => shoes.id !== id);
      this.setState({ shoes: newShoesArray });
    }
  };
  addNewProduct = async (newShoes, callBack) => {
    try {
      await postNewShoes(newShoes);
      const getShoesFromApi = await getShoes();
      this.setState({ shoes: getShoesFromApi });
      callBack();
    } catch (error) {
      console.log(error);
    }
  };
  editProduct = async (updatedShoes, id, callBack) => {
    try {
      await putShoes(id, updatedShoes);
      const getShoesFromApi = await getShoes();
      this.setState({ shoes: getShoesFromApi });
      callBack();
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <div className="main-container">
        {this.state.shoes.length > 0 ? (
          <>
            <ShoesContext.Provider
              value={{
                shoes: this.state.shoes,
                shoesToEdit: null,
                addToCart: this.addToCart,
                deleteProduct: this.deleteProduct,
                addNewProduct: this.addNewProduct,
                editProduct: this.editProduct,
              }}
            >
              <BrowserRouter>
                <NavBar cart={this.state.cart} />
                <div className="container">
                  <Route exact path="/" component={HomePage} />
                  <Route path="/admin-panel" component={AdminPanel}></Route>
                  <Route path="/add-new-shoes" component={AddNewShoes}></Route>
                  <Route path="/edit-shoes/:id" component={EditShoes}></Route>
                  <Route
                    exact
                    path="/cart"
                    render={() => (
                      <CartScreen shoesInCart={this.state.cart} test="s" />
                    )}
                  ></Route>
                  <Route
                    exact
                    path="/shoes/:id"
                    component={ShoesDetails}
                  ></Route>
                </div>
              </BrowserRouter>
            </ShoesContext.Provider>
          </>
        ) : (
          <div className="loader">
            <PuffLoader color="#15133c" size={150} />
          </div>
        )}
      </div>
    );
  }
}
