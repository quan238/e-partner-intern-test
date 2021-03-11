import React, { Component } from "react";
import "../Components/main.css";
export default class CustomerTable extends Component {
  render() {
    return (
      <div className="container " style={{ paddingTop: "100px" }}>
        <table class="table">
          <thead class="thead-dark">
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
              <td>@fat</td> <td>Mark</td> <td>Mark</td> <td>Mark</td>{" "}
              <td>Mark</td> <td>Mark</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td> <td>Mark</td> <td>Mark</td> <td>Mark</td>{" "}
              <td>Mark</td> <td>Mark</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
