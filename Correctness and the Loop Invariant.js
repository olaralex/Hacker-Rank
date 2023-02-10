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


function insertionSort (ar) {
  ar.sort((a,b)=>a-b);
  return ar;
}
 
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    var ar = readLine().replace(/\s+$/g, '').split(' ').map(Number);
    //get input for ar
    const result = insertionSort(ar).join(' ');
    //print ar
    ws.write(result + '\n');
    
    ws.end();
}