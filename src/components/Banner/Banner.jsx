import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="hero  bg-base-200 rounded-3xl">
            <div className="hero-content flex-col lg:flex-row-reverse gap-16">
                <div>
                    <img src="https://i.ibb.co/j8wpn2c/Cover.png" className="md:max-w-sm rounded-lg shadow-xl w-auto" />
                </div>
                <div className="">
                    <h1 className="text-5xl font-bold mb-6">Books to freshen
                        <br />
                        up your bookshelf</h1>

                    <Link to="/listedBooks">
                    <button className="btn bg-[#23BE0A] text-white">View The List</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;