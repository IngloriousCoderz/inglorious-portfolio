const promise = new Promise((resolve, reject) => {
  resolve(42);
});

const promise = Promise.resolve(42);
const promise = Promise.reject(new Error('Rejected'));

const promise = Promise.all([]);
promise.then();
