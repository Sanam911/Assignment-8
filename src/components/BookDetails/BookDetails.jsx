import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveBooks } from "../../utitity/localstorage";



const BookDetails = () => {
    const books = useLoaderData();
    const { bookId } = useParams();
    const bookIdInt = parseInt(bookId);
    const book = books.find(book => book.bookId === bookIdInt);
    console.log(book);

    

    const handleRead =()=>{
        saveBooks(bookIdInt);
        toast('Successfully Read');
    };

    const handleWishlist = () => {
        saveBooks(bookIdInt);
        toast('Successfully added to wishlist');
    }
    return (
        <div className="m-10">

            <div className="card lg:card-side bg-base-100 shadow-xl p-8">
                <figure><img className="w-[500px]" src={book.image} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{book.bookName}</h2>
                    <p className="text-[#131313CC]"><small>By: {book.author}</small></p>
                    <hr />
                    <p className="text-[#131313CC]"><small>{book.category}</small></p>
                    <hr />
                    <p className="text-[#131313CC]"><span className="font-bold">Review:</span> {book.review}</p>

                    <div className="flex justify-start items-center gap-16">
                        <div>
                            <h3>Tag</h3>
                        </div>

                        <div className="flex gap-4">
                            {
                                book.tags.map((tags, idx) => <h3 className="bg-[#23BE0A0D] text-[#23BE0A] rounded-full p-3" key={idx}>{tags}</h3>)
                            }
                        </div>
                    </div>
                    <hr />
                    <div className="">
                        <div className="flex justify-start gap-16">
                            <h3><span className="text-[#131313B3]">Number of Pages:</span></h3>
                            <p>{book.totalPages}</p>
                        </div>

                        <div className="flex justify-start gap-32">
                            <h3><span className="text-[#131313B3]">Publisher:</span></h3>
                            <p>{book.publisher}</p>
                        </div>

                        <div className="flex justify-start gap-16">
                            <h3><span className="text-[#131313B3]">Year of Publishing:</span></h3>
                            <p>{book.yearOfPublishing}</p>
                        </div>

                        <div className="flex justify-start gap-36">
                            <h3><span className="text-[#131313B3]">Rating:</span></h3>
                            <p>{book.rating}</p>
                        </div>

                    </div>
                    <div className="card-actions justify-start">
                        <button onClick={handleRead} className="btn border-gray-200">Read</button>
                        <button onClick={handleWishlist} className="btn bg-[#50B1C9] text-white">Wishlist</button>
                    </div>
                    <ToastContainer />
                </div>
            </div>
          
        </div>
    );
};

export default BookDetails;