// In this task, you will:

// Create a file named "password-generator"  
// (use npm install generate-password : (https://www.npmjs.com/package/generate-password)

// Create a function that generates random passwords and console.log() that password.

const pGenerator = require('generate-password');


const password = pGenerator.generate({
        length: 17,
        numbers: true,
        excludeSimilarCharacters: true,
        symbols: true
    });

console.log(password)