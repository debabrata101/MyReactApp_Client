import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="grid grid-cols-12 min-h-screen">
      <div className="col-span-2 bg-gray-300 text-white p-6">
        <ul className="space-y-4">
          <li className="p-4 bg-gray-500 rounded hover:bg-gray-600 transition duration-200">
            <Link to="Home" className="block w-full h-full font-bold">
              Dashboard
            </Link>
          </li>
          <li className="p-4 bg-gray-500 rounded hover:bg-gray-600 transition duration-200">
            <Link to="all-products" className="block w-full h-full font-bold">
              All Products
            </Link>
          </li>
          <li className="p-4 bg-gray-500 rounded hover:bg-gray-600 transition duration-200">
            <Link to="add-products" className="block w-full h-full font-bold">
              Add Product
            </Link>
          </li>
          <li className="p-4 bg-gray-500 rounded hover:bg-gray-600 transition duration-200">
            <Link to="/" className="block w-full h-full font-bold">
              Home
            </Link>
          </li>
        </ul>
      </div>
      <div className="col-span-10 p-10 bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
