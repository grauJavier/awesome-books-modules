export default function roundCorners() {
  const titleCellArr = document.querySelectorAll('#book__title') || [];
  const buttonCellArr = document.querySelectorAll('#book__remove-button') || [];

  const [topLeft] = titleCellArr;
  const [topRight] = buttonCellArr;
  const bottomLeft = titleCellArr[titleCellArr.length - 1];
  const bottomRight = buttonCellArr[buttonCellArr.length - 1];

  if (titleCellArr.length === 1 && titleCellArr.length !== 0) {
    titleCellArr[0].style = 'border-top-left-radius: var(--bs-border-radius-xxl)!important; border-bottom-left-radius: var(--bs-border-radius-xxl)!important;';
    buttonCellArr[0].style = 'border-top-right-radius: var(--bs-border-radius-xxl)!important; border-bottom-right-radius: var(--bs-border-radius-xxl)!important;';
  } else if (titleCellArr.length !== 0) {
    topLeft.style = 'border-top-left-radius: var(--bs-border-radius-xxl)!important;';
    topRight.style = 'border-top-right-radius: var(--bs-border-radius-xxl)!important;';
    bottomLeft.style = 'border-bottom-left-radius: var(--bs-border-radius-xxl)!important;';
    bottomRight.style = 'border-bottom-right-radius: var(--bs-border-radius-xxl)!important;';

    for (let i = 1; i < titleCellArr.length - 1; i += 1) {
      titleCellArr[i].style = 'border-radius: 0;';
      buttonCellArr[i].style = 'border-radius: 0;';
    }
  }
}
