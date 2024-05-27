import { _createBook, _updateBook, _removeBook } from './booksSlice';


export const createBook = async (bookData) => {
    try {
        const response = await fetch("http://10.0.0.7:8080/api/books", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(bookData),
        });

        if (response.status === 201) {
            const createdBook = await response.json(); // Parsea la respuesta como JSON
            // dispatch(_createBook(createdBook)); // Usa createdBook en lugar de data
            console.log('Book created successfully:', createdBook);
            return true;
            // Maneja la creación exitosa del libro aquí, por ejemplo, actualiza la interfaz de usuario o almacena los datos del libro
        } else {
            const errorMessage = response.data.message || 'Error creating book';
            console.error('Create book error:', errorMessage);
            return false;
            // Maneja la respuesta de error
        }
    } catch (error) {
        console.error('Error during create book:', error);
        // Maneja errores de red u otros errores
    }
};


export const getAllBooks = async () => {
    try {
        const response = await fetch("http://10.0.0.7:8080/api/books", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.status === 200) {
            const books = response.json(); // Assuming your API returns a list of books in the response
            console.log('Fetched all books:', books);
            return books;
        } else {
            const errorMessage = response.data.message || 'Error fetching books';
            console.error('Get books error:', errorMessage);
            // Handle error response
        }
    } catch (error) {
        console.error('Error during get books:', error);
        // Handle network or other errors
    }
};

export const getBookById = async (bookId) => {
    try {
        const response = await fetch(`http://localhost:8080/api/books/${bookId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ bookData }),
        });
        if (response.status === 200) {
            const book = response.data; // Assuming your API returns the book object in the response
            console.log('Fetched book:', book);
            // Handle successful book retrieval here, e.g., display book details in UI or update state
        } else if (response.status === 404) {
            console.log(`Book not found with ID: ${bookId}`);
            // Handle book not found scenario
        } else {
            const errorMessage = response.data.message || 'Error fetching book';
            console.error('Get book error:', errorMessage);
            // Handle other error responses
        }
    } catch (error) {
        console.error('Error during get book:', error);
        // Handle network or other errors
    }
};


export const updateBook = async (bookId, updatedBookData) => {
    try {
      const response = await fetch(`http://10.0.0.7:8080/api/books/${bookId}`, {
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
        // Handle successful book update here, e.g., update UI or state with updated data
      } else if (response.status === 404) {
        console.error(`Book not found with ID: ${bookId}`);
        // Handle book not found scenario
      } else {
        const errorMessage = await response.text();
        console.error('Update book error:', errorMessage);
        // Handle other error responses
      }
    } catch (error) {
      console.error('Error during update book:', error);
      // Handle network or other errors
    }
  };

 export const deleteBook = async (bookId) => {
    try {
      const response = await fetch(`http://localhost:8080/api/books/${bookId}`, {
        method: 'DELETE',
      });
  
      if (response.status === 204) {
        console.log(`Book with ID: ${bookId} deleted successfully`);
        // Handle successful book deletion here, e.g., update UI or state to reflect the deletion
      } else if (response.status === 404) {
        console.error(`Book not found with ID: ${bookId}`);
        // Handle book not found scenario
      } else {
        const errorMessage = await response.text();
        console.error('Delete book error:', errorMessage);
        // Handle other error responses
      }
    } catch (error) {
      console.error('Error during delete book:', error);
      // Handle network or other errors
    }
  };