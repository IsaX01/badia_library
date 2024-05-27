
import { createSlice } from '@reduxjs/toolkit';

const booksSlice = createSlice({
    name: 'books',
    initialState: {
        books: [], // Estado inicial con una lista vacía de libros
    },
    reducers: {
        _createBook: (state, action) => {
            state.books.push(action.payload); // Agrega un libro al estado
        },
        _updateBook: (state, action) => {
            const { id, updatedData } = action.payload;
            const bookIndex = state.books.findIndex((book) => book.id === id);
            if (bookIndex !== -1) {
                // Update the book data
                state.books[bookIndex] = { ...state.books[bookIndex], ...updatedData };
            }
        },
        _removeBook: (state, action) => {
            // Implementa la lógica para eliminar un libro según tus necesidades
            // Por ejemplo, puedes usar filter() para eliminar un libro por ID
            state.books = state.books.filter((book) => book.id !== action.payload);
        },
    },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
