const EventCard = ({ singleData }) => {
    console.log(singleData)
    const { id, service_img, service_name, service_description } = singleData;
    return (
        <div>
           
            <div className="card bg-base-100 shadow-xl">
                <figure>
                    <img src={service_img} alt="Shoes" />
                    </figure>
                <div className="card-body">
                    <h2 className="card-title">{service_name}</h2>
                    <p>{service_description.slice(0, 400)}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default EventCard;