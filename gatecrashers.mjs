import http from 'http';
import { join } from 'path';
import { promises as fs } from 'fs';

const port = 5000;
const dirName = 'guests';
const dirPath = join(process.cwd(), dirName);
const authorizedUsers = {
  'Caleb_Squires': 'abracadabra',
  'Tyrique_Dalton': 'abracadabra',
  'Rahima_Young': 'abracadabra',
};

const server = http.createServer((req, res) => {
  const { url, method, headers } = req;
  const [path, auth] = headers.authorization ? headers.authorization.split(' ') : [];

  if (url === '/favicon.ico') {
    res.writeHead(204);
    return res.end();
  }

  if (method === 'POST' && authorizedUsers[path.split('/')[1]] === auth) {
    let body = '';

    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', async () => {
      const { answer, drink, food } = JSON.parse(body);
      const guestName = path.slice(1);
      const filePath = join(dirPath, `${guestName}.json`);

      try {
        await fs.writeFile(filePath, body);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(body);
      } catch (error) {
        console.error(error);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'server failed' }));
      }
    });
  } else {
    res.writeHead(401, { 'Content-Type': 'application/json', 'WWW-Authenticate': 'Basic realm="Guest List Access"' });
    res.end(JSON.stringify({ error: 'Unauthorized' }));
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
