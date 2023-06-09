'use strict';

const button = document.querySelector('#update-status');

button.addEventListener('click', () => {
  const queryString = new URLSearchParams({ order: 123 }).toString();
  // you could also hard code url to '/status?order=123'
  const url = `/status?${queryString}`;

  fetch(url)
    .then((response) => response.text())
    .then((status) => {
      document.querySelector('#order-status').innerHTML = status;
    });
});
