import { useLoaderData } from "react-router-dom";
import ListedHeader from "../ListedHeader/ListedHeader";
import { useEffect, useState } from "react";
import { getStoredBooks } from "../../utitity/localstorage";
import ListedBooksCard from "../ListedBooksCard/ListedBooksCard";



const Listed_Books = () => {
    const books = useLoaderData();

    const [listedBooks, setListedBooks]= useState([]);


   useEffect(()=>{
    const storedBookIds = getStoredBooks();
    if(books.length > 0){
        const booksListed= books.filter(book => storedBookIds.includes(book.bookId));

        setListedBooks(booksListed);
        // console.log(books, storedBookIds, booksListed);
    }
   },[])

    return (
        <div>
            
            <ListedHeader></ListedHeader>
            <h3>Listed Books: {listedBooks.length}</h3>
            <div>
                {
                    listedBooks.map(book => <ListedBooksCard key={book.bookId} book={book}></ListedBooksCard>)
                }
            </div>
        </div>
    );
};

export default Listed_Books;