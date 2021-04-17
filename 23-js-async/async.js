// jQuery

$.getJSON(
  'URL',
  function successCallback(data) {
    // ...
  },
  function errorCallback(error) {
    // ...
  }
);

const deferred = $.getJSON('URL');

deferred.done(function successCallback(data) {
  // ...
});

deferred.catch(function errorCallback(error) {
  // ...
});

try {
  // ...
  // ...
  // ...
} catch (error) {
  // ...
} finally {
  // ...
}

loadScript('1.js')
  .then((script) => loadScript('2.js'))
  .then((script) => loadScript('3.js'))
  .then((script) => console.log(script))
  .catch((error) => console.error(error))
  .finally(() => console.log('Done!'));

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

delay(2000).then(() => {});

const promise = new Promise((resolve, reject) => {
  resolve(42);
});

promise.then((value) => console.log(value));

loadScript('1.js', function (error, script) {
  if (error) {
    handleError(error);
  } else {
    // ...
    loadScript('2.js', function (error, script) {
      if (error) {
        handleError(error);
      } else {
        // ...
        loadScript('3.js', function (error, script) {
          if (error) {
            handleError(error);
          } else {
            // ...continue after all scripts are loaded (*)
          }
        });
      }
    });
  }
});
