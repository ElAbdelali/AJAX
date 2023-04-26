'use strict';

fetch('/adjective')
  .then((response) => response.text())
  .then((serverData) => {
    console.log('this will be logged second');
    document.querySelector('#adjective').innerText = serverData;
  });
console.log('this will be logged first');
