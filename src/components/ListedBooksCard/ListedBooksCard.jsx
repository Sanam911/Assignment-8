
import PropTypes from 'prop-types'
import { FaLocationDot } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdInsertPageBreak } from "react-icons/md";
import { Link } from 'react-router-dom';






const ListedBooksCard = ({ book }) => {
    const { bookId, bookName, image, author, category, tags, totalPages, rating, publisher, yearOfPublishing } = book;
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl ">
                <figure><img src={image} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{bookName}</h2>
                    <p>By: {author}</p>
                    <div className='md:flex items-center gap-6'>
                        <div>
                            <h3 className='font-bold text-2xl'>Tag</h3>
                        </div>
                        <div className="flex gap-4 ">
                            {
                                tags.map((tags, idx) => <h3 className="bg-[#23BE0A0D] text-[#23BE0A] rounded-full p-3" key={idx}>#{tags}</h3>
                                )
                            }
                        </div>
                        <div className='flex items-center'>
                            <FaLocationDot />

                            <h3>Year of Publishing: {yearOfPublishing}</h3>
                        </div>
                    </div>
                    <div className='md:flex justify-start gap-6'>
                        <div className='flex items-center gap-2'>
                            <FaPeopleGroup className='text-2xl' />

                            <h3>Publisher: {publisher}</h3>
                        </div>
                        <div className='md:flex items-center gap-2'>
                            <MdInsertPageBreak className='text-2xl' />

                            <h3>Page: {totalPages}</h3>
                        </div>
                    </div>
                    <hr />

                    <div className='md:flex gap-12'>
                        <button className='btn text-[#328EFF] bg-[#328EFF26] p-2 rounded-full'>Category: {category}</button>

                        <button className='btn text-[#FFAC33] bg-[#FFAC3326] p-2 rounded-full'>Rating: {rating}</button>

                        <Link to="/src/components/BookDetails">
                            <button className='btn text-white bg-[#23BE0A] p-2 rounded-full'>View Details</button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};
ListedBooksCard.prpTypes = {
    book: PropTypes.object
}
export default ListedBooksCard;