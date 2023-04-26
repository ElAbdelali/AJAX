'use strict';

document.querySelector('#order-form').addEventListener('submit', (evt) => {
  //evt.preventDefault();

  const formInputs = {
    type: document.querySelector('#type-field').value,
    amount: document.querySelector('#amount-field').value,
  };

  fetch('/new-order', {
    method: 'POST',
    body: JSON.stringify(formInputs),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((responseJson) => {
      alert(responseJson.status);
    });
});
