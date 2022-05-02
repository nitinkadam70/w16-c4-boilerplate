import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "#8000ff", padding: 20,display: "flex",gap:"20px"}}>
      {/* 
                all the links in navbar,
      IMPORTANT: Link should match as mentioned in problem statement 
      */}

      <div>
        <Link style={{color:"white"}} to="/">Home</Link>
      </div>
      <div>
        <Link style={{color:"white"}} to="/about">About</Link>
      </div>
      <div>
        <Link style={{color:"white"}} to="/products">Products</Link>
      </div>
      <div>
        <Link style={{color:"white"}} to="/products/men">Men</Link>
      </div>
      <div>
        <Link style={{color:"white"}} to="/products/women">Women</Link>
      </div>
      <div>
        <Link style={{color:"white"}}  to="/products/kids">Kids</Link>
      </div>
      <div>
        <Link style={{color:"white"}}  to="/products/homedecor">Home Decor</Link>
      </div>
    </nav>
  );
};
