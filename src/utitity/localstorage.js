const getStoredBooks = () =>{
    const storedBooks = localStorage.getItem('save-books');
    if(storedBooks){
        return JSON.parse (storedBooks);
    }
    return [];
}

const saveBooks = bookId =>{
    const storedBooks = getStoredBooks();
    const exists = storedBooks.find (id => id === bookId);
    if(!exists){
        storedBooks.push(bookId);
        localStorage.setItem ('save-books', JSON.stringify(storedBooks))
    }

}

export {getStoredBooks,saveBooks}