// XMLHttpRequest

// $.get('URL', function(response) {}, function(error) {});

// const promise = $.get('URL');
// promise.done(function(response) {});

// Antony prefers using Axios.js instead of Fetch API

fetch('https://swapi.dev/api/people/1/')
  .then((response) => {
    console.log(response.ok); // true
    console.log(response.status); // 200
    console.log(response.headers);

    return response.json();
  })
  .then((body) => {
    console.log(body);
  });
