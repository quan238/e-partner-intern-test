import React, { Component } from "react";
import "../Components/main.css";
import Axios from "axios";
export default class CustomerTable extends Component {
  render() {
    return (
      <div className="container " style={{ paddingTop: "100px" }}>
        <table className="table">
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
              <th scope="col">Fax</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Mark</td>
              <td>Mark</td>
              <td>Mark</td>
              <td>Mark</td>
              <td>Mark</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>Mark</td>
              <td>Mark</td>
              <td>Mark</td>
              <td>Mark</td>
              <td>Mark</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <td>Mark</td>
              <td>Mark</td>
              <td>Mark</td>
              <td>Mark</td>
              <td>Mark</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  componentDidMount() {
    Axios({
      method: "GET",
      url: "https://localhost:5001/api/customer",
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
