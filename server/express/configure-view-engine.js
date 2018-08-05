const hbs = require('hbs');
const path = require('path');

module.exports = app => {
    hbs.registerPartials(path.join(process.cwd(), 'server/views/partials'));
    app.set('view engine', 'hbs');
    app.set('views', path.join(process.cwd(), 'server/views'));

    hbs.registerHelper('getCurrentYear', () => new Date().getFullYear());
};
