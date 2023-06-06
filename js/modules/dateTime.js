import { DateTime } from './luxon.js';

export default function dateTime() {
  const headerDate = document.querySelector('#header__date');
  const innerText = DateTime.now().setLocale('en').toLocaleString({
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });

  headerDate.textContent = innerText;
}
