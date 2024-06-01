import { useLoaderData } from "react-router-dom";
import Acccordion from "../components/Home/Acccordion";
import Banner from "../components/Home/Banner";
import Products from "../components/Home/Products";

const Home = () => {
    const data = useLoaderData();
    return (
        <div className="p-5">
            <Banner></Banner>
            <Products data={data}/>
            <Acccordion/>
        </div>
    );
};

export default Home;