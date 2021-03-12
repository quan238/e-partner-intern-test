import Axios from "axios";

class CustomerService {
  fetchAll() {
    return Axios({
      method: "GET",
      mimeType: "json",
      url: "https://localhost:5001/api/Customer",
    });
  }
  getData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
  };
}

export default CustomerService;
