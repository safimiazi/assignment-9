import { Link } from "react-router-dom";
import banner1 from "../../assets/banner1.jpeg"
import banner2 from "../../assets/banner2.jpeg"
const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner1})`}}>
        <div className=" bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-xl">
            <h1 className="mb-5 text-5xl font-bold">Professional <span className="text-orange-500">Planning</span> for Successful Events.</h1>
            <p className="mb-5">Elevate Your Corporate Event Experience with Our Professional Planning Services</p>
            <Link to="/register" className="btn bg-orange-500  hover:bg-orange-600 border-0 rounded-3xl text-white px-10">Register</Link>
          </div>
        </div>
      </div>
    );
};

export default Banner;