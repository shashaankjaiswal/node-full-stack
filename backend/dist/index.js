const http = require("http");
http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.write(JSON.stringify({ 'url': request.url, 'message': 'called succesfully' }));
    response.end();
}).listen(8080);
//# sourceMappingURL=index.js.map