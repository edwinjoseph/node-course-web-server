module.exports = app => {
    app.get('/', (req, res) => {
        res.render('app.hbs', {
            page_title: 'Home page',
            content: '<p>This is the content for the home page.</p>'
        });
    });
};
