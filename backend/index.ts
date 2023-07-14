const http = require("http")

/* (async () => {
    console.log('Shashank')
})() */

http.createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "application/json","Access-Control-Allow-Origin": "*",});
    response.write(JSON.stringify({ 'url': request.url , 'message': 'called succesfully'}));
    response.end();
}).listen(8080)