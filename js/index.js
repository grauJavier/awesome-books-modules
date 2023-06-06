import bookshelfLoader from './modules/bookshelfLoader.js';
import menuPageSwitch from './modules/menuPageSwitch.js';
import addButton from './modules/addButton.js';
import dateTime from './modules/dateTime.js';

bookshelfLoader();
menuPageSwitch();
addButton();
dateTime();
setInterval(dateTime, 1000);