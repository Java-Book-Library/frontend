class UserBookService {
  
  static async getAllUserBooks(user) {
    const url = "http://localhost:8080/api/user-book/user/" + user.id;
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

}

export default UserBookService;
