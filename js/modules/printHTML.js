import removeData from './removeData.js';
import emptyMessage from './emptyMessage.js';
import roundCorners from './roundCorners.js';

export default function printHTML(title, author, bookID) {
  const bookshelf = document.querySelector('#books-listed__body');

  bookshelf.insertAdjacentHTML(
    'beforeend',
    `
       <tr id="books-listed__book">
         <td id="book__title">${title}</td>
         <td id="book__author">by ${author}</td>
         <td id="book__remove-button" class="text-end">
           <button type="button" class="book__remove-button btn btn-outline-primary rounded-pill" book-id="${bookID}">
             Remove
           </button>
         </td>
       </tr>
      `,
  );

  const removeButton = document.querySelector(`button[book-id="${bookID}"]`);
  removeButton.addEventListener('click', () => {
    removeData(`${bookID}`);
    removeButton.parentElement.parentNode.remove();
    emptyMessage();
    roundCorners();
  });
}
