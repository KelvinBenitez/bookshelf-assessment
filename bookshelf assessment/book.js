//class Book defines a single book and its properties include author,language, subject, and title
class Book {
    constructor(author, language, subject, title) {
        this.author = author;
        this.language = language;
        this.subject = subject;
        this.title = title;
        this.comments=[];
    }
    //renders the properties on to the page
    render() {
        const bookWrapper = document.createElement("div");

        const h1 = document.createElement("h1")
        h1.textContent = `Book author: ${this.author}`;

        const h2 = document.createElement("h2")
        h2.textContent = `Book language : ${this.language}`;

        const h3 = document.createElement("h3")
        h3.textContent = `Book subject: ${this.subject}`;

        const h4 = document.createElement("h4")
        h4.textContent = `Book title: ${this.title}`;

        const img = document.createElement("img");
        img.src = "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&w=1000&q=80"
        img.style.width = "20%"
        img.style.height = "20%"
        bookWrapper.append(h1, h2, h3, h4, img);

        return bookWrapper;
    }

}
const commentsDiv = document.createElement("div");
commentsDiv.classList.add("comments");

