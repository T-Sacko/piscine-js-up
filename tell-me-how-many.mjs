import fs from 'fs/promises';
import path from 'path';

// Access the command line arguments and get the first argument (the directory path)
const dirPath = process.argv[2] ? path.resolve(process.argv[2]) : process.cwd();

// Read the contents of the directory
fs.readdir(dirPath)
  .then(entries => {
    const numberOfEntries = entries.length;

    // Print the result in the console
    console.log(numberOfEntries);
  })