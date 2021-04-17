const getSWPeople = getSWData('people');
const getSWPlanets = getSWData('planets');

async function getLukeAndHisPlanet() {
  try {
    const [luke, tatooine] = await Promise.all([
      getSWPeople(1),
      getSWPlanets(1),
    ]);

    console.log(luke.name, 'lives on', tatooine.name);
  } catch (error) {
    console.error(error);
  }
}

function getSWData(type) {
  return async (id) => {
    const response = await fetch(`https://swapi.dev/api/${type}/${id}/`);

    console.log(response.status); // 200
    console.log(response.ok); // true
    console.log(response.headers); // Headers {}

    const body = await response.json();

    return body;
  };
}

async function loadScripts() {
  try {
    const script1 = await loadScript('1.js');
    const script2 = await loadScript('2.js');
    const script3 = await loadScript('3.js');

    console.log(script1, script2, script3);
  } catch (error) {
    console.error(error);
  } finally {
    console.log('Done!');
  }
}
