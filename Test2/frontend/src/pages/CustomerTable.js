import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import "../Components/main.css";
import Axios from "axios";
import Customer from "../Components/api";
import { connect } from "react-redux";

class CustomerTable extends Component {
  render() {
    return (
      <div className="container " style={{ paddingTop: "30px" }}>
        <table id="example" className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Company Name</th>
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
              <tr>
                <th >{item.customerID}</th>
                <td>{item.companyName}</td>
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
  componentDidMount() {
    // Customer().then((data) => {
    //   console.log(data);
    // }).catch((err)=>{
    //   console.log(err);
    // });
    Axios({
      method: "GET",
      mimeType: 'json',
      url: "https://localhost:5001/api/Customer",
    })
      .then((res) => {
        // console.log(res);
        this.props.dispatch({
          type: "FETCH_ALL",
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
const mapStateToProps = (state) => ({
  Customer: state.Customer.customers,
});

export default connect(mapStateToProps)(CustomerTable);
