const express = require('express');
const app = express();

app.get('/alive', 
    function(req, res) {
        res.send('its alive');
    }
);

app.get('/echo/:e',
    function(req, res) {
        res.send(req.params.e);
    }
);

app.get('/name/:first/:last',
    function(req, res) {
        res.send('<i>' +req.params.first +' ' +req.params.last +'</i>');
    }
);

app.post('/post',
    function(req, res) {
        res.send("post received");
    }
);

app.use(
    function(req, res, next) {
        
        console.log("middleware was called");
    }
);

app.listen(3000);
