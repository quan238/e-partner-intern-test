import logo from "./logo.svg";
import "./App.css";
// import navbar from './Components/Navbar';
import Navbar from "./Components/Navbar";
import CustomersTable from "./Components/CustomerTable";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="container" >
        <div className="table mt-5">
      <CustomersTable></CustomersTable>
      </div>
      </div>
    </div>
  );
}

export default App;
