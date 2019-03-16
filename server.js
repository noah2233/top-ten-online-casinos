const port = process.env.PORT || 5000;
    
const server = require('./dist/server');

server.app.listen(port, () => {
});
