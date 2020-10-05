import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const purchaseBurgerSuccess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    orderId: id,
    orderDAta: orderData,
  };
};

export const purchaseBurgerFail = (error) => {
  return {
    type: actionTypes.purchaseBurgerFail,
    error: error,
  };
};

export const purchaseBurgerStart = () => {
  return {
    type: actionTypes.PURCHASE_BURGER_START,
  };
};

export const purchaseBurger = (orderData) => {
  return (dispatch) => {
    dispatch(purchaseBurgerStart());
    axios
      .post('/orders.json', orderData)
      .then((response) => {
        console.log(response.data);
        dispatch(purchaseBurgerStart(response.data, orderData));
      })
      .catch((error) => {
        dispatch(purchaseBurgerFail(error));
      });
  };
};
