const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(__dirname + '/dist/top-ten-online-casinos'));

//path location strategy

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/top-ten-online-casinos/index.html'));
});

app.listen(port, () => {
});