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
    default:
      return { ...state };
  }
};
export default Customers;
