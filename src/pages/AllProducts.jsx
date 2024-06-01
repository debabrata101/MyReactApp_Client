import { useEffect, useState } from "react";
import SingleProductCardDashboard from "../components/dashboard/SingleProductCardDashboard";

const AllProducts = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/shoes/")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const handleDeleteProducts = (id) => {
    setProduct(product.filter((product) => product._id !== id));
  };
  return (
    <div>
      <h1 className="text-5xl font-bold text-center">All Products</h1>
      <div className="my-16 flex flex-wrap gap-4 justify-center">
        {product.map((shoe) => (
          <SingleProductCardDashboard key={product.id} shoe={shoe} onDelete={handleDeleteProducts}/>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
