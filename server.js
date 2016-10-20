"use strict";

let express = require("express"), app = express(), port = process.env.PORT || 8080;

app.listen(port, function() {
    console.log("App is Listening @ Port #: " + port)
});

app.get("/", function(req, res) {

// the details can be found via request headers refer to README.md

   let ip = req.headers["x-forwarded-for"] ||
     req.connection.remoteAddress ||
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress;
   let la = req.headers["accept-language"].split(",")[0];
   let os = req.headers["user-agent"].split(')')[0].split('(')[1];

   // JSON
   res.json({
      ipaddress: ip,
      language: la,
      software: os
   });
});
