import React, { Component } from "react";

export default class navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark justify-content-between">
          <a className="navbar-brand" style={{ color: "white" }}>
            Customers
          </a>
        </nav>
      </div>
    );
  }
}
