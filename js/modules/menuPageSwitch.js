export default function menuPageSwitch() {
  const listButton = document.querySelector('#menu__list');
  const addNewButton = document.querySelector('#menu__add-new');
  const contactButton = document.querySelector('#menu__contact');
  const menuButtonsArr = [listButton, addNewButton, contactButton];

  const listPage = document.querySelector('#books');
  const addNewPage = document.querySelector('#add-book');
  const contactPage = document.querySelector('#contact');
  const pagesArr = [listPage, addNewPage, contactPage];

  function displaySwitch(indexButton) {
    pagesArr.forEach((page, indexPage) => {
      if (indexPage === indexButton) {
        page.classList.replace('d-none', 'd-block');
        menuButtonsArr[indexPage].classList.add('active', 'fw-bold');
      } else {
        page.classList.replace('d-block', 'd-none');
        menuButtonsArr[indexPage].classList.remove('active', 'fw-bold');
      }
    });
  }

  menuButtonsArr.forEach((element, index) => {
    element.addEventListener('click', () => {
      displaySwitch(index);
    });
  });

  displaySwitch(0);
}
