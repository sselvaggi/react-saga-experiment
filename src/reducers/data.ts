import * as ACTIONS from "../actions";
import Product from './Product'

export interface Action {
  type: string,
  data: any,
}
export default (state = {}, { type, data }:Action) => {
  switch (type) {
    case ACTIONS.RECEIVE_API_DATA:
      return data;
    case ACTIONS.FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        fetchingProductQuery: true,
        fetchingProductError: null,
      };
    case ACTIONS.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        fetchingProductQuery: null,
        fetchingProductError: null,
        products: data,
      };
    case ACTIONS.FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        fetchingProductQuery: null,
        fetchingProductError: data,
      };
    case ACTIONS.SAVE_PRODUCT_REQUEST:
      return {
        ...state,
        savingProductRequest: true,
        savingProductError: null,
      };
    case ACTIONS.SAVE_PRODUCT_SUCCESS:
      return {
        ...state,
        savingProductRequest: null,
        savingProductError: null,
      };
    case ACTIONS.SAVE_PRODUCT_FAILURE:
      return {
        ...state,
        savingProductRequest: null,
        creatingProductError: data,
      };
    default:
      return state;
  }

};
export interface RootState {
  fetchingProductRequest: Action | null,
  fetchingProductError: string | null,
  savingProductRequest: Action | null,
  savingPruductError: string | null,
  deletingProductRequest: Action | null,
  deletingPruductError: string | null,
  products: Product[]
}
const initState:RootState = {
  fetchingProductRequest: null,
  fetchingProductError: null,
  savingProductRequest: null,
  savingPruductError: null,
  deletingProductRequest: null,
  deletingPruductError: null,
  products: [
    {
      name:"pepo",
      price: 20,
    },
    {
      name:"pepa", 
      price: 27,
    }
  ]
}