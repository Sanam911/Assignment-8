
import PropTypes from 'prop-types'

import 'primeicons/primeicons.css';
        

const ListedBooksCard = ({ book }) => {
    const { bookId, bookName, image, author, category, tags, totalPages, rating, publisher, yearOfPublishing } = book;
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={image} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{bookName}</h2>
                    <p>By: {author}</p>
                    <div className='flex items-center gap-6'>
                        <div>
                            <h3 className='font-bold text-2xl'>Tag</h3>
                        </div>
                       <div className="flex gap-4 ">
                            {
                              tags.map((tags, idx) => <h3 className="bg-[#23BE0A0D] text-[#23BE0A] rounded-full p-3" key={idx}>#{tags}</h3>
                              )
                            }
                       </div>
                       <div>
                            <h3>Year of Publishing: {yearOfPublishing}</h3>
                       </div>
                    </div>
                    <div className='flex justify-start gap-6'>
                        <div>
                            <h3>Publisher: {publisher}</h3>
                        </div>
                        <div>
                            <h3>Page: {totalPages}</h3>
                        </div>
                    </div>
                    <hr />

                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
ListedBooksCard.prpTypes={
    book: PropTypes.object
}
export default ListedBooksCard;