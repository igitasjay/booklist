// Book constructor

function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI constructor
function UI() {}

UI.prototype.addBookToLIst = function (book) {
  const list = document.getElementById("book-list");
  // create row
  const row = document.createElement("tr");
  // insert the books
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X<a></td>

  `;
  list.appendChild(row);
};

UI.prototype.clearFields = function () {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
};

// Event listeners
document.getElementById("book-form").addEventListener("submit", function (e) {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const isbn = document.getElementById("isbn").value;

  // INstantiate book
  const book = new Book(title, author, isbn);

  // Instantiate UI
  const ui = new UI();

  // add book to list
  ui.addBookToLIst(book);

  // clear fields
  ui.clearFields();

  e.preventDefault();
});
