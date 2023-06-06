import addBook from './addBook.js';
import emptyMessage from './emptyMessage.js';

const addButton = () => {
  const addButtonHTML = document.querySelector('#add-book__form');

  addButtonHTML.addEventListener('submit', (event) => {
    event.preventDefault();
    addBook();
    emptyMessage();
    addButtonHTML.reset();
  });
};

export default addButton;
