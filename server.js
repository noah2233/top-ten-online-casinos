const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist/top-ten-online-casinos'));

app.listen(process.env.Port || 8080);

//path location strategy

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/top-ten-online-casinos/index.html'));
});

console.log('Console listing!');