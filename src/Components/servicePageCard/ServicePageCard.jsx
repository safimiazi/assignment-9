import toast from 'react-hot-toast';


const ServicePageCard = ({singleData, handleCart}) => {
    const {id} = singleData;

    return (
        <div>
             <div>
                            <div className="card bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src={singleData.service_img} alt="Shoes" className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{singleData.detail_title}</h2>
                                    <p>{singleData.service_description.slice(0,200)}</p>
                                    <div className="card-actions">
                                        <button onClick={()=>handleCart(singleData)} className="btn bg-orange-500 text-white">Booking Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
        </div>
    );
};

export default ServicePageCard;