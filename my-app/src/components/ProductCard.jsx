import { Flex } from "./Styled";

export const ProductCard = ({ id, image,brand,price,title }) => {

  return (
    <>
      <Flex data-testid="single-product-item" key={id}>
        {/* display item info here  */}
        <h3>{title}</h3>
        <img src={image} alt={brand} />
        <h5>{brand}</h5>
        <p>price : {price}</p>

      </Flex>
    </>
  );
};
