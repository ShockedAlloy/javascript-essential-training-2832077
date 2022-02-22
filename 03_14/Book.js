class Book {
  constructor(
    name,
    author,
    totalPages,
    format,
    genre,
    bookOpen,
    pagesRead
  ) {
    this.name = name;
    this.author = author;
    this.totalPages = totalPages;
    this.format = format;
    this.genre = genre;
    this.bookOpen = bookOpen;
    this.pagesRead = pagesRead;
  }
  toggleBook(bookStatus) {
    this.bookOpen = bookStatus;
  }
  currentPage() {
    let pageStart = 0;
    let pagesRead = new pagesRead;
    let totalPages = pageStart - pagesRead; // elapsed time in milliseconds
    return totalPages;
  }
}

export default Book;
