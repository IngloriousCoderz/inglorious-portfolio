let rows = 3;
let columns = 5;

let rectangle = '';
for (let i = 0; i < rows; i++) {
    //let row = '*****';

    let row = '';
    for (let j = 0; j < columns; j++) {
        row += '*';
    }

    rectangle += row + '\n';
}

console.log(rectangle);