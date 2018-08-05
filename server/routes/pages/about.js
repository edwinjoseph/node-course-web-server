module.exports = app => {
    app.get('/about', (req, res) => {
        res.render('app.hbs', {
            page_title: 'About page',
            content: '<p>This is the content for the about page.</p>'
        });
    });
};
