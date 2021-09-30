const { Router } = require("express");

const BookRepository = require("./book.repository");

const bookRepository = new BookRepository();

const routes = Router();

routes.get("/books", async (request, response) => {
  const books = await bookRepository.getBooks();

  return response.json(books);
});

routes.post("/books", async (request, response) => {
  const { title, gender, author, year } = request.body;

  const book = await bookRepository.saveBook(title, gender, author, year);

  return response.json(book);
});

routes.put("/update_book/:id", async (request, response) => {
  const { id } = request.params;
  const { title, gender, author, year } = request.body;

  const updatedBook = await bookRepository.updateBook(
    id,
    title,
    gender,
    author,
    year
  );

  return response.json(updatedBook);
});

routes.delete("/books/:id", async (request, response) => {
  const { id } = request.params;

  const deletedBook = await bookRepository.deleteBook(id);

  return response.json(deletedBook);
  
});

module.exports = routes;
