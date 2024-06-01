/* eslint-disable react/prop-types */

import toast from "react-hot-toast";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const SingleProductCardDashboard = ({ shoe, onDelete }) => {
  const token = localStorage.getItem("token");
  const { _id, title, brand, price, description, image_url } = shoe;

  const handleDelete = async () => {
    await fetch(`http://localhost:5000/shoes/${_id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Product Deleted !");
        onDelete(_id);
      });
  };

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
        <p className="text-xl font-bold text-indigo-600">Price : ${price}</p>
        <div className="card-actions justify-end mt-4">
          <button
            onClick={handleDelete}
            className="btn btn-primary bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all"
          >
            <Link to={`/products/${_id}`}>
              <RiDeleteBin6Line />
            </Link>
          </button>
          <button className="btn btn-primary bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all">
            <Link to={`edit/${_id}`}>
              <FaEdit />
            </Link>
          </button>
          <button className="btn btn-primary bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all">
            <Link to={`/products/${_id}`}>See Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProductCardDashboard;
