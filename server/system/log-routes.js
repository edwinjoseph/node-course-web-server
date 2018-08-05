const fs = require('fs');

module.exports = app => {
    app.use((req, res, next) => {
        const now = new Date().toString();
        const log = `${now}: ${req.method} ${req.url}`;
        console.log(log);
        fs.appendFile('server.log', log + '\n', (err) => {
            if (err) {
                console.log('Unable to append to server.log.')
            }
        });
        next();
    });
};
