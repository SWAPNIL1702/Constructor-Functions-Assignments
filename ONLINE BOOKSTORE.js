// function for the author
function author (name, birth_year, nationality){
    this.name = name
    this.birth_year = birth_year
    this.nationality = nationality
}

// function for the book
function book (title, author, genre, price){
    this.title = title
    this.author = author
    this.genre = genre
    this.price = price
}

book.prototype.getBookInfo = function() {
    console.log("-----------------------")
    console.log(`Title : ${this.title}`)
    console.log(`Author : ${this.author}`)
    console.log(`Genre : ${this.genre}`)
    console.log(`Price : ${this.price}`)
    console.log("-----------------------")
}

let author_1 = new author("Rabindranath Tagore", "1861", "Indian")
let author_2 = new author("Ruskin Bond", "1934", "Indian")

let book_1 = new book("Geetanjali", author_1, "Poetry", "₹73")
let book_2 = new book("Roads to Mussoorie", author_2, "Poetry", "₹189")

book_1.getBookInfo()
book_2.getBookInfo()