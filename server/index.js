require('dotenv').config();

const express = require('express');

const app = express();

require('./express/configure-view-engine')(app);

require('./routes/static')(app);
require('./system/log-routes')(app);
require('./routes/pages/homepage')(app);
require('./routes/pages/about')(app);

app.listen(process.env.PORT, () => {
    console.log(`Server is up on port ${process.env.PORT}`);
});
