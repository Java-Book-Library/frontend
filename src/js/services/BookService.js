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

  static async addBook(book) {
    const url = "http://localhost:8080/api/books";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(book)
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error(error.message);
      return null;
    }
  }
  
  static async deleteBookById(id) {
    const url = "http://localhost:8080/api/books/" + id;
    try {
      const response = await fetch(url, {
        method: "DELETE"
      });
      if (response.status === 204) {
        return true;
      }
      throw new Error(`Response status: ${response.status}`);
    } catch (error) {
      console.error(error.message);
      return null;
    }
  }

  static async deleteAllBooks() {
    const url = "http://localhost:8080/api/books";
    try {
      const response = await fetch(url, {
        method: "DELETE"
      });
      if (response.status === 204) {
        return true;
      }
      throw new Error(`Response status: ${response.status}`);
    } catch (error) {
      console.error(error.message);
      return null;
    }
  }

}

export default BookService;
