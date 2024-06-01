import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const SingleItem = ({ shoe }) => {
  // eslint-disable-next-line react/prop-types
  const { id, title, brand, price, description, image_url } = shoe;
  return (
    <div className="card w-96 bg-white shadow-xl rounded-lg overflow-hidden transition-transform transform hover:scale-105">
    <figure className="relative">
      <img
        src={image_url}
        alt="Product Image"
        className="w-full h-64 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
      <div className="absolute bottom-0 left-0 p-4 text-white">
        <h2 className="text-lg font-bold">{brand}</h2>
      </div>
    </figure>
    <div className="card-body p-6">
      <h2 className="card-title text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <p className="text-xl font-bold text-indigo-600">
        Price : ${price}</p>
      <div className="card-actions justify-end mt-4">
        <button className="btn btn-primary bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all">
          <Link to={`/products/${id}`} >See Details</Link>
        </button>
      </div>
    </div>
  </div>
  
  );
};

export default SingleItem;
