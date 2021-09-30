const Book = require("./book.model");

class BookRepository {
  async getBooks() {
    const books = await Book.find({});

    return books;
  }

  async saveBook(title, gender, author, year) {
    const book = { title, gender, author, year };

    const bookAlreadyExists = await Book.findOne({ title });

    if (!bookAlreadyExists) {
      try {
        const createdBook = await Book.create(book);

        return createdBook;
      } catch (err) {
        return err;
      }
    }

    return "Book Already Exists";
  }

  async updateBook(id, title, gender, author, year) {
    const book = { title, gender, author, year };

    console.log(book);

    const updatedBook = Book.findOneAndUpdate({id}, book);

    return updatedBook;
  }

  async deleteBook(id) {
    const deletedBook = await Book.findOneAndDelete(id);

    return deletedBook;
  }
}

module.exports = BookRepository;
