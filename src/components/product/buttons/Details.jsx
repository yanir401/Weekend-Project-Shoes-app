import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Details extends Component {
  render() {
    return (
      <div>
        <Link to={`/shoes/${this.props.id}`}>
          <button className="btn btn-dark">Details</button>
        </Link>
      </div>
    );
  }
}
