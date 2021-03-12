import { createAction, createActionType } from ".";
import { customerServices } from "../../services";
import { FETCH_ALL } from "./type";
import { SORT_UP, SORT_DOWN, SORT_DOWN_NAME, SORT_UP_NAME } from "./type";

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

export const sortIdUp = () => {
  // return (dispatch)=>{
  //   sortById: (dispatch) => {
  //     dispatch(createActionType(SORT_UP));
  //   },
  // }
  return (dispatch) => {
    dispatch(createActionType(SORT_UP));
  };
};

export const sortIdDown = () => {
  // return (dispatch)=>{
  //   sortById: (dispatch) => {
  //     dispatch(createActionType(SORT_UP));
  //   },
  // }
  return (dispatch) => {
    dispatch(createActionType(SORT_DOWN));
  };
};
export const sortNameDown = () => {
  // return (dispatch)=>{
  //   sortById: (dispatch) => {
  //     dispatch(createActionType(SORT_UP));
  //   },
  // }
  return (dispatch) => {
    dispatch(createActionType(SORT_DOWN_NAME));
  };
};
export const sortNameUp = () => {
  // return (dispatch)=>{
  //   sortById: (dispatch) => {
  //     dispatch(createActionType(SORT_UP));
  //   },
  // }
  return (dispatch) => {
    dispatch(createActionType(SORT_UP_NAME));
  };
};
