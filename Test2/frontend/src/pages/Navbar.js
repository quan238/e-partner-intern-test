import React, { Component } from "react";
import { connect } from "react-redux";
import { SEARCH } from "../redux/Actions/type";
class navbar extends Component {
  onChange = (e) => {
    this.props.searchCustomers(e.target.value);
  };
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark justify-content-between">
          <a className="navbar-brand" style={{ color: "white" }}>
            Customers
          </a>
          <form className="form-inline">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              id="search"
              onChange={this.onChange}
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              onClick={(e) => {
                e.preventDefault();
                this.props.searchCustomers(
                  document.getElementById("search").value
                );
              }}
            >
              Search
            </button>
          </form>
        </nav>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    searchCustomers: (value) => {
      dispatch({
        type: SEARCH,
        value,
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(navbar);
