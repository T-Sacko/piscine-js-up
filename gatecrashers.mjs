import http from 'http';
import fs from 'fs/promises';

const port = 5000;
const users = {
  'Caleb_Squires': 'abracadabra',
  'Tyrique_Dalton': 'abracadabra',
  'Rahima_Young': 'abracadabra'
};

async function handleRequest(req, res) {
  const authorization = req.headers.authorization;
  const [username, password] = Buffer.from(authorization.split(' ')[1], 'base64').toString().split(':');
  
  if (!users[username] || users[username] !== password) {
    res.writeHead(401, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({error: 'Authorization Required'}));
    return;
  }
  
  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', async () => {
      try {
        const data = JSON.parse(body);
        const filename = `${data.name.split(' ').join('_')}.json`;
        await fs.writeFile(filename, JSON.stringify(data));
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(data));
      } catch (error) {
        res.writeHead(500, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({error: 'Server Failed'}));
      }
    });
  } else {
    res.writeHead(404, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({error: 'Not Found'}));
  }
}

const server = http.createServer(handleRequest);
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
