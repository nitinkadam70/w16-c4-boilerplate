import React, { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import { Select, Grid } from "./Styled";
import { useDispatch, useSelector } from 'react-redux';
import { getProductsData, sortProducts } from "../Redux/actions";
export const Products = () => {

  const dispatch = useDispatch();
  const {data} = useSelector((state)=>state.data);

  useEffect(() => {
    // fetch ProductsData using redux-thunk on every mount
    getProductsData(dispatch)
  }, []);
  const handleSort = (e) => {
    // dispatch sort products on change
    let value = e.target.value;
    dispatch(sortProducts(value));
  };

  return (
    <>
      <h2>Products</h2>
      <Select data-testid="product-sort-order" onChange={handleSort}>
        <option>Sort by--</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </Select>
      <Grid data-testid="products-container">
        {/* iterate data and show each POroduct card */}
        {data.map((data)=>(
          <ProductCard key={data.id} {...data}/>
        ))}
    
      </Grid>
    </>
  );
};
