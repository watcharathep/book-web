import axios from "axios";
import { apiUrl } from "../configs/endpoint";

class Book {
  url = `${apiUrl}/books`;

  async create(data) {
    try {
      const response = await axios.post(this.url, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async getBooks() {
    try {
      const response = await axios.get(this.url);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async delete(bookId) {
    try {
      const response = await axios.delete(`${this.url}/${bookId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  updateDetail(bookId,data) {}
}

const BookService = new Book();
export default BookService;
