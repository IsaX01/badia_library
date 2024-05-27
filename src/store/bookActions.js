import { _createBook, _updateBook, _removeBook } from './booksSlice';
// const host = "10.0.0.7";
const host = "192.168.1.164";

export const createBook = async (bookData) => {
    try {
        const response = await fetch(`http://${host}:8080/api/books`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(bookData),
        });

        if (response.status === 201) {
            const createdBook = await response.json();
            // dispatch(_createBook(createdBook)); // Usa createdBook en lugar de data
            console.log('Book created successfully:', createdBook);
            return true;
        } else {
            const errorMessage = response.data.message || 'Error creating book';
            console.error('Create book error:', errorMessage);
            return false;
        }
    } catch (error) {
        console.error('Error during create book:', error);
    }
};


export const getAllBooks = async () => {
    try {
        const response = await fetch(`http://${host}:8080/api/books`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.status === 200) {
            const books = response.json();
            console.log('Fetched all books:', books);
            return books;
        } else {
            const errorMessage = response.data.message || 'Error fetching books';
            console.error('Get books error:', errorMessage);
        }
    } catch (error) {
        console.error('Error during get books:', error);
    }
};

export const getBookById = async (bookId) => {
    try {
        const response = await fetch(`http://${host}:8080/api/books/${bookId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ bookData }),
        });
        if (response.status === 200) {
            const book = response.data; 
            console.log('Fetched book:', book);
            
        } else if (response.status === 404) {
            console.log(`Book not found with ID: ${bookId}`);
     
        } else {
            const errorMessage = response.data.message || 'Error fetching book';
            console.error('Get book error:', errorMessage);
          
        }
    } catch (error) {
        console.error('Error during get book:', error);
 
    }
};


export const updateBook = async (bookId, updatedBookData) => {
    try {
      const response = await fetch(`http://${host}:8080/api/books/${bookId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedBookData),
      });
  
      if (response.status === 200) {
        const updatedbook = await response.json();
        // dispatch(_updateBook({ id: updatedBook.id, updatedBook }));
        console.log('Book updated successfully:', updatedbook);
        return updatedbook;
      } else if (response.status === 404) {
        console.error(`Book not found with ID: ${bookId}`);
      } else {
        const errorMessage = await response.text();
        console.error('Update book error:', errorMessage);
      }
    } catch (error) {
      console.error('Error during update book:', error);   
    }
  };

 export const deleteBook = async (bookId) => {
    try {
      const response = await fetch(`http://${host}:8080/api/books/${bookId}`, {
        method: 'DELETE',
      });
  
      if (response.status === 204) {
        console.log(`Book with ID: ${bookId} deleted successfully`);
        return true;
      } else if (response.status === 404) {
        console.error(`Book not found with ID: ${bookId}`);
        return false;
      } else {
        const errorMessage = await response.text();
        console.error('Delete book error:', errorMessage);
        return false;
      }
    } catch (error) {
      console.error('Error during delete book:', error);
    }
  };