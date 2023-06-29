const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/'){
        res.setHeader('Content-type', 'text/html');
        res.write('<html>')
        res.write('<html><title>My first server</title></head>')
        res.write('<body><form action="/message" method="POST"><input type=text name ="message"><button type=submit>Envoyer</button></form></body>')
        res.write('</html>')
        return res.end()
    }
    if(url ==='/message' && method === 'POST'){
        fs.writeFileSync('message.txt', 'DAMY'); 
        res.statusCode = 302; 
        res.setHeader('Location', '/');
        return res.end();
    }
    
    console.log(req.url, req.method, req.headers);
    res.setHeader('Content-type', 'text/html');
    res.write('<html>')
    res.write('<html><title>My first server</title></head>')
    res.write('<body><h1>Hello welcome</h1></body>')
    res.write('</html>')
    res.end()
    // process.exit();
})

server.listen(3000)