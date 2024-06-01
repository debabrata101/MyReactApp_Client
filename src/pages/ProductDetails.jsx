import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const shoe = useLoaderData();
  const { brand, description, image_url, price, title } = shoe;
  console.log(shoe);
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-12">
      <div className="max-w-2xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <header className="bg-indigo-600 text-white text-center py-8">
          <h1 className="text-5xl font-bold">{title}</h1>
        </header>
        <div className="p-6">
          <figure className="mb-6">
            <img
              src={image_url}
              alt="Product image"
              className="w-full h-auto object-cover rounded-lg"
            />
          </figure>
          <div className="text-center mb-6">
            <h2 className="text-3xl font-semibold text-indigo-700">${price}</h2>
            <h3 className="text-2xl font-bold text-gray-800">{brand}</h3>
          </div>
          <p className="text-lg font-light text-gray-600 mb-6">{description}</p>
          <div className="text-center">
            <button className="btn btn-primary bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
