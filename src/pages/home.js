import { useEffect, useState } from "react";
import BookService from "../services/book-service";

const { default: CardBook } = require("../views/home/card");

const Home = () => {
  const [isLoading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    try {
      const books = await BookService.getBooks();
      setBooks(books);
    } catch (error) {
      console.log(error);
      alert("เกิดข้อผิดพลาด code" + error.message);
    }
    setLoading(false);
  };

  const handleDeleteBook = async (bookId) => {
      await BookService.delete(bookId)
      getBooks()
  };

  if (isLoading) {
    return <div className="loader"></div>;
  }
  return (
    <div>
      <h2>หนังสือทั้งหมด</h2>
      <hr />
    <div className="d-flex space-12p flex-wrap justify-center">
      {books.map((book) => {
        return (
          <CardBook
            key={book.id}
            book={book}
            handleDeleteBook={handleDeleteBook}
          />
        );
      })}
    </div>
    </div>
  );
};

export default Home;
