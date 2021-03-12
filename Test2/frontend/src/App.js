import logo from "./logo.svg";
import "./App.css";
// import navbar from './Components/Navbar';
import Navbar from "./pages/Navbar";
import CustomersTable from "./pages/CustomerTable";
import Content from "./pages/Content";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Content></Content>
    </div>
  );
}

export default App;
