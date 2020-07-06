export const REQUEST_API_DATA = "REQUEST_API_DATA";
export const RECEIVE_API_DATA = "RECEIVE_API_DATA";
export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';
export const SAVE_PRODUCT_REQUEST = 'SAVE_PRODUCT_REQUEST';
export const SAVE_PRODUCT_SUCCESS = 'SAVE_PRODUCT_SUCCESS';
export const SAVE_PRODUCT_FAILURE = 'SAVE_PRODUCT_FAILURE';

export const requestApiData = () => ({ type: REQUEST_API_DATA });
export const receiveApiData = data => ({ type: RECEIVE_API_DATA, data });
export const fetchProductRequest = (data: ProductQuery | null) => ({ type: FETCH_PRODUCTS_REQUEST, data });
export const fetchProductSuccess = (data: Product[]) => ({ type: FETCH_PRODUCTS_SUCCESS, data });
export const fetchProductFailure = (data:string) => ({ type: FETCH_PRODUCTS_FAILURE, data });
export const saveProductRequest = (data:Product) => ({ type: SAVE_PRODUCT_REQUEST, data });
export const saveProductSuccess = (data:Product) => ({ type: SAVE_PRODUCT_SUCCESS, data });
export const saveProductFailure = (data:string) => ({ type: SAVE_PRODUCT_FAILURE, data });