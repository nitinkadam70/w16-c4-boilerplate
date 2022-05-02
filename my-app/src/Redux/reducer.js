import { GET_PRODUCTS_DATA, SORT_PRODUCTS, FILTER_PRODUCTS } from "./actionTypes"

const initState = {
  data: [],
  isLoading: false,
  isError: false,
  filterData: [],
  products: [],
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {

    case GET_PRODUCTS_DATA:
      return {
        data: payload,
        isLoading: false,
        isError: false,
        filterData: [],
        products: [],
      }

    case SORT_PRODUCTS:
      return {
        data: [],
        isLoading: false,
        isError: false,
        filterData:payload,
        products: [],
      }

    case FILTER_PRODUCTS:
      return {
        data: [],
        isLoading: false,
        isError: false,
        filterData: [],
        products: payload,
      }

    default:
      return state

  }
};
export { reducer };
