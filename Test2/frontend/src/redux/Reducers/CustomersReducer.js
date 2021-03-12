const _ = require("lodash"); // Lodash.

let stateDefault = {
  customers: [],
};
const getData = () => {
  const data = fetch("../../data/customers.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  console.log(data);
};
getData();
const Customers = (state = stateDefault, action) => {
  switch (action.type) {
    case "FETCH_ALL": {
      state.customers = action.payload;
      let newarr = [...state.customers];

      newarr.sort(function (a, b) {
        return a.customerID - b.customerID;
      });
      // console.log(newarr);

      state.customers = newarr;
      // stateDefault.customers = state.customers;
      return { ...state };
    }
    case "SORT_UP":
      {
        let newarr = [...state.customers];

        newarr.sort(function (a, b) {
          return a.customerID - b.customerID;
        });
        // console.log(newarr);

        state.customers = newarr;
        return { ...state };
      }
      break;
    case "SORT_DOWN": {
      let newarr = [...state.customers];

      newarr.sort(function (a, b) {
        return b.customerID - a.customerID;
      });
      // console.log(newarr);

      state.customers = newarr;
      return { ...state };
    }
    case "SORT_UP_NAME":
      {
        let newarr = [...state.customers];

        newarr.sort(function (a, b) {
          var nameA = a.companyName.toUpperCase(); // bỏ qua hoa thường
          var nameB = b.companyName.toUpperCase(); // bỏ qua hoa thường
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }

          // name trùng nhau
          return 0;
        });
        // console.log(newarr);

        state.customers = newarr;
        return { ...state };
      }
      break;
    case "SORT_DOWN_NAME": {
      let newarr = [...state.customers];

      newarr.sort(function (a, b) {
        var nameA = a.companyName.toUpperCase(); // bỏ qua hoa thường
        var nameB = b.companyName.toUpperCase(); // bỏ qua hoa thường
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }

        // name trùng nhau
        return 0;
      });
      // console.log(newarr);

      state.customers = newarr;
      return { ...state };
    }
    case "SEARCH": {
      // let newarr = state.customers.filter((value) => {
      //   return (
      //     value.companyName
      //       .toLowerCase()
      //       .indexOf(action.value.toLowerCase()) !== -1
      //   );
      // });
      const temparr = [...state.customers];
      const { value } = action;
      const filtered = _.filter(temparr, (o) =>
        _.toLower(o.companyName).includes(_.toLower(value))
      );
      console.log(filtered);
      // console.log(filtered);
      // state.customers = filtered;
      console.log("state", state.customers);
      return { ...state, filtered };
    }
    default:
      return { ...state };
  }
};
export default Customers;
