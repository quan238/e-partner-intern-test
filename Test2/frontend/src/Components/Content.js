import React, { Component } from "react";
import CustomerTable from "./CustomerTable";
import "./main.css";
export default class Content extends Component {
  render() {
    return (
      <div id="content">
        <CustomerTable></CustomerTable>
      </div>
    );
  }
}
