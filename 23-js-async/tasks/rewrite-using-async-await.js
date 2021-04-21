async function loadJson(url) {
  const response = await fetch(url);

  if (response.ok) {
    const body = await response.json();
    return body;
  }

  throw new Error(response.status);
}

function promiseBasedloadJson(url) {
  return fetch(url).then((response) => {
    if (response.status == 200) {
      return response.json();
    } else {
      throw new Error(response.status);
    }
  });
}

(async function () {
  try {
    loadJson('no-such-user.json');
  } catch (err) {
    alert(err);
  }
})();
