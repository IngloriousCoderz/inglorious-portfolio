let cache = new Map();

async function loadCached(url) {
  if (cache.has(url)) {
    return cache.get(url);
  }

  const response = await fetch(url);
  const text = await response.text();
  cache.set(url, text);
  return text;
}

function promiseBasedloadCached(url) {
  if (cache.has(url)) {
    return Promise.resolve(cache.get(url)); // (*)
  }

  return fetch(url)
    .then((response) => response.text())
    .then((text) => {
      cache.set(url, text);
      return text;
    });
}
