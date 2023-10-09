import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ServicePageCard from "../../Components/servicePageCard/servicePageCard";
import { addToLS } from "../../Components/utilities/localStorage";
import toast from 'react-hot-toast';


const ServicePage = () => {
    const [cart, setCart] = useState([])
    const data = useLoaderData()
    console.log("this si sdkdkkdl",data);

const handleCart = (card) => {
    console.log('on going', card);
    const newCart = [...cart, card]
    setCart(newCart)
    addToLS(card.id)
    toast.success('Successfully Booking, Please go to dashboard page!')

}


    return (
        <div className="md:px-32 my-20">
          
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {
                    data.map(singleData => <ServicePageCard 
                        singleData={singleData}
                        handleCart={handleCart}
                        ></ServicePageCard>)
                }
            </div>
        </div>
    );
};

export default ServicePage;