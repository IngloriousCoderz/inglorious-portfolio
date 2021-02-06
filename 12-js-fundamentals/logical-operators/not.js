let year = 1982;
let isGenZ = year > 2000;
let isNotGenZ = !isGenZ; // year <= 2000;

let myVariable;

/* Using strict inequality */
// let hasAValue = myVariable !== undefined && myVariable !== null;

/* Using strict equality */
// let hasAValue = !(myVariable === undefined) && !(myVariable === null);

/* DeMorgan Law */
// let hasAValue = !(myVariable === undefined || myVariable === null);

/* Reeeeeally explicit */
// let isUndefined = myVariable === undefined;
// let isNull = myVariable === null;
// let hasNoValue = isUndefined || isNull;
// let hasAValue = !hasNoValue;

/* The most concise */
let hasAValue = myVariable != null;

if (hasAValue) {
    alert(myVariable);
}