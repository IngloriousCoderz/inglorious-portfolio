arr.forEach((elem) => {
  Object.values(elem).forEach((value) => {
    value.forEach((item) => {});
  });
});

setInterval(() => {
  performHTTPrequest((response) => {
    setTimeout(() => {
      const id = response.id;
      retrieveFromDatabase(id, (data) => {
        console.log(data);
      });
    }, 2000);
  });
}, 1000);

const promise = performHTTPrequest();
promise.then((response) => { ... });
promise.catch((error) => { ... });
promise.finally(() => { ... });

performHTTPrequest().then((response) => {
  const id = response.id;
  return retrieveFromDatabase(id);
});
.then((data) => { ... })
.catch((error) => { ... })
.finally((connection) => { ... });

new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(42);
  }, 2000);
})
  .then((value) => {
    console.log(value);
    return 'Yay!';
  })
  .then(handleMessage);

function handleMessage(message) {
  console.log(message + '!!!');
}

const object = { name: 'Antony', age: 38 };
new Promise((resolve) => {
  resolve(object);
}).then(printName);

function printName({ name }) {
  console.log(name);
}

loadScript('one.js')
  .then((script1) => loadScript('two.js'))
  .then((script2) => loadScript('three.js'))
  .then((script3) => {
    // this function has access to variables script1, script2 and script3
    one();
    two();
    three();
  });
