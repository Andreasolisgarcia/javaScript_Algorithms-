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
 //   console.log('***** File exists ******');
  });

  // Méthode synchrone
let data;
try {
    data = fs.readFileSync(fileName, 'utf8');
} catch (error) {
    console.error(error.message);
}

const splitData = data.split("\n");
const intArray = splitData.map(str => parseInt(str));

const nextIsTaller = (array) => {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
      let isTaller = true;
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] >= array[i]) {
          isTaller = false;
          break;
        }
      }
      if (isTaller) {
        count++;
      }
    }
    return count;
  }
  

// ***************  change array data ************//
const array = intArray
// **********************************************//
console.log(`\u001b[32mBuildings with sun: ${nextIsTaller(array)} \u001b[0m`);
// node exo2.js wtf.txt