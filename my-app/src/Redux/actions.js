// use axios for api call
import axios from "axios";
import { GET_PRODUCTS_DATA, SORT_PRODUCTS, FILTER_PRODUCTS } from "./actionTypes"

const getProductsData = async (dispatch)=> {

    try{
        let r = await axios.get("https://movie-fake-server.herokuapp.com/products");
        let data = await r.data;
        
    dispatch({
        type: GET_PRODUCTS_DATA,
        payload:data
    });
    }catch(e){
        console.log(e)
    }
};

const sortProducts = async(dispatch) => {

    

};



const filterProducts = () => ({

    type: FILTER_PRODUCTS

});

export { getProductsData, sortProducts, filterProducts };
