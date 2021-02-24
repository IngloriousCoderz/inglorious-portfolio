/* function declaration */

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

function callbackIfYes() {
  alert('You agreed.');
}

function callbackIfNo() {
  alert('You canceled the execution.');
}

ask('Do you agree?', callbackIfYes, callbackIfNo);

/* function expression */

const ask = function (question, yes, no) {
  if (confirm(question)) {
    yes();
  } else {
    no();
  }
};

ask(
  'Do you agree?',
  function () {
    alert('You agreed.');
  },
  function () {
    alert('You canceled the execution.');
  }
);

/* arrow function */

const ask = (question, yes, no) => {
  if (confirm(question)) {
    yes();
  } else {
    no();
  }
};

ask(
  'Do you agree?',
  () => alert('You agreed.'),
  () => alert('You canceled the execution.')
);
