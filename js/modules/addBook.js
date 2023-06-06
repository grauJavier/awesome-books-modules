import roundCorners from './roundCorners.js';
import printHTML from './printHTML.js';

function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (error) {
    return (
      error instanceof DOMException
      // everything except Firefox
      && (error.code === 22
        // Firefox
        || error.code === 1014
        // test name field too, because code might not be present
        // everything except Firefox
        || error.name === 'QuotaExceededError'
        // Firefox
        || error.name === 'NS_ERROR_DOM_QUOTA_REACHED')
      // acknowledge QuotaExceededError only if there's something already stored
      && storage
      && storage.length !== 0
    );
  }
}

export default function addBook() {
  const titleInp = document.querySelector('#add-book__title');
  const authorInp = document.querySelector('#add-book__author');
  const bookList = JSON.parse(localStorage.getItem('bookShelfData')) || [];

  if (storageAvailable('localStorage')) {
    const newBook = {
      title: titleInp.value,
      author: authorInp.value,
      id: `book${bookList.length}`,
    };

    localStorage.setItem(
      'bookShelfData',
      JSON.stringify(bookList.concat(newBook)),
    );
    printHTML(newBook.title, newBook.author, newBook.id);
    roundCorners();
  } else {
    console.log('ERROR: Localstorage not aviable.');
  }
}