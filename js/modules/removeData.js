const removeData = (bookID) => {
  const bookList = JSON.parse(localStorage.getItem('bookShelfData')) || [];
  const updatedBookList = bookList.filter((book) => book.id !== bookID);
  localStorage.setItem('bookShelfData', JSON.stringify(updatedBookList));
};

export default removeData;