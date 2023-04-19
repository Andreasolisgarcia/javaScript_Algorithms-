const fs = require('fs');
const filePath = __dirname + "/" + process.argv[2]
const fileName = process.argv[2];

// No name provited
if (process.argv.length < 3){
    console.error('Error: Please provide a filename as an argument.')
    return
}

// Check if the file exists
fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      console.error('Error: File not found');
      return;
    }
    console.log('intArray with data from ' + fileName);
  });

  // Méthode synchrone
let data;
try {
    data = fs.readFileSync(fileName, 'utf8');
} catch (error) {
    console.error(error.message);
}

const splitData = data.split("\n");
      intArray = splitData.map(str => parseInt(str));

const nextIsTaller = (array) => {
    let left = 0;
    let right = array.length - 1;
    let count = 1;
  
    while (left < right) {
      if (array[left] > array[right]) {
        count++;
        right--;
      } else {
        left++;
      }
    }
  
    return count;
  }

// ***************  change array data ************//
const array = [3, 7, 8, 3, 6, 1]
// **********************************************//
console.log(`\u001b[32mBuildings with sun: ${nextIsTaller(array)} \u001b[0m`);
// node exo6.js wtf.txt
  