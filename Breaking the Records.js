'use strict';

const fs = require('fs');

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
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

function breakingRecords(scores) {
    // Write your code here
    let result = [];
    let high;
    high = scores[0];
    let low;
    low = scores[0];
    result[0] = 0;
    result[1] = 0;
    scores.forEach(score => {
        // console.log('score:',score);
      if(score > high)
      {
        high = score;
        // console.log('high:',high);
        // console.log('result[0]:',result[0]);
        result[0]++;
      }
      if(score < low)
      {
        low = score;
        // console.log('low:',low);
        // console.log('result[1]:',result[1]);
        result[1]++;
      }
      // console.log('result:',result);
      //   console.log(' ');
    })
    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const scores = readLine().replace(/\s+$/g, '').split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

    const result = breakingRecords(scores);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
