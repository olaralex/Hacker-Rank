'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    let negNumber = 0;
    let posNumber = 0;
    let zero = 0;
    arr.forEach(number => {
        if(number > 0){
            posNumber++;
        }
        if(number < 0){
            negNumber++;
        }
        if(number === 0){
            zero++;
        }
    })
    let pozProp = posNumber/arr.length;
    let negProp = negNumber/arr.length;
    let zeroProp = zero/arr.length;
    console.log(pozProp.toPrecision(6));
    console.log(negProp.toPrecision(6));
    console.log(zeroProp.toPrecision(6));
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
