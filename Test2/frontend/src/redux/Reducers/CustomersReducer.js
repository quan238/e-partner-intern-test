let stateDefault = {
  customers: [],
};

const Customers = (state = stateDefault, action) => {
  switch (action.type) {
    case "FETCH_ALL": {
      state.customers = action.payload;
      console.log(state.customers);
      return { ...state };
    }
    default:
      return { ...state };
  }
};
export default Customers;
