var http = require("http");

http.createServer(function (req, res) {
    res.write("this is an http module ");
    res.end();
  }).listen(8080);
