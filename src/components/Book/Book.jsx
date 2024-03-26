import PropTypes from 'prop-types'
import { AiFillStar } from "react-icons/ai";

const Book = ({ book }) => {
    const { image,bookName,tags,author,category,rating } = book;
    return (
        <div>
            <div className="card w-80 bg-base-100 shadow-xl p-4 mb-16 border-2 border-gray-200">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <div>
                        <div className="flex gap-4 ">
                            {
                                tags.map((tags,idx)=> <h3 className="bg-[#23BE0A0D] text-[#23BE0A] rounded-full p-3" key={idx}>{tags}</h3>
                            )
                            }
                        </div>
                    </div>
                    <h2 className="card-title">{bookName}</h2>
                    <p className="text-[#131313CC]">By: {author}</p>
                    <hr />
                    <div className='flex justify-between items-center'>
                            <div>
                                <h3>{category}</h3>
                            </div>
                            <div className="flex gap-4 justify-end items-center">
                                <h3>{rating}</h3>
                                <AiFillStar />
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
Book.propTypes={
    book:PropTypes.object,
}
export default Book;