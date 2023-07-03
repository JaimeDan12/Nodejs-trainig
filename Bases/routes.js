const fs = require('fs');

const requestHandler = (req, res) =>{
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
        //Creation de streams (morceaux)
        const body=[];
        req.on('data', (morc) => {
            console.log("chaque morceau :", morc);
            body.push(morc);
        });
        
        //Tamponnage (buffer)
        return req.on('end', () => {
            const parseBody = Buffer.concat(body).toString(); 
            console.log("la converstion de chque morceau :", parseBody);
            const msg = parseBody.split('=')[1];
            fs.writeFile('message.txt', msg, err => {
                res.statusCode = 302; 
                res.setHeader('Location', '/');
                return res.end();
            }); 
        });
    }
    
    console.log(req.url, req.method, req.headers);
    res.setHeader('Content-type', 'text/html');
    res.write('<html>')
    res.write('<html><title>My first server</title></head>')
    res.write('<body><h1>Hello welcome</h1></body>')
    res.write('</html>')
    res.end()

}

module.exports = requestHandler;
// module.exports = {
//     handler: requestHandler, 
//     someText: 'Some hard coded text'
// };