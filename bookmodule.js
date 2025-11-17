let books = [];

export const getAllbook = () => {
    return books;
}

export const getbookById = (id) => {
    return books.find(book => book.id === id);
}

export const createbook = (newTitle, newAuthor, newGenre, newPublicationyear) => {
    const newbook = {
        id: books.length + 1,
        title: newTitle,
        author: newAuthor,
        genre: newGenre,
        publicationyear: newPublicationyear
    };
    books.push(newbook);
    return newbook;
}

export const updatebook = (id, newTitle, newAuthor, newGenre, newPublicationyear) => {
    const book = books.find(book => book.id === id);
    if (book) {
        book.title = newTitle;
        book.author = newAuthor;
        book.genre = newGenre;
        book.publicationyear = newPublicationyear;
        return book;
    }
    return null;
}

export const deletebook = (id) => {
    const index = books.findIndex(book => book.id === id);
    if (index !== -1) {
        const deletedbook = books.splice(index, 1);
        return deletedbook[0];
    }
    return null;
}
