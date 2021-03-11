import { createAction } from ".";
import { customerServices } from "../../services";
import { FETCH_ALL } from "./type";

// async action
export const fetchAllFunc = () => {
  return (dispatch) => {
    customerServices
      .fetchAll()
      .then((res) => {
        // console.log(res);
        dispatch(createAction(FETCH_ALL, res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

