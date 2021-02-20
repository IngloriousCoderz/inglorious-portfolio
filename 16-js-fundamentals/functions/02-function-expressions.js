/* Function declaration */

function namedFunction() {
    console.log('Named function');
}

/* Anonymous functions */
function () {
    console.log('Anonymous function')
}

/* IIFE - Immediately-invoked function expression */

(function () {
    const myVar = 2;
    console.log(myVar);
})();

/* Function expressions */

const myFunc = function () {
    console.log('Function expression');
};

myFunc();

button.onclick = function () {
    console.log('clicked!');
};

ask(
    'Did you understand?',
    
    function() {
        alert('Awesome!');
    },
    
    function() {
        alert('I will repeat it once more.');
    }
);

ask('Are you hungry?', onHungry, onNotHungry);

function onHungry() {
    console.log('Then eat!');
}

function onNotHungry() {
    console.log('Then drink!');
}

function ask(question, handleYes, handleNo) {
    let answer = confirm(question);
    if (answer) {
        handleYes();
    } else {
        handleNo();
    }
}