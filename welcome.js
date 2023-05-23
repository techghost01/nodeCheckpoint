// In this task, you will:

// First, require the file system to create a file named "welcome.txt" containing one line "Hello Node".
// Second, create a program that reads and console.log data from hello.txt

const fs = require("fs");

const welcomeText = "Hello Node";

fs.writeFile("welcome.txt", welcomeText, (err, fd) => {
  if (err) throw err;
  else {
    console.log("The file is updated with the given data");

    fs.readFile("welcome.txt", (err, fd) => {
      if (err) throw err;
      else {
        console.log(fd.toString());
      }
    });
  }
});
