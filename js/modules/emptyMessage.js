export default function emptyMessage() {
  const textEmpty = document.querySelector('#books-listed__text-empty');
  if (
    localStorage.bookShelfData === '[]'
    || localStorage.bookShelfData === undefined
  ) {
    textEmpty.classList.replace('d-none', 'd-block');
  } else {
    textEmpty.classList.replace('d-block', 'd-none');
  }
}