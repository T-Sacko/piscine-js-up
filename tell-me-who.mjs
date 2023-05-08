import fs from 'fs/promises';
import path from 'path';

const folder = process.argv[2] ? path.resolve(process.argv[2]) : process.cwd();

fs.readdir(folder)
  .then(async (entries) => {
    const names = await Promise.all(
      entries.map(async (entry) => {
        const content = await fs.readFile(path.join(folder, entry), 'utf-8');
        const guest = JSON.parse(content);
        return `${guest.lastname} ${guest.firstname}`;
      })
    );

    names.sort();

    names.slice(0, -1).forEach((name, index) => {
      process.stdout.write(`${index + 1}. ${name}\n`);
    });
    process.stdout.write(`${names.length}. ${names[names.length - 1]}`);
  })
  