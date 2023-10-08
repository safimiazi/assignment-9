import { useLoaderData, useParams } from "react-router-dom";


const Details = () => {
    const { id } = useParams()
    const data = useLoaderData()
    const matchingService = data.find(singleData => singleData.id == id)
    console.log(matchingService.service_img)
    return (
        <div className="space-y-20">
            <div className="flex justify-center items-center" style={{ backgroundImage: `url(${matchingService?.service_img})`, backgroundSize: 'cover', width: '100%', height: '50vh' }}>
                <div className="bg-orange-400 bg-opacity-30 w-full h-full flex justify-center items-center">
                    <div>
                    <h1 className="text-6xl text-white text-center font-bold">{matchingService.detail_title}</h1>
                    </div>
                </div>
            </div>
            <div className="grid px-32 grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-2">
                    <div className=" card-compact rounded-0 bg-base-100 shadow-xl">
                        <figure><img src={matchingService.service_img} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{matchingService.detail_title}</h2>
                            <p>{matchingService.service_description}</p>
                            <div className="card-actions justify-center">
                                <button className="btn hover:bg-orange-700 text-white bg-orange-500">Order Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border md:col-span-2">

                </div>
            </div>
        </div>
    );
};

export default Details;