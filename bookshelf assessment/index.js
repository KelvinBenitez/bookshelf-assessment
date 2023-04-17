const libraryInstance = new bookshelf();

libraryInstance.seed(bookData);

libraryInstance.render(); 


const addBookButton = document.getElementById("userInputButton");
addBookButton.addEventListener("click", () => {
  const authorInput = document.getElementById("Author").value;
  const languageInput = document.getElementById("langauge").value;
  const titleInput = document.getElementById("title").value;
  const newBook = new Book(authorInput, languageInput, [], titleInput); // Create a new book instance with empty subject array
  libraryInstance.addBook(newBook); // Add the new book to the bookshelf instance
  const bookWrapper = document.querySelector('#bookWrapper');
  bookWrapper.innerHTML = ""; // Clear the existing books from the DOM
  libraryInstance.render(); // Render the updated bookshelf, the new book will appear in the bottom
});
