import { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";


const Services = () => {
    const [data, setData] = useState([])
    
    useEffect(() => {
        fetch("/public/data.json")
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

//     const icons = ["<FaHome></FaHome>", "<FaBowlFood></FaBowlFood>"]
//     function getIcon(icons) {
//         let myIcon = []
//         for (let i = 0; i < icons.length; i++) {
//             const icon = icons[i]
//             myIcon.push(icon)
//         }
//         return myIcon;
//     }
//      const takIcon = getIcon(icons)
// console.log(takIcon)


    return (
        <div>
            <div className="space-y-3 mb-10">
                <h6 className="text-xl text-center font-bold text-orange-500">Our Services</h6>
                <h1 className="font-bold text-center text-3xl md:text-5xl">Some of The Services Our Provide</h1>
                <p className="text-center">best wedding management services in bangladesh</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:px-32 px-5 mb-20">
                {
                    data.map(singleData => <ServiceCard
                        key={singleData.id}
                        singleData={singleData}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;