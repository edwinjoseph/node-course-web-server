const express = require('express');
const path = require('path');

module.exports = app => {
    if (process.env.ENABLE_STATIC_SERVER === 'true') {
        app.use(express.static(path.join(__dirname, '../public')));
    }
};
