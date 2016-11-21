module.exports = (app) => {
    app.get('/about', (req, res) => {
        res.locals.about_active = true;
        res.render('about.html');
    });
};
