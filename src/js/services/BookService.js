class BookService {
  
  static async getAllBooks() {
    const url = "http://localhost:8080/api/books";
    try {
    const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error(error.message);
      return [];
    }
  }

  static async getBookById(id) {
    const url = "http://localhost:8080/api/books/" + id;
    try {
    const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error(error.message);
      return null;
    }
  }

}

export default BookService;
