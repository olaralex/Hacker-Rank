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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
    let sum = 0;
    for(let i=0;i<arr.length;i++)
    {
        sum += arr[i];
    }
    let allSum = [];
    let initSum = sum;
    for(let j=0;j<arr.length;j++)
    {
        sum = initSum;
        sum -= arr[j];
        allSum.push(sum);
    }
    const minSum = allSum.reduce((a, b) => Math.min(a, b));
    const maxSum = allSum.reduce((a, b) => Math.max(a, b));
    console.log(minSum,maxSum);
}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
