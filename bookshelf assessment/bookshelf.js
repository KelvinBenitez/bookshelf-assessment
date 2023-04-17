
class bookshelf {
    constructor(){
        this.bookData= [];
        this.bookWrapper = document.createElement("div");
        this.bookWrapper.id = "bookWrapper";
    } 

    seed(books){
        for (const book of bookData){
            const newBook = new Book(book.author, book.language, book.subject, book.title);
            this.addBook(newBook) 
        }
    }

    addBook(singleBook){
        this.bookData.push(singleBook)
    }

    render(){
        for(const book of this.bookData){
            this.bookWrapper.append(book.render())
        }
        document.body.append(this.bookWrapper)
    }
}
