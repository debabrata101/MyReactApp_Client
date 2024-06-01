import toast from "react-hot-toast";

const Addproduct = () => {
  const handleSubmit = async (e) => {
    const token = localStorage.getItem('token');
    e.preventDefault();
    const from = e.target;
    const title = from.title.value;
    const brand = from.brand.value;
    const price = from.price.value;
    const description = from.description.value;
    const image_url = from.image_url.value;

    const data = {  title, brand, price, description, image_url };

    await fetch("http://localhost:5000/shoes", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization : `Bearer ${token}`
      },
      body:JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success('Product added success !')
        from.reset();
      });
  };

  return (
    <div>
      <h1 className="text-5xl font-bold text-center">ADD PRODUCT</h1>
      <div className="my-16 max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 font-bold mb-2"
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Title"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="brand"
              className="block text-gray-700 font-bold mb-2"
            >
              Brand
            </label>
            <input
              type="text"
              name="brand"
              id="brand"
              placeholder="Brand"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-gray-700 font-bold mb-2"
            >
              Price
            </label>
            <input
              type="text"
              name="price"
              id="price"
              placeholder="Price"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-700 font-bold mb-2"
            >
              Description
            </label>
            <input
              type="text"
              name="description"
              id="description"
              placeholder="Description"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="image_url"
              className="block text-gray-700 font-bold mb-2"
            >
              Image URL
            </label>
            <input
              type="text"
              name="image_url"
              id="image_url"
              placeholder="Image URL"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div className="mb-4 flex justify-center items-center">
            <input
              className="btn mt-4 w-full bg-blue-300 rounded-lg hover:bg-blue-500  "
              type="submit"
              value="Add Product"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addproduct;
