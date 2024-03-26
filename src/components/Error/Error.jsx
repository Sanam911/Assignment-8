import { Link } from "react-router-dom";



const Error = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-24">

            <h1 className=" text-6xl font-bold text-red-600">Oops! page not found.</h1>

            <button className="btn bg-red-600 text-white"><Link to="/">Go to Home</Link></button>
            
            
        </div>
    );
};

export default Error;