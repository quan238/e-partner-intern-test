const _ = require("lodash"); // Lodash.

let stateDefault = {
  customers: [
    {
      customerID: "10",
      companyName: "Vimbo",
      contactName: "Blakeley Le Estut",
      contactTitle: "Project Manager",
      address: "6 Roth Avenue",
      city: "Zaozhuang",
      region: "CN",
      postalCode: null,
      country: "China",
      phone: "108-566-5009",
      fax: "276-92-8482",
    },
    {
      customerID: "100",
      companyName: "Zooveo",
      contactName: "Regan Waldie",
      contactTitle: "VP Marketing",
      address: "50531 Shopko Road",
      city: "Taza",
      region: "MA",
      postalCode: null,
      country: "Morocco",
      phone: "208-689-3910",
      fax: "455-78-1679",
    },
    {
      customerID: "101",
      companyName: "Kazio",
      contactName: "Dallas Le Grys",
      contactTitle: "Research Associate",
      address: "6518 Cottonwood Road",
      city: "Kurortnyy",
      region: "RU",
      postalCode: "197738",
      country: "Russia",
      phone: "258-837-4756",
      fax: "730-11-6182",
    },
    {
      customerID: "102",
      companyName: "Lazz",
      contactName: "Gwenny Sturch",
      contactTitle: "Financial Analyst",
      address: "3 Westport Lane",
      city: "Paizhou",
      region: "CN",
      postalCode: null,
      country: "China",
      phone: "421-180-8818",
      fax: "877-39-3827",
    },
    {
      customerID: "104",
      companyName: "Demivee",
      contactName: "Jourdan Casin",
      contactTitle: "Structural Analysis Engineer",
      address: "5007 Surrey Crossing",
      city: "Guzhan",
      region: "CN",
      postalCode: null,
      country: "China",
      phone: "585-175-6245",
      fax: "537-60-5989",
    },
    {
      customerID: "106",
      companyName: "Browsedrive",
      contactName: "Emiline Joscelyne",
      contactTitle: "Recruiting Manager",
      address: "2 Lunder Way",
      city: "Otaslavice",
      region: "CZ",
      postalCode: "798 06",
      country: "Czech Republic",
      phone: "884-892-7450",
      fax: "704-17-8693",
    },
    {
      customerID: "107",
      companyName: "Meeveo",
      contactName: "Renell Petrovsky",
      contactTitle: "VP Accounting",
      address: "81 Gulseth Place",
      city: "Lanas",
      region: "PH",
      postalCode: "1200",
      country: "Philippines",
      phone: "975-167-8410",
      fax: "545-84-3643",
    },
    {
      customerID: "108",
      companyName: "Babblestorm",
      contactName: "Callie Ciric",
      contactTitle: "Actuary",
      address: "32 Gale Road",
      city: "Conde",
      region: "PT",
      postalCode: "4815-019",
      country: "Portugal",
      phone: "358-405-1089",
      fax: "413-71-7907",
    },
  ],
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
      // state.customers = temparr;
      const { value } = action;
      const filtered = _.filter(temparr, (o) =>
        _.toLower(o.companyName).includes(_.toLower(value))
      );
      // console.log(filtered);
      // console.log(filtered);
      // state.customers = filtered;
      console.log("state", state.customers);
      state.customers = filtered;
      console.log(state.customers)
      return { ...state };
    }
    default:
      return { ...state };
  }
};
export default Customers;
