const { log } = require('console');
const fs = require('fs')

const reqHandler =(req, res) =>{
    const url = req.url;
    const method = req.method; 
    
    if(url === '/'){
        res.setHeader('Content-type', 'text/html');
        res.write('<html>')
        res.write('<html><title>My first assignment</title></head>')
        res.write('<body><h2>Hello everyone and welcome to my server !<h2><form action="/create-user" method="POST"><input type=text name ="username"><button type=submit>Envoyer</button></form></body>')
        res.write('</html>')
        return res.end()
    }
    else if (url === '/users'){
        res.setHeader('Content-type', 'text/html');
        res.write('<html>')
        res.write('<html><title>My first assignment</title></head>')
        res.write('<body><h2>Users list<h2><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></body>')
        res.write('</html>')
        return res.end()
    }
    else if (url === '/create-user' && method === 'POST'){
        const body = [];
        res.on('data', (morc) =>{
            console.log(morc);
            body.push();
            // return res.end();
        })
        res.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            console.log(parseBody.split('=')[1]);
        })
        res.statusCode = 302; 
        res.setHeader('location', '/');
        res.end();

    }
}

module.exports = reqHandler;