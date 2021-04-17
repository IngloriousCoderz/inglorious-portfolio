axios
  .get('https://swapi.dev/api/people/1/')
  .then(({ data }) => console.log(data));

// AJAX requests

const getSWPeople = getSWData('people');
const getSWPlanets = getSWData('planets');

Promise.all([getSWPeople(1), getSWPlanets(1)])
  //
  .then((results) => console.log(results));

function getSWData(type) {
  return (id) => {
    return fetch(`https://swapi.dev/api/${type}/${id}/`).then((response) => {
      console.log(response.status); // 200
      console.log(response.ok); // true
      console.log(response.headers); // Headers {}
      return response.json();
    });
  };
}
