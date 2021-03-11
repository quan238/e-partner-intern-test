import Axios from "axios";

class CustomerService {
  fetchAll() {
    return Axios({
      method: "GET",
      mimeType: "json",
      url: "https://localhost:5001/api/Customer",
    });
  }
}

export default CustomerService;
