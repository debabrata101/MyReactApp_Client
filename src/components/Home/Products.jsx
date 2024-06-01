import SingleItem from "../Login-Registration/SingleItem";

// eslint-disable-next-line react/prop-types
const Products = ({data}) => {
  return(
  <div >
    <h1 className="my-8 text-2xl font-bold text-center">Our Products</h1>
    <div className="flex gap-2 justify-center">
    {
      // eslint-disable-next-line react/prop-types
      data.slice(0,3).map(shoes =>
        <SingleItem key={shoes._id} shoe={shoes}/>
      )
    }
    </div>
  </div> 
   );
};

export default Products;
