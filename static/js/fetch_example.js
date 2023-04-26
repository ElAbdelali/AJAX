fetch('/some-url')
  .then((response) => response.json())
  .then((responseData) => {
    document.querySelector('#my-div').innerText = responseData;
  });
