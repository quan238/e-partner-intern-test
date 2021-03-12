let stateDefault = {
  customers: [],
};

const Customers = (state = stateDefault, action) => {
  switch (action.type) {
    case "FETCH_ALL": {
      state.customers = action.payload;

      return { ...state };
    }
    case "SORT_UP": {
      state.customers.sort();
      return { ...state };
    }
    case "SEARCH": {
      let newarr = state.customers.filter((value) => {
        return (
          value.companyName
            .toLowerCase()
            .indexOf(action.value.toLowerCase()) !== -1
        );
      });
      state.customers = newarr;
      console.log(newarr);
      return { ...state };
    }
    default:
      return { ...state };
  }
};
export default Customers;
