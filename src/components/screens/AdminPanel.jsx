import React, { Component } from "react";
// import ShoesContext from "../../context/ShoesContext";
import AdminProductsList from "../lists/AdminProductsList";
import { Link } from "react-router-dom";
export default class AdminPanel extends Component {
  render() {
    return (
      <div className="center">
        <Link to={"/add-new-shoes"}>
          <button className="btn btn-darkGrey">Add New Shoes</button>
        </Link>
        <div className="flex flex-row mt-2">
          <AdminProductsList />
          <div className="overlay"></div>
        </div>
      </div>
    );
  }
  s;
}

// AdminPanel.contextType = ShoesContext;
