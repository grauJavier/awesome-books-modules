import emptyMessage from './emptyMessage.js';
import printHTML from './printHTML.js';
import roundCorners from './roundCorners.js';

const bookList = JSON.parse(localStorage.getItem('bookShelfData')) || [];

export default function bookshelfLoader() {
  emptyMessage();

  for (let i = 0; i < bookList.length; i += 1) {
    printHTML(bookList[i].title, bookList[i].author, bookList[i].id);
  }

  roundCorners();
}
