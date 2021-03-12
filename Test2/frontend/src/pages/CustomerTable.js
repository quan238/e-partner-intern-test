import React, { Component, useState, useEffect } from "react";
import "../Components/main.css";
import { connect } from "react-redux";
import { FETCH_ALL, SORT_UP } from "../redux/Actions/type";
import {
  fetchAllFunc,
  sortIdDown,
  sortIdUp,
  sortNameDown,
  sortNameUp,
} from "../redux/Actions/User";
import $ from "jquery";

// import { DataTable } from "//cdn.datatables.net/1.10.24/js/jquery.dataTables.min.js";
class CustomerTable extends Component {
  componentDidMount() {
    // Customer().then((data) => {
    //   console.log(data);
    // }).catch((err)=>{
    //   console.log(err);
    // });

    this.props.dispatch(fetchAllFunc());
  }
  render() {
    return (
      <div className=" " style={{ paddingTop: "15px" }}>
        <table id="example" className="table">
          <thead>
            <tr>
              <th scope="col">
                <div className="title">#</div>
                <div className="sort">
                  <i
                    onClick={(e) => {
                      e.preventDefault();
                      this.props.dispatch(sortIdUp());
                      document.getElementById("down").style.opacity = "0.5";
                      document.getElementById("up").style.opacity = "1";
                    }}
                    id="up"
                    class="fa fa-arrow-up"
                    aria-hidden="true"
                  ></i>
                  <i
                    id="down"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById("up").style.opacity = "0.5";
                      document.getElementById("down").style.opacity = "1";
                      this.props.dispatch(sortIdDown());
                    }}
                    class="fa fa-arrow-down"
                    aria-hidden="true"
                  ></i>
                  {/* <i
                    onClick={() => {
                     
                    }}
                    class="fa fa-arrow-up"
                    aria-hidden="true"
                  ></i> */}
                  {/* <i class="fa fa-arrow-down" aria-hidden="true"></i> */}
                </div>
              </th>
              <th scope="col">
                Company Name
                <i
                  onClick={(e) => {
                    e.preventDefault();
                    this.props.dispatch(sortNameUp());
                    document.getElementById("down_name").style.opacity = "0.5";
                    document.getElementById("up_name").style.opacity = "1";
                  }}
                  id="up_name"
                  class="fa fa-arrow-up"
                  aria-hidden="true"
                ></i>
                <i
                  id="down_name"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("up_name").style.opacity = "0.5";
                    document.getElementById("down_name").style.opacity = "1";
                    this.props.dispatch(sortNameDown());
                  }}
                  class="fa fa-arrow-down"
                  aria-hidden="true"
                ></i>
              </th>
              <th scope="col">Contact Name</th>
              <th scope="col">Contact Title</th>
              <th scope="col">Adress</th>
              <th scope="col">City</th>
              <th scope="col">Country</th>
              <th scope="col">Phone</th>
            </tr>
          </thead>
          <tbody>
            {this.props.Customer.map((item, index) => (
              <tr id={item.customerID} key={index}>
                <th>
                  <div className="avatar avatar-blue mr-3">
                    {item.customerID}
                  </div>
                </th>
                <td>
                  <span style={{ fontWeight: "bold" }}>{item.companyName}</span>
                </td>
                <td>{item.contactName}</td>
                <td>{item.contactTitle}</td>
                <td>{item.address}</td>
                <td>{item.city}</td>
                <td>{item.country}</td>
                <td>{item.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  Customer: state.Customer.customers,
});

export default connect(mapStateToProps)(CustomerTable);
