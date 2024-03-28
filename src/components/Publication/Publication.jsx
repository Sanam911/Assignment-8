import { FaLocationDot } from "react-icons/fa6";


const Publication = ({ publisher }) => {
    const { imageURL, publicationName, description, address } = publisher;
    return (
        <div className="card m-4 lg:card-side bg-base-100 shadow-xl p-4">
            <figure><img className="w-[250px] rounded-2xl" src={imageURL} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{publicationName}</h2>
                <p>{description}</p>
                <hr />
                <div className="flex items-center gap-4">
                    <FaLocationDot />
                    <p> {address}</p>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn bg-green-500 text-white">Read</button>
                </div>
            </div>
        </div>
    );
};

export default Publication;