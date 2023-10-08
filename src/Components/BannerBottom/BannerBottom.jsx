import { FaCreativeCommonsBy, FaBoltLightning, FaEye, FaUserCheck } from 'react-icons/fa6';

const BannerBottom = () => {

    return (
        <div className="grid mb-20 grid-cols-1 md:grid-cols-4 gap-8 -mt-4 md:-mt-20 md:px-32">
            <div className=" p-7 bg-base-100 shadow-xl space-y-2 cardShadow">
                <figure className="flex justify-center ">
                   <FaCreativeCommonsBy className="text-5xl text-white" style={{color: "orange"}}/>
                </figure>
                <div className="text-center">
                    <h2 className="text-2xl font-bold">experienced </h2>
                    <p>What do you mean by professionalism? Professionalism. Professionalism is the conduct</p> 
                </div>
            </div>
            <div className=" p-7 bg-base-100 shadow-xl space-y-2 cardShadow">
                <figure className="flex justify-center ">
                <FaBoltLightning className="text-5xl text-white" style={{color: "orange"}}/>   
                 </figure>
                <div className="text-center">
                    <h2 className="text-2xl font-bold">creativity  </h2>
                    <p>What do you mean by professionalism? Professionalism. Professionalism is the conduct</p> 
                </div>
            </div>
            <div className=" p-7 bg-base-100 shadow-xl space-y-2 cardShadow">
                <figure className="flex justify-center ">
                <FaEye className="text-5xl text-white" style={{color: "orange"}}/> 
                </figure>
                <div className="text-center">
                    <h2 className="text-2xl font-bold">attention to detail </h2>
                    <p>What do you mean by professionalism? Professionalism. Professionalism is the conduct</p> 
                </div>
            </div>
            <div className=" p-7 bg-base-100 shadow-xl space-y-2 cardShadow">
                <figure className="flex justify-center ">
                <FaUserCheck className="text-5xl text-white" style={{color: "orange"}}/>                 </figure>
                <div className="text-center">
                    <h2 className="text-2xl font-bold">professionalism </h2>
                    <p>What do you mean by professionalism? Professionalism. Professionalism is the conduct</p> 
                </div>
            </div>
            
        </div>
    );
};

export default BannerBottom;