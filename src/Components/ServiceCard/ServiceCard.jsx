import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "../style/style.css";
const ServiceCard = ({ singleData }) => {
    const { id, service_name, service_description,price, icon } = singleData;
    
    return (
<div>
    
        <div class=" cardShadow  p-6 text-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
             <img className="mx-auto" src={icon} alt="" />
            <a href="#">
                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{service_name}</h5>
            </a>
            <p class="mb-3 font-normal  text-black dark:text-gray-400">{service_description.slice(0,150)}</p>
            <p className="font-bold ">Price: {price}</p>
            <Link to={`/details/${id}`} class="inline-flex items-center text-orange-500 hover:underline">
                See service details
                <svg class=" h-3 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                </svg>
            </Link>
        </div>
        </div>

    );
};

export default ServiceCard;